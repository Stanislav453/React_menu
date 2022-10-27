import React, { Component } from "react";
import { linkNameLogo } from "./linkName";

class Logo extends Component {
    render() {
      return (
       <div>

        {linkNameLogo.map( (item, index) => {
          return <a key={index} href={item.url}>
            {item.title}
          </a>
        }  )}
        
       </div>

        
        )
    }
}

export default Logo