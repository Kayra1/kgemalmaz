import {ReactNode} from 'react'

import styles from '../styles/Layout.module.css'

type Props = {
    children?: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
