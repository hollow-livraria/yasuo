import styles from './CardSkin.module.css';
import Image from 'next/image';

export default function CardSkin(props) {
    return (
        <div className={styles.cardBody}>
            <Image src={props.icon} alt="yasuo"/> 
        </div>

    )
}