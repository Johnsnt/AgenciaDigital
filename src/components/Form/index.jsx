import style from './Form.module.css';

export default function () {
    return (
        <section id={style.section}>
            <div className={`${style.box_form}`}>
                <h3>SOLICITE UM ORÇAMENTO</h3>
                <form method="post" className={style.form} >
                    <input type="text" placeholder='Nome' />
                    <input type="email" placeholder='email'/>
                    <input type="tel" placeholder='Telefone'/>
                    <textarea rows="1" placeholder='Deixe sua mensagem'/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}