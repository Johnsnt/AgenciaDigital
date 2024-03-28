import React from 'react';
import Image from 'next/image';
import style from './Header.module.css';

<<<<<<< HEAD

export default function Header({ theme, changeTheme }) {
=======
export default function Header({theme, setTheme}) {

    const light = '--lightMode'
    const dark = '--darkMode'
    const changeTheme = () => {
        theme === light ? setTheme(dark) : setTheme(light);
        console.log(true)
    }

>>>>>>> 0d66051ee844093e200895ad4b7fa2f0ed9fd02c
    return (
        <header id={theme ? style.headerdark : style.header}>
            <div className={`${style.logo_box} section-limit`}>
                <div className={style.logo}>
                    <Image src="/assets/logo.png" width={100} height={100} alt="logo" />
                    <h1>TWI<span>LIGHT</span></h1>
                </div>
<<<<<<< HEAD
                <input onClick={changeTheme} type="checkbox" id={style.toggle} />
=======
                <input onClick={changeTheme} type="checkbox" id={style.toggle}/>
>>>>>>> 0d66051ee844093e200895ad4b7fa2f0ed9fd02c
            </div>

        </header>
    );
}
