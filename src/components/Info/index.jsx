import Image from "next/image";
import style from "./info.module.css";


export default function Info() {
    return (
        <section id={style.section}>
            <div className={style.info_box}>
                <Image src="/assets/intro.jpg" width={1000} height={1000} alt="info"/>
            </div>
            <div className={style.info_box_text}>
                <h3>Transformamos a identidade do seu negócio </h3>
                <span>Atuando há mais de 15 anos</span>
                <p>Nossa missão é criar uma forte presença digital para sua marca, usando
                    estratégias personalizadas, ferramentas e tecnologias inovadoras. Trabalhamos
                    lado a lado com você para definir objetivos claros e implementar soluções que
                    destaquem seus valores e diferenciais no mercado</p>
            </div>
        </section>
    );
}