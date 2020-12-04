import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMenu() {
    return (
        <header className="head_menu">
        <nav className="header_menu">
            <ul className="header_menu_list">
                <li className="header_menu_list_point"><Link className="link" to="/wedding">Украшение свадеб</Link></li>
                <li className="header_menu_list_point"><Link className="link" to="/business">Украшение магазинов</Link></li>
                <li className="header_menu_list_point"><Link className="link" to="/birthday">День рождения</Link></li>
                <li className="header_menu_list_point"><Link className="link" to="/child">Детские праздники</Link></li>
                <li className="header_menu_list_point"><Link className="link" to="/bouqet">Букеты из шаров</Link></li>
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
            <Link className="mobile_menu_link link" to="/wedding">Украшение свадеб</Link>
            <Link className="mobile_menu_link link" to="/business">Украшение магазинов</Link>
            <Link className="mobile_menu_link link" to="/birthday">День рождения</Link>
            <Link className="mobile_menu_link link" to="/child">Детские праздники</Link>
            <Link className="mobile_menu_link link" to="/bouqet">Букеты из шаров</Link>
        </nav>
        </div>
        </header>
    );
  }
  
  export default HeaderMenu;

