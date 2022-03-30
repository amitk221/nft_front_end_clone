import React from 'react';
import img from '../new-project/image/jokeimg.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CollectionsIcon from '@mui/icons-material/Collections';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConstructionIcon from '@mui/icons-material/Construction';
 import {NavLink} from 'react-router-dom';

const Header = () =>{
   return(
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="d-flex">
            <img src={img} style ={{height: "40px" ,cursor: "pointer"  }} />
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{width:"22rem"}}/>
            <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link active' to='/explore'><AddShoppingCartIcon/> Explore</NavLink>
            <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link active' to='/collection'><CollectionsIcon/> Collection</NavLink>
            <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link active' to='/transaction'><EventNoteIcon/> Transaction</NavLink>
            <p style={{color:"white"}}><a class="navbar-brand" href="#"><ConstructionIcon/><b>Create</b>/</a></p>
            <p class="navbar-brand" href="#"style={{marginLeft:"1rem"}}><b>0 NATIVE</b></p>
            <button type="button" class="btn btn-success"style={{height:"2.4rem" }}>Autentication</button>
        </div>
      </div>
    </nav>
     
   )
}
export default Header;