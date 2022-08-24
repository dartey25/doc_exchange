import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar navbar-dark navbar-expand-md" data-service="gda">
            <div className="navbar-brand"><a href="/ua/gda.home.html" className="d-inline-block"
                                             aria-label="Go home"><img src="/images/bar_logo.png" alt=""/></a></div>
            <div className="navbar-text wmin-200 py-1"><a href="/ua/gda.home.html" className="d-inline-block">MD Document Exchange</a>
                <div className="text-grey-300 font-size-xs">v. 1.0.3 вiд 10.08.2022</div>
            </div>
            <div className="d-md-none">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
                        data-target="#navbar-mobile" data-bs-target="#navbar-mobile" aria-label="toggle"><i
                    className="icon-tree5"></i></button>
                <button className="navbar-toggler sidebar-mobile-main-toggle" type="button"><i
                    className="icon-paragraph-justify3"></i></button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-mobile">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/ua/maps.main.html" className="navbar-nav-link  pr-sm-2"
                                                title="Попередній сервіс"><i className="icon-undo2"></i><span
                        className="d-md-none ml-2">Попередній сервіс</span></a></li>
                    <li className="nav-item"><a href="/" className="navbar-nav-link  px-sm-2" title="mdoffice.com.ua"
                                                target="_self"><i className="icon-home5"></i><span
                        className="d-md-none ml-2">mdoffice.com.ua</span></a></li>
                    <li className="nav-item"><a href="/ua/eur1.home.html" className="navbar-nav-link  pl-sm-2"
                                                title="Наступний сервіс"><i className="icon-redo2"></i><span
                        className="d-md-none ml-2">Наступний сервіс</span></a></li>
                </ul>
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item dropdown"><a href="#" className="navbar-nav-link dropdown-toggle"
                                                         data-toggle="dropdown" data-bs-toggle="dropdown"
                                                         title="Інформація"><i className="icon-info22"></i><span
                        className="d-md-none ml-2">Інформація</span></a>
                        <div className="dropdown-menu dropdown-menu-right wmin-200"><a
                            href="/ua/aMDOSForum.ForumRules?p_id=103" className="dropdown-item"
                            title="Порядок заповнення"> Порядок заповнення</a><a
                            href="/ua/core.page.manual?p_service=gda" className="dropdown-item"
                            title="Настанова користувача"> Настанова користувача</a>
                            <div className="dropdown-divider mb-2"></div>
                            <a href="/ua/aMDOSForum.ForumByTypes?category=251" className="dropdown-item"
                               title="Форум"> Форум</a><a href="/ua/aMDOForumPO.Request?p_prog=gdaweb"
                                                          className="dropdown-item"
                                                          title="Заявка на доопрацювання"> Заявка на доопрацювання</a>
                        </div>
                    </li>
                    <li className="nav-item"><a href="/ua/gda.stat.html" className="navbar-nav-link "
                                                title="Статистика"><i className="icon-chart"></i><span
                        className="d-md-none ml-2">Статистика</span></a></li>
                    <li className="nav-item dropdown"><a href="#" className="navbar-nav-link dropdown-toggle"
                                                         data-toggle="dropdown" data-bs-toggle="dropdown"
                                                         title="Адміністрування"><i className="icon-cogs"></i><span
                        className="d-md-none ml-2">Адміністрування</span></a>
                        <div className="dropdown-menu dropdown-menu-right wmin-200"><a
                            href="/ua/core.menu.html?p_service=gda" className="dropdown-item" title="Налаштування меню"><i
                            className="icon-paragraph-justify3"></i> Налаштування меню</a><a
                            href="/ua/core.service.html?p_service=gda" className="dropdown-item"
                            title="Налаштування сервісів"><i className="icon-cog3"></i> Налаштування сервісів</a></div>
                    </li>
                    <li className="nav-item dropdown"><a href="#" className="navbar-nav-link dropdown-toggle"
                                                         data-toggle="dropdown" data-bs-toggle="dropdown"
                                                         title="Сервіси MDOffice"><i
                        className="icon-paragraph-justify3"></i><span className="d-md-none ml-2">Сервіси MDOffice</span></a>
                        <div className="dropdown-menu dropdown-menu-right wmin-md-350"><a
                            href="https://www.mdoffice.com.ua" target="_blank" className="dropdown-item"><i
                            className="icon-home5"></i><span
                            className="d-md-inline-block d-lg-inline-block">MDoffice.com.ua</span></a><a
                            href="/ua/maps.main.html" target="_blank" className="dropdown-item"><i
                            className="icon-earth"></i><span
                            className="d-md-inline-block d-lg-inline-block">Митна мапа</span></a><a
                            href="/ua/eur1.home.html" target="_blank" className="dropdown-item"><i
                            className="icon-certificate"></i><span className="d-md-inline-block d-lg-inline-block">Заявка на митницю EUR.1</span></a>
                            <div
                                className="dropdown-header dropdown-header-highlight d-flex justify-content-center">Пошук
                            </div>
                            <a href="/ua/abc.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-archive"></i><span className="d-md-none d-lg-none">Алфавітно-предметний покаж...</span><span
                                className="d-none d-md-inline-block d-lg-inline-block">Алфавітно-предметний покажчик</span></a><a
                                href="/ua/cdc.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-balance"></i><span className="d-md-none d-lg-none">Класифікаційні рішення мит...</span><span
                                className="d-none d-md-inline-block d-lg-inline-block">Класифікаційні рішення митниці</span></a><a
                                href="/ua/cdcexample.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-stack-empty"></i><span className="d-md-inline-block d-lg-inline-block">Приклади класификації</span></a>
                            <div
                                className="dropdown-header dropdown-header-highlight d-flex justify-content-center">Інше
                            </div>
                            <a href="/ua/accred.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-vcard"></i><span className="d-md-inline-block d-lg-inline-block">Заяви на облік учасників ЗЕД</span></a><a
                                href="/ua/resident.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-user-check"></i><span className="d-md-none d-lg-none">Реєстр осіб, які здійснюют...</span><span
                                className="d-none d-md-inline-block d-lg-inline-block">Реєстр осіб, які здійснюють операції з товарами</span></a><a
                                href="/ua/broker.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-user-tie"></i><span className="d-md-inline-block d-lg-inline-block">Реєстр митних брокерів</span></a><a
                                href="/ua/invoice.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-cart5"></i><span
                                className="d-md-inline-block d-lg-inline-block">Рахунок</span></a><a
                                href="/ua/imfxrdr.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-file-zip"></i><span className="d-md-inline-block d-lg-inline-block">Перегляд файлів формату Imfx</span></a><a
                                href="/ua/eusign.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-pen"></i><span className="d-md-inline-block d-lg-inline-block">Підпис документів</span></a><a
                                href="/ua/xdoc.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-database-refresh"></i><span
                                className="d-md-inline-block d-lg-inline-block">Обмін документами</span><span
                                className="badge badge-danger ml-auto">ALPHA</span></a><a href="/ua/humaid.home.html"
                                                                                          target="_blank"
                                                                                          className="dropdown-item"><i
                                className="icon-aid-kit"></i><span className="d-md-inline-block d-lg-inline-block">Гуманітарна допомога</span></a><a
                                href="/ua/m16.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-box"></i><span className="d-md-inline-block d-lg-inline-block">Декларація М16</span></a><a
                                href="/ua/decl.home.html" target="_blank" className="dropdown-item"><i
                                className="icon-file-spreadsheet"></i><span
                                className="d-md-inline-block d-lg-inline-block">Електронне декларування</span><span
                                className="badge badge-danger ml-auto">ALPHA</span></a></div>
                    </li>
                    <li className="nav-item dropdown" id="news-list" data-service="gda"
                        data-last-news="2022-08-10 17:41:51"><a href="#"
                                                                className="navbar-nav-link dropdown-toggle caret-0"
                                                                data-toggle="dropdown" data-bs-toggle="dropdown"
                                                                title="Новини сервісу"><i
                        className="icon-history"></i><span className="d-md-none ml-2">Новини</span><span
                        className="badge badge-mark bg-warning-300 border-warning-300 ml-auto ml-xl-2 d-none"></span></a>
                        <div className="dropdown-menu dropdown-content dropdown-menu-right wmin-600">
                            <div className="dropdown-content-header"><span className="font-weight-semibold">Новини сервісу</span><a
                                href="/ua/core.news.html?p_service=gda" className="text-default" title="До списку"><i
                                className="icon-list2"></i></a></div>
                            <div className="dropdown-content-body dropdown-scrollable">
                                <div className="list-feed">
                                    <div className="list-feed-item d-flex flex-nowrap"><span className="mr-3"><div
                                        className="text-primary"><span
                                        className="font-weight-bold">v. 1.0.3</span>&nbsp;від&nbsp;<span>10.08.2022 17:41:51</span></div>Додані особисті довідники "Особи, що заповнюють"</span>
                                        <div className="ml-auto">
                                            <div className="list-icons"><a
                                                href="/ua/core.news.html_edit?p_service=gda&amp;p_id=881"
                                                className="list-icons-item" title="Редагувати"><i
                                                className="icon-pencil"></i></a></div>
                                        </div>
                                    </div>
                                    <div className="list-feed-item d-flex flex-nowrap"><span className="mr-3"><div
                                        className="text-primary"><span
                                        className="font-weight-bold">v. 1.0.2</span>&nbsp;від&nbsp;<span>09.08.2022 10:22:05</span></div>Додана можливість вибору коду УКТЗЕД з довідника</span>
                                        <div className="ml-auto">
                                            <div className="list-icons"><a
                                                href="/ua/core.news.html_edit?p_service=gda&amp;p_id=862"
                                                className="list-icons-item" title="Редагувати"><i
                                                className="icon-pencil"></i></a></div>
                                        </div>
                                    </div>
                                    <div className="list-feed-item d-flex flex-nowrap"><span className="mr-3"><div
                                        className="text-primary"><span>08.08.2022 12:55:56</span></div>Настанова користувача :</span>
                                        <div className="ml-auto">
                                            <div className="list-icons"><a
                                                href="/ua/core.news.html_edit?p_service=gda&amp;p_id=861"
                                                className="list-icons-item" title="Редагувати"><i
                                                className="icon-pencil"></i></a></div>
                                        </div>
                                    </div>
                                    <div className="list-feed-item d-flex flex-nowrap"><span className="mr-3"><div
                                        className="text-primary"><span
                                        className="font-weight-bold">v. 1.0.1</span>&nbsp;від&nbsp;<span>04.08.2022 09:18:43</span></div>Запуск сервісу</span>
                                        <div className="ml-auto">
                                            <div className="list-icons"><a
                                                href="/ua/core.news.html_edit?p_service=gda&amp;p_id=841"
                                                className="list-icons-item" title="Редагувати"><i
                                                className="icon-pencil"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-content-footer justify-content-center p-0"><a
                                href="/ua/core.news.html_edit?p_service=gda" className="bg-light text-grey w-100 py-2"
                                data-popup="tooltip" title="Додати" data-original-title="Додати||"><i
                                className="icon-plus22 d-block top-0"></i></a></div>
                        </div>
                    </li>
                    <li className="nav-item"><a href="/ua/aMDOUsersReg.profile" className="navbar-nav-link "
                                                title="Кабінет"><i className="icon-user"></i>&nbsp;&nbsp;&nbsp;<span
                        className="visible-md-inline-block visible-lg-inline-block"> MDOffice</span></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;