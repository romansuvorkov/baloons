import React from 'react';

function ServicesList() {
    return (
      <div className="service_list_wrapper">
        <span className="service_list_header">Наши услуги</span>
         <ul className="service_list">
                <li className="service_list_point"><a className="service_list_list_link" href="#advantage_page">Букеты из шаров</a></li>
                <li className="service_list_point"><a className="service_list_list_link" href="#portfolio_page">Украшение магазинов</a></li>
                <li className="service_list_point"><a className="service_list_list_link" href="#price_list_page">Украшение мероприятий</a></li>
            </ul>
      </div>
    );
  }
  
  export default ServicesList;