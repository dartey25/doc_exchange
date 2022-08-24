import React, {useContext, useEffect, useState} from 'react';
import {checkAuth, saveSign} from "../components/API/API";
import {UserContext} from "../index";
import XLoader from "../components/ui/Loader";
import Sign from "../components/Sign";
import EUSignCPFrontend from "../lib/EUSignCPFrontend";
//import EUSignContext from "../context/EUSign";
import {useNavigate} from "react-router-dom";
//import AuthState from "../components/states/AuthState";

const Auth = () => {
    //const user = useContext(UserContext)
    const user = {};
    const [loading, setLoading] = useState<boolean>(false);
    const [loaderText, setLoaderText] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('');
    const [euSign, setEUSign] = useState<EUSignCPFrontend>();
    const [pk, setPK] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        checkAuth(user.id).then(res => {
            if (res.ok) {
                console.log(res)
                user.setAuth(!!res.drfo);
                //AuthState.authToken = res.drfo;
                user.setDrfo(res.drfo);
                setLoading(false);
            } else {
                initLibrary();
            }
        }).catch(e => {
            setErrorText(e.toString());
            setLoading(false);
        }).finally(() => {

        })
    }, [])

    const initLibrary = () => {
        console.log('STARTED LOADING LIBRARY')
        setLoaderText('Ініціалізація криптографічної бібліотеки')
        setErrorText('');

        const library = new EUSignCPFrontend();

        library.loadLib()
            .then(() => library.initLib())
            .then(() => {
                console.log('FINISHED LOADING LIBRARY')
                setLoading(false);
                setEUSign(library);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false);
                setErrorText(error.toString().replace("http://iit.com.ua", "https://iit.com.ua"));
                // mixpanel.track("Fail to load library", {
                //     error: error
                // });
            });
    };

    const signFile = () => {

        setLoading(true);
        setLoaderText("Створення підпису");
        euSign?.SignData('1', true, true)
            .then(async (signature) => {
                setLoaderText('');
                //mixpanel.track("Sign create success");
                await saveSign(signature).then(res => {
                    if(res.ok) {
                        user.setAuth(true);
                        navigate('/chat', {replace: true});
                        //mixpanel.track("Sign save success");
                    }
                }).catch(error => {
                    setLoaderText('Помилка збереження');
                    //mixpanel.track("Sign save error", {error: error});
                })
            })
            .catch((err) => {
                setLoaderText('');
                setErrorText(err ? err.toString() : "Помилка");
                console.log(err)
                //mixpanel.track("Sign error", { error: error });
            });
    };


    return loading ?
        (<XLoader text={loaderText}/>)
        :
        (
            <div>
                <EUSignContext.Provider value={{euSign, setEUSign}}>
                        {errorText && <div
                            className="alert border-0 font-weight-bold font-size-lg alert-danger"
                            dangerouslySetInnerHTML={{__html: errorText}}/>
                        }
                        {euSign && !pk && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <h2 style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem'}}>Для работы
                                необходима авторизация с помощью ЭЦП</h2>
                            <Sign onRead={(pk) => setPK(pk)}/>
                        </div>}
                        {euSign && pk && signFile()}
                    </EUSignContext.Provider>
            </div>
        );
};

export default Auth;