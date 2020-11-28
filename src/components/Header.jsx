import React from 'react';
import baloons from '../img/baloons.png';
import confetti from '../img/confetti.png';
import petard1 from '../img/petard1.png';
import petard2 from '../img/petard2.png';
import petard3 from '../img/petard3.png';

function Header() {
    return (
      <header className="main_page_header">
        <img className="header_background_baloons" src={baloons} alt="Шарики для фона"/>
        <img className="header_background_confetti" src={confetti} alt="Конфетти для фона"/>
        {/* <img className="header_background_petard" src={petard1} alt="Хлопушка для фона"/>
        <img className="header_background_petard" src={petard2} alt="Хлопушка для фона"/>
        <img className="header_background_petard" src={petard3} alt="Хлопушка для фона"/> */}
        <div className="header_name">
            <span className="name_item">Русский</span>
            <span className="name_item">Праздник</span>
        </div>
 
        <h1 className="main_header">Доставка букетов из воздушных шаров и украшение мероприятий в Каменске-Уральском</h1>
        
      </header>
    );
  }
  
  export default Header;

