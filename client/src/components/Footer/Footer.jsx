import React from 'react'
import '../Footer/Footer.css'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github-sign.png'
const Footer = () => {
    return (
        <div className="container-footer">
            <div className="footer">
                <a href="https://www.linkedin.com/in/dar%C3%ADo-emmanuel-rodr%C3%ADguez-99a178126/" target="_blank"><img src={linkedin} alt="" /></a>
                <a href=""><img src={github} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer
