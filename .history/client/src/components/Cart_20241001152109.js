import React from 'react'
import './styles/Card.css'

const Cart = ({data}) => {
  return (
    <div>
      <div className="car-card">

                <img src={data.image} alt="imagecar" className="car-image"/>
                if (if (this.state == 'news'){
                return (
                    <Text>data</Text>
                ) 'news'){
                return (
                    <Text>data</Text>
                )
                     <p className='dispo'>hhhhh</p>



                <div className="car-name">{data.model}</div>
                <div className="car-price">
                <p> Prix comprend : <br/>
                - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 50 TND </p>
                    <p className="price-label">Prix à partir de</p>
                    <p className="price">{data.price_per_day} TND<span>/jour</span></p>
                    <button className="reservation-btn"> RÉSERVATION</button>
                </div>
        

    </div>
    </div>
  )
}

export default Cart
