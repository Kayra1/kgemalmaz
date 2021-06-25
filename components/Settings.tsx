import Image from 'next/image'

import outer from '../public/settings/settings-outer.png'
import inner from '../public/settings/settings-inner.png'
import styles from '../styles/Nav.module.css'


export default function Settings() {
    return (
        <div className={styles.settings_bg}>
            <Image 
                className={styles.settings}
                src={outer}
                height={'18px'}
                width={'18px'} 
                />
            <Image 
                src={inner}
                height={'9px'}
                width={'9px'} 
                />
        </div>
    )
}
