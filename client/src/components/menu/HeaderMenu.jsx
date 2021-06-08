import React from 'react';
import logo from '../media/logo.svg'
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { INDEX_ROUTE, PERSONAL_ROUTE } from '../../paths/const';

const Header = () => {
    return (
        <header class={s.header}>
            <div class={s.container}>
                <div class={s.header__top}>
                    <NavLink to={INDEX_ROUTE}><img class={s.header__logo} src={logo} alt="Логотип" /></NavLink>
                    <h2 class={s.header__center}>Меню</h2>
                    <NavLink to={PERSONAL_ROUTE} class={s.header__btn__enter}>Давиденко А.А.</NavLink>
            </div>
            <div class={s.header__content__menu}>
                <div class={s.header__form__row}>
                    <section class={s.header__form__content}>
                        <div class={s.form__content__menu}>
                            <span class={s.eda}>Завтрак</span>
                            <NavLink to={INDEX_ROUTE} class={s.add}>+</NavLink>
                        </div>

                    </section>
                    <section class={s.header__form__content}>
                        <div class={s.form__content__menu}>
                            <span class={s.eda}>Завтрак</span>
                            <NavLink to={INDEX_ROUTE} class={s.add}>+</NavLink>
                        </div>

                    </section>
                    <section class={s.header__form__content}>
                        <div class={s.form__content__menu}>
                            <span class={s.eda}>Завтрак</span>
                            <NavLink to={INDEX_ROUTE} class={s.add}>+</NavLink>
                        </div>

                    </section>
                    <section class={s.header__form__content}>
                        <div class={s.form__content__menu}>
                            <span class={s.eda}>Завтрак</span>
                            <NavLink to={INDEX_ROUTE} class={s.add}>+</NavLink>
                        </div>

                    </section>

                </div>

            </div>
            <div class={s.header__menu__btn}>
                <NavLink to={PERSONAL_ROUTE} class={s.menu__btn__import}>Сохранить</NavLink>
            </div>
            
            </div >
    </header >

    )
}

export default Header;
