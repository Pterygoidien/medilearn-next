import styles from './header.module.scss';
import Logo from "../../assets/logo.svg";
import Image from 'next/image';

const Header = ():JSX.Element => {
    return (
        <header
            className={styles.header}
        >
            <div className="flex justify-between items-center">
            <div>
                <Image 
                    src= {Logo} 
                    alt="Logo" 
                    aria-hidden="true" 
                    className={styles.logo}
                />
            </div>
            <nav>
                <ul className="flex">
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/about" className="btn">Connexion</a>
                    </li>
                    <li>
                        <a href="/contact" className="btn btn--primary">Essayez gratuitement</a>
                    </li>
                </ul>    
            </nav>    
            </div>
            
        </header>
    )
}

export default Header;