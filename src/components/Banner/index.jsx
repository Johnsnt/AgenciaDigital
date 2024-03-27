import Image from "next/image";
import style from "./Banner.module.css"

export default function Banner() {
    return (
        <section id={style.section}>
            <div className={style.box_title}>
                <div className={style.title}>
                <h2>TWI<span>LIGHT</span></h2>
                <p>A agência de Branding e <span>Design Digital</span></p>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                </div>
            </div>
            <div className={style.box_img}>
                {/* <Image src="/assets/bannerguy.png" width={1140} height={1178} alt="bannerGuy"/> */}
            </div>
        </section>
    )
}