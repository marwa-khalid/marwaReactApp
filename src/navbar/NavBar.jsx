import "./navbar.css"
import {Link} from "react-router-dom"
export default function navbar() {
  return (
    <div className="nav w-100">
        <div className="navLeft">
            <div>
                <Link className="brandName" style={{textDecoration:"none"}} to="/home">
                        MoviePoint
                </Link>
            </div>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem">
                    <Link style={{color : "black",textDecoration:"none"}} to="/home">
                        HOME
                    </Link>
                </li>
                <li className="navListItem">
                    <Link style={{color : "black",textDecoration:"none"}} to="/about">
                        ABOUT
                    </Link>
                </li>
                <li className="navListItem">
                    <Link style={{color : "black",textDecoration:"none"}} to="/movie">
                        MOVIES
                    </Link>
                </li>
            </ul>
        </div>
        <div className="navRight">
           {/* <img className="navImg" src={me} alt="" /> */}
            <ul className="navList">
                <li className="navListItem">
                <Link style={{color : "black",textDecoration:"none"}} to="/register">
                       REGISTER
                    </Link>
                </li>
                <li className="navListItem">
                    <Link style={{color : "black",textDecoration:"none"}} to="/login">
                       LOGIN
                    </Link>  
                </li>
            </ul>
            <i className="navSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
