import styles from './CardInfo.module.css';

export default function CardInfo(props) {
    return (
        <div className={styles.cardInfo}>
            <h1>{props.infoIcon}</h1>
            <p>Linha de skins {props.iconSkinType}</p>
        </div>
    )
}