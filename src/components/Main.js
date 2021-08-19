import React from 'react'
import Card from "./Card"
import {categories} from "./Data"

 function Main() {
    return (
        <div className="d-flex">
            <div className="main-container bg-warning m-auto  col-8 mb-5">
            <h3 className="lang bg-warning w-100 text-center my-3 fs-1">
                Languages
            </h3>
            <div className="col-sm-12 flex-wrap d-flex bg-warning my-2">
            <div className="box-container col-sm-12 d-flex justify-content-center align-item-center flex-wrap">
                {categories.map((card) => {
            return(
              <Card name = {card.name} img = {card.img} options = {card.options}/>
            )
          })}
            </div>

            </div>
            
            </div>
        </div>
    )
}

export default Main