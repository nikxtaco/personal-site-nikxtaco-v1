import React from "react"

import "./footer.css"

import img from "../../../media/logo.svg"

class Footer extends React.Component {
    render(){
        return(
            
            <div id="footer">

                <img src={img} alt="" className="logo"/>

                {//<h1>Contact Us</h1>
    }
                    <div align="center" class="socialbtns">
                    <ul>
                    <li><a href="https://twitter.com/alrt_ai" class="fa fa-lg fa-twitter"></a></li>
                    <li><a href="mailto:info@alrt.ai" class="fa fa-lg fa-google-plus"></a></li>
                    <li><a href="https://www.instagram.com/alrt.ai/" class="fa fa-lg fa-instagram"></a></li>
                    </ul>
                    </div>
                    
                <h3>Terms of Use | Privacy Policy</h3>
                <img></img>
                <h4>2020 ALRT AI</h4>

            </div>            
        )
    }
}

export default Footer