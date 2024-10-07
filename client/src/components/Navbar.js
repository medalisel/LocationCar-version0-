import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import imagelogo from "./images/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/userSlice'
const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user",user)

  const dispatch = useDispatch();

  const isAuth=localStorage.getItem("token")
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
         
         {!isAuth ? (
          <Link to="/login"><li>Espace client</li></Link>
        ) : (
          <>
            {user?.isAdmin ? (
              <Link to="/dashboard"><li>Dashboard</li></Link>
            ) : (
              <Link to="/profil"><li>Profil</li></Link>
            )}
            <li  onClick={() => 
              dispatch(logout())}>Déconnexion</li>
          </>
        )}

         {/* {!isAuth? 
            <Link to="/login"><li>Espace client</li></Link> :
             user?.isAdmin ? <Link to="/dashboard"><li>Dashboard</li></Link>  :  <Link to="/profil"><li>Profil</li></Link>} */}
        </ul>
    </nav>

    </div>
  )
}

export default Navbar
