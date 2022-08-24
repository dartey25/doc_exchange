import React from 'react';
import 'styles/home.scss';
import Documents from "../components/Documents";
import {Button, Empty} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";

const Home = () => {
    return (
        <section className="page-content ">
            <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-lg bg-transparent">
                <div className="sidebar__search">
                    <input type="text" className="form-control" />
                </div>
                <div className="sidebar__content">
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Нічого не знайдено"
                    />
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                        <div className="documents__header mb-3">
                            <h4 className="documents__title">Завантажені документи</h4>
                            <div className="d-flex mt-4">
                                <Button type="primary" onClick={() => ({})}>
                                    Upload
                                </Button>
                                <Button className="ml-4" type="default" onClick={() => ({})}>
                                    Download
                                </Button>
                                <Button className="ml-2" type="default" onClick={() => ({})}>
                                    Delete
                                </Button>
                                <Button className="ml-2" type="default" icon={<EllipsisOutlined />} size="middle" />
                            </div>
                        </div>
                        <div className="documents__table">
                            <Documents/>
                        </div>
                </div>
            </div>
            <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-lg bg-transparent">
                info
            </div>
        </section>
    );
};

export default Home;