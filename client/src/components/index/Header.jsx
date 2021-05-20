import React from 'react';
import styles from './Header.module.css';
import logo from '../media/logo.svg';
import heart from '../media/heart.svg';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../paths/const';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <header class={styles.header}>
        <div class={styles.container}>
            <div class={styles.header__top}>
                <img class={styles.header__logo} src={logo}/>
                <NavLink to ={LOGIN_ROUTE} class={styles.header__btn__enter} >Войти</NavLink>
            </div>
            <div class={styles.header__content}>
                    <div class={styles.header__content__left}>
                        <h1 class={styles.header__title}>Диа формула</h1>
                        <h2 class={styles.header__title__min}>Приложение, которое помогает облегчить вам жизнь!</h2>
                        <p class={styles.header__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, obcaecati accusamus nihil natus molestiae inventore quos eos. Aliquid ipsum, exercitationem nostrum aut necessitatibus impedit in hic fugiat vitae blanditiis placeat.</p>
                        <NavLink to={REGISTRATION_ROUTE} class={styles.header__btn__rega} >Регистрация <span class={styles.header__arrow}></span></NavLink>
                    </div>
                    <div class={styles.header__content__right}>
                        <img class={styles.header__img} src={heart} alt="Контент"></img>
                    </div>
            </div>
            <h2 class={styles.header__down}>Не только в виде сайта</h2>
        </div>
    </header>
    
    )
}

export default Header;
