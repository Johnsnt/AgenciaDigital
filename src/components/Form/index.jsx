import style from './Form.module.css';

export default function () {
    return (
        <section id={style.section}>
            <div className={`${style.box_form}`}>
                <h3>SOLICITE UM ORÇAMENTO</h3>
                <form method="post" action="/" className={style.form} >
                    <input type="text" placeholder='Nome*' maxLength={60} required />
                    <input type="email" placeholder='Email*' required/>
                    <input type="tel" pattern="[0-9]{10}" maxLength={11} placeholder='Telefone'/>
                    <textarea placeholder='Deixe sua mensagem' required/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}