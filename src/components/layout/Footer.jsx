import {FaFacebook , FaInstagram , FaLinkedin} from 'react-icons/fa'

import Styles from './Footer.module.css'

function Footer () {
    return (<footer className={Styles.footer}>
        <ul className={Styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
        </ul>
        <p className={Styles.copy_right}><span>Costs &copy; 2021</span></p>
    </footer> 

    )
}

export default Footer