import React, {FC, useContext} from 'react';
import FormUploadFile from "./FormUploadFile";
import EUSignContext from "../context/EUSign";

interface SignFormProps {
    pkTypes: number,
    setPKTypes: (pkTypes: number) => void,
    euSign: any,
    selectedCA: string,
    setSelectedCA: (selectedCA: string) => void,
    setPrivateKey: (privateKey: Uint8Array) => void,
    selectedKM: string,
    setSelectedKM: (selectedKM: string) => void,
    KMsVisible: string[],
    password: string,
    setPassword: (password: string) => void,
    onSubmit: () => void;
}

const SignForm: FC<SignFormProps> = (props) => {
    const {euSign} = useContext<any>(EUSignContext);

    return (
        <div>
            <div className="form-group row mb-2">
                <label className="col-form-label col-sm-3 text-right">Тип носія</label>
                <div className="col-sm-9">
                    <div className="form-check"><label className="form-check-label">
                        <input type="radio" className="form-check-input" value="1"
                               checked={props.pkTypes === 1} onChange={() => props.setPKTypes(1)}/>
                        Файловий носій (flash-диск, CD-диск, SD-картка тощо)</label></div>
                    <div className="form-check"><label className="form-check-label">
                        <input type="radio" className="form-check-input" value="2"
                               checked={props.pkTypes === 2} onChange={() => props.setPKTypes(2)}/>
                        Захищений носій (е.ключ Алмаз-1К, Кристал-1 тощо)</label></div>
                </div>
            </div>

            {euSign &&euSign.m_CAs.length > 0 &&
                <div className="form-group row mb-2">
                    <label className="col-form-label col-sm-3 text-right">ЦСК</label>
                    <div className="col-sm-5">
                        <select className="form-control" onChange={(ev) => props.setSelectedCA(ev.currentTarget.value)}
                                value={props.selectedCA}>
                            {euSign.m_CAs.map((item: any, index: number) => <option key={item.issuerCNs[0]}
                                                                                    value={index}>{item.issuerCNs[0]}</option>)}
                        </select>
                    </div>
                </div>
            }

            {props.pkTypes == 1 &&
                <div className="form-group row mb-2">
                    <label className="col-form-label col-sm-3 text-right">Файл з ос. ключем</label>
                    <div className="col-sm-5">
                        <FormUploadFile accept={".dat,.pfx,.pk8,.zs2,.jks"} onChange={(file) => {
                            euSign?.BASE64Decode(file.content).then((data: Uint8Array) => {
                                props.setPrivateKey(data);
                            });
                        }}/>
                    </div>
                </div>
            }

            {props.pkTypes == 2 &&
                <div className="form-group row mb-2">
                    <label className="col-form-label col-sm-3 text-right">Носій</label>
                    <div className="col-sm-5">
                        <select className="form-control" onChange={(ev) => props.setSelectedKM(ev.currentTarget.value)}
                                value={props.selectedKM}>
                            {props.KMsVisible.map((item) => <option key={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
            }

            <div className="form-group row mb-2">
                <label className="col-form-label col-sm-3 text-right">Пароль</label>
                <div className="col-sm-5">
                    <input type="password" className="form-control"
                           onChange={(e) => props.setPassword(e.currentTarget.value)}
                           value={props.password}/>
                </div>
            </div>

            <div className="row ">
                <div className="offset-3 col-9">
                    <button type="button" className="btn btn-primary mr-2"
                            onClick={() => {
                                props.onSubmit();
                            }}>Зчитати</button>
                </div>
            </div>
        </div>
    );
};

export default SignForm;