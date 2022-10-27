import "./Navbar.scss";
import { LinkName } from "../LinkName";
import React, { Component, useState } from "react";
import Logo from "../logo/logo";



class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState( { clicked: !this.state.clicked } )

    }

    render() {
      return (  
        <div className="Navbar">
            <div className="menu-left">
                <Logo />
                <div className="mobile-menu" >
                    <i onClick={this.handleClick} className={ this.state.clicked ? "bx bxs-message-square-x" : "bx bx-menu"} ></i>
                </div>
            </div> 
            <ul className={ this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {LinkName.map( (item, key) => {
                    return (
                        <li key={key}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                } )}
            </ul>

        </div>
        )
    }
}

export default Navbar