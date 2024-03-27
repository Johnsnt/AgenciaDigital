import Image from 'next/image';
import style from './Footer.module.css'


export default function Footer() {

    return (
        <section id={style.section}>
            <div className={`${style.box_content} section-limit`}>
            <div className={style.signature}>
                <p>Copyright 2024 © <span>Johnny Santos</span></p>
            </div>
        <div className={style.socialMedia}>
            <Image src="/assets/social/behance.jpg" width={60} height={60} alt='twitter' />
            <Image src="/assets/social/twitter.png" width={60} height={60} alt='twitter' />
            <Image src="/assets/social/dribble.png" width={60} height={60} alt='twitter' />
            <Image src="/assets/social/facebook.png" width={60} height={60} alt='twitter' />
            <Image src="/assets/social/googlePlus.png" width={60} height={60} alt='twitter' />
            <Image src="/assets/social/linkedin.png" width={60} height={60} alt='twitter' />
        </div>
        </div>
        </section>
    );
}