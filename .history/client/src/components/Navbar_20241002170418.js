import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import imagelogo from "./images/logo.png"
import { useSelector } from 'react-redux'
const Navbar = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const user = useSelector((state) => state.user.user);

  return (
    <div>
       <header>
        <div className="logo">  
        <img src={imagelogo} alt="logo"/>  
         </div>

        <div className="contact"> <i class="fa-brands fa-whatsapp"></i>  (+216)  56 751 909</div>
    </header>
    
    <nav>
        <ul>
        <Link to="/"><li>Accueil</li> </Link>
            <Link to="/voitures">  <li>Véhicules</li></Link>
            <Link to="/tarifs"> <li>Tarifs</li> </Link>
         <Link to="/agences"> <li>Agences</li></Link>
         <Link to="/contact">  <li>Contact</li></Link>
            <Link to="/login"><li>Espace client</li></Link>
            {user?.isAdmin ? <Link to="/dashboard"><li>Dashboard</li></Link> : <Link to="/dashboard"><li>Profil</li></Link>}
        </ul>
    </nav>

    </div>
  )
}

export default Navbar
