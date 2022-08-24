import React, {FC, useContext, useEffect, useState} from 'react';
import SignForm from "../components/SignForm";
import Loader from "./ui/Loader";
import EUSignContext from "../context/EUSign";
import {makeErrorText} from "./util";

interface SignProps {
    onRead: (readedPKey: any) => void;
}

const Sign: FC<SignProps> = (props) => {
        const {euSign} = useContext<any>(EUSignContext);

        const [KMs, setKMs] = useState<any[]>();
        const [updatingKM, setUpdatingKM] = useState<boolean>(false);
        const [updateKM, setUpdateKM] = useState<boolean>(false);

        const [KMsVisible, setKMsVisible] = useState<string[]>([]);

        const [pkTypes, setPKTypes] = useState<number>(1);
        const [selectedCA, setSelectedCA] = useState<string>('');
        const [selectedKM, setSelectedKM] = useState<string>('');
        const [privateKey, setPrivateKey] = useState<Uint8Array>();
        const [password, setPassword] = useState<string>('');

        const [loading, setLoading] = useState<boolean>(false);
        const [loaderText, setLoaderText] = useState<string>('');
        const [status, setStatus] = useState<string>('');
        const [statusError, setStatusError] = useState<boolean>(false);

        const initForm = () => {
            euSign?.GetKeyMedias()
                .then((KeyMedias: any[]) => {
                    setKMs(KeyMedias);
                    beginUpdateKMs();
                });
        };

        useEffect(() => {
            initForm();
            return () => {
            };
        }, []);

        const GetSelectedCA = () => {
            const CAs = euSign?.m_CAs || [];
            if (CAs === null || CAs.length === 0) {
                return null;
            }
            if (CAs.length === 1) {
                return CAs[0];
            }
            const index = Number(selectedCA);
            return index !== 0 ? CAs[index /*  - 1*/] : null;
        };

        const GetKMsVisibleNames = (keyMediaList?: any[]) => {
            const arr: string[] = [];
            if (keyMediaList != null) {
                keyMediaList.forEach((item: any) => {
                    arr.push(item.visibleName);
                });
            }
            return arr;
        };

        const IsKMConnected = (keyMedia: any, keyMediaList: any[]) => {
            for (let i = 0; i < keyMediaList.length; i++) {
                const element = keyMediaList[i];
                if (keyMedia.typeIndex === element.typeIndex && keyMedia.devIndex === element.devIndex && keyMedia.visibleName === element.visibleName) {
                    return true;
                }
            }
            return false;
        };

        const IsKMsUpdated = (keyMediaList1: any[], keyMediaList2?: any[]) => {
            const visibleNames1 = GetKMsVisibleNames(keyMediaList1);
            const visibleNames2 = GetKMsVisibleNames(keyMediaList2);
            if (visibleNames1.length !== visibleNames2.length) {
                return true;
            }
            for (let i = 0; i < visibleNames1.length; i++) {
                if (visibleNames1[i] !== visibleNames2[i]) {
                    return true;
                }
            }
            return false;
        };

        const beginUpdateKMs = () => {
            if (updatingKM) {
                setUpdateKM(true);
            } else {
                setUpdateKM(true);
                setUpdatingKM(true);
                /*Modal.onClose(() => {
                    this.StopUpdateKMs();
                });*/
                euSign?.GetKeyMedias().then((KeyMedias: any[]) => {
                    setUpdatingKM(false);
                    if (updateKM) {
                        // @ts-ignore
                        if (this.m_readedPKey !== null && this.m_readedPKey.keyMedia !== null) {
                            // @ts-ignore
                            if (!IsKMConnected(this.m_readedPKey.keyMedia, KeyMedias)) {
                                KeyMedias = [];
                            }
                        }
                        if (IsKMsUpdated(KeyMedias, KMs)) {
                            setKMs(KeyMedias);
                        }
                        setTimeout(() => {
                            if (updateKM) {
                                beginUpdateKMs();
                            }
                            // eslint-disable-next-line no-magic-numbers
                        }, 1e3);
                    }
                }).catch((error: any) => {
                    setUpdatingKM(false);
                    if (updateKM) {
                        setStatus(makeErrorText("Виникла помилка при оновленні списку носіїв ключової інформації", error));
                        setStatusError(true);
                    }
                    StopUpdateKMs();
                });
            }
        };

        const StopUpdateKMs = () => {
            setUpdateKM(false);
        };

        useEffect(() => {
            const KeyMedias = KMs || [];
            let oldKM = null;
            if (selectedKM) {
                for (let a = 0; a < KeyMedias.length; a++) {
                    if (KeyMedias[a].visibleName === selectedKM) {
                        oldKM = KeyMedias[a];
                        break;
                    }
                }
                setSelectedKM('');
            }

            setKMsVisible(GetKMsVisibleNames(KeyMedias));

            if (oldKM) {
                setSelectedKM(oldKM.visibleName);
            }

        }, [KMs]);

        const GetSelectedKM = () => {
            if (KMs == null) {
                return null;
            }

            for (let i = 0; i < KMs.length; i++) {
                const n = KMs[i];
                if (n.visibleName === selectedKM) {
                    const keyMedia = euSign?.euSign.EndUserKeyMedia(n);
                    keyMedia.password = password;
                    /*  if (e.is(':visible')) {
                        keyMedia.user = e.val();
                    }*/
                    return keyMedia;
                }
            }
            return null;
        };

        const _handleActionClick = () => {
            setLoading(true);
            setLoaderText("Зчитування особистого ключа");
            setStatus('');

            const issuerCN = GetSelectedCA()?.issuerCNs[0];
            const keyMedia = GetSelectedKM();
            let readedPKey: any = null;

            Promise.resolve()
                .then(() => {
                    if (keyMedia !== null) {
                        return euSign?.ReadPrivateKey(keyMedia, null, issuerCN);
                    } else if (privateKey !== null) {
                        return euSign?.ReadPrivateKeyBinary(privateKey, password, null, issuerCN);
                    }
                    return Promise.reject("Не обрано носій");
                })
                .then(() => {
                    readedPKey = {};
                    if (keyMedia !== null) {
                        readedPKey.keyMedia = keyMedia;
                    } else if (privateKey !== null) {
                        readedPKey.privateKey = privateKey;
                    }
                    StopUpdateKMs();
                })
                .then(() => euSign?.GetOwnCertificates())
                .then((certArray) => euSign?.GetSupportedSignAlgos(certArray))
                .then(() => {
                    setLoaderText('');
                    // mixpanel.track("PK read success");
                    props.onRead(readedPKey);
                })
                .catch((error) => {
                    // const userCA = error.errorCode == 5 ? selectedCA : undefined;
                    setLoaderText('');
                    setStatus(error ? error.toString() : "Помилка");
                    setStatusError(true);
                    // mixpanel.track("PK read fail", {
                    //     error: error,
                    //     userCA
                    // });
                }).finally(() => {
                setLoading(false);
            });
        };
        return loading ?
            (<XLoader text={loaderText}/>)
            :
            (<SignForm
                euSign={euSign}
                selectedCA={selectedCA}
                selectedKM={selectedKM}
                setSelectedKM={setSelectedKM}
                setPassword={setPassword}
                password={password}
                setSelectedCA={setSelectedCA}
                KMsVisible={KMsVisible}
                pkTypes={pkTypes}
                setPKTypes={setPKTypes}
                setPrivateKey={setPrivateKey}
                onSubmit={() => _handleActionClick()}
            />);
    }
;

export default Sign;