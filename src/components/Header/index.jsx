import React from 'react';
import Image from 'next/image';
import style from './Header.module.css'

export default function Header() {
    return (
        <header id={style.header}>
            <div className={`${style.logo_box} section-limit`}>
                <div className={style.logo}>
                <Image src="/assets/logo.png" width={100} height={100} alt="logo" />
                <h1>TWI<span>LIGHT</span></h1>
                </div>
                <input type="checkbox" id={style.toggle}/>
            </div>
            
        </header>
    )
}
