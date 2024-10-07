import React from 'react'
import './styles/Banniere.css'
import image from './images/banniere.jpg'
const Banniere = () => {
  return (
    <div>
      <div class="car-image">
            <img src={image} alt="Voiture de location"/>
            
            
            <div class="banner">
            <h1>Votre Aventure commence avec nos Clés.</h1>
      <div class="search-container">
        <input type="text" placeholder="Rechercher..." />
        <button>
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>


        </div>
       
    </div>
  )
}

export default Banniere
