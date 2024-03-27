import style from './Card.module.css'

export default function Card({data, titulo, empresa, info}) {
    return (
        <div className={style.card}>
            <p>{data}</p>
            <h3>{titulo}</h3>
            <p>{empresa}</p>
            <p>{info}</p>
        </div>
    )
}