import React from 'react';
import {Link} from "gatsby";

class NavItem extends React.Component{
    render(){
        return(
            <li className="nav-item" >
                <Link to={this.props.href} className="nav-link">{this.props.value}</Link>
            </li>
        );
    }
}

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul className="nav">
                    {/* <li className="nav-item"> */}
                        {/* <Link to={"/"}> */}
                            {/* <span className="logo"></span> */}
                        {/* </Link> */}
                    {/* </li> */}
                    <NavItem value={"Logo"} href={"/"} id="logo-link"/>
                    <NavItem value={"Shop"} href={"/shop"} id="shop-link"/>
                    {/* <NavItem value={"About"} href={"/about"}/> */}
                    {/* <NavItem value={"Cart"} href={"/cart"}/> */}
                    <li className="nav-item" id="admin-link">
                        <a href="https://morning-shelf-23135.herokuapp.com/admin" className="nav-link">Admin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;