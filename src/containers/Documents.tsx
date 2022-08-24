import React from 'react';
import DocumentsMui from "../components/DocumentsMui";

const Documents = () => {
    return (
        <div className="card home">
            <div className="card-header bg-transparent">
                <div className="card-title">
                    <h5>

                        <span className="font-weight-semibold">Завантажені файли</span></h5>

                </div>
            </div>

            <div className="card-body documents">

                <div className="documents__table">
                    <DocumentsMui/>
                </div>
            </div>
        </div>
    );
};

export default Documents;