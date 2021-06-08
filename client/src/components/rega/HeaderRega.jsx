import React from 'react';
import s from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../media/logo.svg';
import { INDEX_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../paths/const';



const Header = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <header class={s.header}>
      <div class={s.container}>
        <div class={s.header__top}>
          <NavLink to={INDEX_ROUTE}><img class={s.header__logo} src={logo} alt="Логотип" /></NavLink>
          <h2 class={s.header__center}>Диа Формула</h2>
          <NavLink to={LOGIN_ROUTE} class={s.header__btn__enter} >{isLogin ? 'Авторизация' : 'Регистрация'}</NavLink>
        </div>
        {
          isLogin ?
            <div>
              <div class={s.header__form__center}>
                <div class={s.registration_form}>
                  <header>
                    <h1>Регистрация</h1>
                    <p>Введите ваши данные</p>
                  </header>
                  <form>
                    <div class={s.input_section}>
                      <input class={s.email} type="email" placeholder="Email" autocomplete="off" />
                      <div class={s.animated_button}><span class={s.icon_paper_plane}><i class={s.fa}>@</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.input_section}>
                      <input class={s.password} type="password" placeholder="Пароль" />
                      <div class={s.animated__button}><span class={s.icon_lock}><i class={s.fa}>**</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.input_section}>
                      <input class={s.repeat_password} type="password" placeholder="Повторите пароль" />
                      <div class={s.animated_button}><span class={s.icon_repeat_lock}><i class={s.fa}>**</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.success}>
                      <p> Вы успешно зарегистрировались</p>
                    </div>

                  </form>
                  <p class={s.header__form_remember}>
                    Забыли пароль?
                    </p>
                </div>
                {
                  isLogin ?
                    <div>
                      <NavLink to={REGISTRATION_ROUTE}>Войдите </NavLink>
                    </div>
                    :
                    <div>
                      <NavLink to={LOGIN_ROUTE}>Нет аккаунта?</NavLink>
                    </div>
                }
              </div>
            </div> :
            <div>
              <div class={s.header__form__center}>
                <div class={s.registration_form}>
                  <header>
                    <h1>Авторизация</h1>
                    <p>Введите ваши данные</p>
                  </header>
                  <form>
                    <div class={s.input_section}>
                      <input class={s.email} type="email" placeholder="Email" autocomplete="off" />
                      <div class={s.animated_button}><span class={s.icon_paper_plane}><i class={s.fa}>@</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.input_section}>
                      <input class={s.password} type="password" placeholder="Пароль" />
                      <div class={s.animated__button}><span class={s.icon_lock}><i class={s.fa}>**</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.input_section}>
                      <input class={s.repeat_password} type="password" placeholder="Повторите пароль" />
                      <div class={s.animated_button}><span class={s.icon_repeat_lock}><i class={s.fa}>**</i></span><span class={s.next_button}><i class={s.fa}>{'>'}</i></span></div>
                    </div>
                    <div class={s.success}>
                      <p> Вы успешно зарегистрировались</p>
                    </div>

                  </form>
                  <p class={s.header__form_remember}>
                    Забыли пароль?
                    </p>
                </div>
                {
                  isLogin ?
                    <div>
                      <NavLink to={REGISTRATION_ROUTE}>Войти </NavLink>
                    </div>
                    :
                    <div>
                      <NavLink to={LOGIN_ROUTE}>Нет аккаунта?</NavLink>
                    </div>
                }
              </div>
            </div>

        }


      </div>

    </header>


  )

}

export default Header;
