import React, { Component } from 'react'
import{
 Link
}   from "react-router-dom"; 

export class NavBar extends Component {
  
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg bg-dark ">
         <div className="container-fluid">
           <Link className="navbar-brand text-light" to="/">NewsTimes</Link> 
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item"> <Link className="nav-link active text-light" to="/">Home</Link></li>  
               <li className="nav-item"> <Link className="nav-link active text-light" to="/business">Business</Link></li> 
               <li className="nav-item"> <Link className="nav-link active text-light" to="/entertainment">Entertainment</Link></li> 
               <li className="nav-item"> <Link className="nav-link active text-light" to="/health">Health</Link></li> 
               <li className="nav-item"> <Link className="nav-link active text-light" to="/science">Science</Link></li> 
               <li className="nav-item"> <Link className="nav-link active text-light" to="/sports">Sports</Link></li> 
               <li className="nav-item"> <Link className="nav-link active text-light" to="/technology">Technology</Link></li> 
             </ul> 
           </div>
         </div>
         </nav>
      </div>
    )
  }
}
export default NavBar