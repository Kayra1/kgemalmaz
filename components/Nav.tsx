import Settings from './Settings'

import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.icon}>Kayra</div>
            
            <div className={styles.button_row}>Dog</div>

            <Settings></Settings>
        </nav>
    )
}
