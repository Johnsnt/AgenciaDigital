import style from './Card.module.css'

export default function Card({data, titulo, empresa, info, theme}) {
    return (
        <div className={theme ? style.cardDark : style.card}>
            <p>{data}</p>
            <h3>{titulo}</h3>
            <p>{empresa}</p>
            <p>{info}</p>
        </div>
    )
}