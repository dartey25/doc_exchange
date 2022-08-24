import React from 'react';
import {Grid} from "@mui/material";
import {Empty} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Documents from "../components/Documents";
import DocumentsMui from "../components/DocumentsMui";


const HomeMui = () => {
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
            {/*<div className="content-wrapper">*/}
            {/*    <div className="content">*/}
            {/*        <div className="documents__header mb-3">*/}
            {/*            <h4 className="documents__title">Завантажені документи</h4>*/}
            {/*            <div className="d-flex mt-4">*/}
            {/*                <Button onClick={() => ({})} icon="icon-upload4">*/}
            {/*                    Upload*/}
            {/*                </Button>*/}
            {/*                <Button className="ml-4" type="light" onClick={() => ({})} icon="icon-download4">*/}
            {/*                    Download*/}
            {/*                </Button>*/}
            {/*                <Button className="ml-2" type="light" onClick={() => ({})} icon="">*/}
            {/*                    Delete*/}
            {/*                </Button>*/}
            {/*                <Button className="ml-2" type="light" onClick={() => ({})} icon="icon-more2"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="documents__table">*/}
            {/*            <div style={{backgroundColor: 'red', height: '10000px'}}></div>*/}
            {/*            /!*<Documents/>*!/*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="content-wrapper">
                <div className="card home">
                    <div className="card-header bg-transparent">
                        <div className="card-title">
                            <h5>
                                {/*<i className="icon-arrow-left52 mr-2"></i> */}
                                <span className="font-weight-semibold">Завантажені файли</span></h5>

                            {/*<div className="breadcrumb mt-1">*/}
                            {/*    <span className="breadcrumb-item py-0 active">Home</span>*/}
                            {/*    /!*<a href="components_breadcrumbs.html" className="breadcrumb-item py-0">Components</a>*!/*/}
                            {/*    /!*<span className="breadcrumb-item py-0 active">Breadcrumbs</span>*!/*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="card-body documents">
                        {/*<div className="documents__header mb-3">*/}
                        {/*    <div className="d-flex">*/}
                        {/*        <Button onClick={() => ({})} icon="icon-upload4">*/}
                        {/*            Upload*/}
                        {/*        </Button>*/}
                        {/*        <Button className="ml-4" type="light" onClick={() => ({})} icon="icon-download4">*/}
                        {/*            Download*/}
                        {/*        </Button>*/}
                        {/*        <Button className="ml-2" type="light" onClick={() => ({})} icon="">*/}
                        {/*            Delete*/}
                        {/*        </Button>*/}
                        {/*        <Button className="ml-2" type="light" onClick={() => ({})} icon="icon-more2"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="documents__table">
                            {/*<div style={{background: 'red', height: '10000px'}}></div>*/}
                            {/*<Documents/>*/}
                            <DocumentsMui/>
                        </div>
                    </div>
                </div>
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

                            <h6 className="font-weight-semibold mb-0">Hanna Dorman</h6>
                            <span className="d-block text-muted">UX/UI designer</span>

                            <div className="list-icons list-icons-extended mt-3">
                                <a href="#" className="list-icons-item" data-popup="tooltip" title=""
                                   data-original-title="Google Drive"><i className="icon-google-drive"></i></a>
                                <a href="#" className="list-icons-item" data-popup="tooltip" title=""
                                   data-original-title="Twitter"><i className="icon-twitter"></i></a>
                                <a href="#" className="list-icons-item" data-popup="tooltip" title=""
                                   data-original-title="Github"><i className="icon-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-section mb-3">
                        <div className="sidebar-section-header">
                            <h6 className="mb-0">Navigation</h6>
                        </div>

                        <div className="collapse show" id="sidebar-navigation">
                            <ul className="nav nav-sidebar">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-user"></i>
                                        My profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-cash3"></i>
                                        Balance
                                        <span
                                            className="text-muted font-size-sm font-weight-normal ml-auto">$1,430</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-tree7"></i>
                                        Connections
                                        <span className="badge badge-danger badge-pill ml-auto">29</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-users"></i>
                                        Friends
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-calendar3"></i>
                                        Events
                                        <span className="badge badge-teal badge-pill ml-auto">48</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="icon-cog3"></i>
                                        Account settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeMui;