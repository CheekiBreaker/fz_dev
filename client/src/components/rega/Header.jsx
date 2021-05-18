import React from 'react';
import s from './Header.module.css';
import logo from '../media/logo.svg';

const Header = () => {
    return(
        <header class={s.header}>
        <div class={s.container}>
            <div class={s.header__top}>
                <a href="./index.html"><img class={s.header__logo} src={logo} alt="Логотип"></a>
                <h2 class={s.header__center}>Диа Формула</h2>
                <a class={s.header__btn-enter btn__rega} >Авторизация</a>
            </div>
            <div class={s.header__form-center}>
                <div class={s.registration-form}>
                    <header>
                      <h1>Регистрация</h1>
                      <p>Введите ваши данные</p>
                    </header>
                    <form>
                      <div class={s.input-section email-section}>
                        <input class={s.email} type="email" placeholder="Email" autocomplete="off"/>
                        <div class={s.animated-button}><span class={s.icon-paper-plane}><i class={s.fa fa-envelope-o}>@</i></span><span class={s.next-button email}><i class={s.fa fa-arrow-up}>></i></span></div>
                      </div>
                      <div class={s.input-section password-section folded}>
                        <input class={s.password} type="password" placeholder="Пароль"/>
                        <div class={s.animated-button}><span class={s.icon-lock}><i class={s.fa fa-lock}>**</i></span><span class={s.next-button password}><i class={s.fa fa-arrow-up}>></i></span></div>
                      </div>
                      <div class={s.input-section repeat-password-section folded">
                        <input class={s.repeat-password" type="password" placeholder="Повторите пароль"/>
                        <div class={s.animated-button}><span class={s.icon-repeat-lock}><i class={s.fa fa-lock}>**</i></span><span class={s.next-button repeat-password}><i class={s.fa fa-paper-plane}>></i></span></div>
                      </div>
                      <div class={s.success}> 
                        <p> Вы успешно зарегистрировались</p>
                      </div>
                     
                    </form>
                    <p class={s.header__form-remember}>
                        Забыли пароль?
                    </p>
                  </div>
                  
            </div>

    </header>

    
    )
}

export default Header;
