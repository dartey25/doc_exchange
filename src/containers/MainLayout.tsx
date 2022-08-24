import React from 'react';
import {Outlet} from "react-router-dom";
import {Empty} from "antd";
import Input from '../components/ui/Input';

const MainLayout = () => {
    return (
        <section className="page-content">
                <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-lg bg-transparent">
                    <div className="sidebar__search">
                        <Input onChange={() => ({})} placeholder="Поиск по диалогам"/>
                    </div>
                    <div className="sidebar__content">
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description="Нічого не знайдено"
                        />
                    </div>
                </div>

                <div className="content-wrapper">
                    <Outlet/>
                </div>

                <div className="sidebar sidebar-light sidebar-fixed sidebar-expand-lg">
                    <div className="sidebar-content mt-3">
                        <div className="sidebar-section">
                            <div className="sidebar-section-body text-center pt-0">
                                <div className="card-img-actions d-inline-block mb-3">
                                    <img className="img-fluid rounded-circle" src="https://i.pravatar.cc/150/" width="150"
                                         height="150" alt=""/>
                                    <div className="card-img-actions-overlay card-img rounded-circle">
                                        <a href="#" className="btn btn-outline-white border-2 btn-icon rounded-pill">
                                            <i className="icon-pencil"></i>
                                        </a>
                                    </div>
                                </div>

                                <h6 className="font-weight-semibold mb-0">Муравйов Станіслав Андрійович</h6>
                                <span className="d-block text-muted">ТОВ "Білгрем"</span>
                            </div>
                        </div>
                        <div className="sidebar-section mb-3 mt-3">

                            <div className="collapse show" id="sidebar-navigation">
                                <p className="list-group-item"><span className="text-muted mr-1">ДРФО:</span> 3382302739</p>
                                <p className="list-group-item"><span className="text-muted mr-1">ЕГРПОУ:</span> 3382302739</p>
                                <p className="list-group-item"><span className="text-muted mr-1">Наш клієнт:</span> <span className='text-danger'>ні</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default MainLayout;