import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.icon}>Book</div>
            
            <div className={styles.button_row}>Dog</div>

            <div className={styles.settings}>Cat</div>
        </nav>
    )
}
