import React from 'react';

function HeaderMenu() {
    return (
        <header className="head_menu">
        <nav className="header_menu">
            <ul className="header_menu_list">
                <li className="header_menu_list_point"><a className="link" href="#advantage_page">Наши преимущества</a></li>
                <li className="header_menu_list_point"><a className="link" href="#portfolio_page">Портфолио</a></li>
                <li className="header_menu_list_point"><a className="link" href="#price_list_page">Цены</a></li>
                <li className="header_menu_list_point"><a className="link" href="#intsructions_page">Как заказать</a></li>
            </ul>
        </nav>
        <div className="mobile_menu_wrapper">
        <input type="checkbox" id="check_menu" />
        <label htmlFor="check_menu" className="check_menu_label"></label>
        <div className="burger_line first"></div>
        <div className="burger_line second"></div>
        <div className="burger_line third"></div>
        <div className="burger_line fourth"></div>
        <nav className="mobile_menu">
            <a className="mobile_menu_link link" href="#advantage_page">Наши преимущества</a>
            <a className="mobile_menu_link link" href="#portfolio_page">Портфолио</a>
            <a className="mobile_menu_link link" href="#price_list_page">Цены</a>
            <a className="mobile_menu_link link" href="#intsructions_page">Как заказать</a>
            </nav>
        </div>
        </header>
    );
  }
  
  export default HeaderMenu;

