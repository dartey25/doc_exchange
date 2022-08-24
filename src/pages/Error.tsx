import React from 'react';
import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <section className="content-wrapper">
            <div className="content-inner">
                <div className="content content-boxed d-flex justify-content-center align-items-center">
                    <div className="flex-fill">
                        <div className="text-center mb-4">

                            <h1 className="display-2 font-weight-semibold line-height-1 mb-2">404</h1>
                            <h6 className="w-md-25 mx-md-auto">Oops, an error has occurred. <br/> The resource requested
                                could
                                not be found on this server.</h6>
                        </div>
                        <div className="text-center">
                            <button onClick={() => navigate(-1)} className="btn btn-primary"><i className="icon-home4 mr-2"></i> Go back</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;