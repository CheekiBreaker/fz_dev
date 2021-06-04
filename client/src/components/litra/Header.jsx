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
                    <h2 class={s.header__center}>Литература</h2>
                    <NavLink to={PERSONAL_ROUTE} class={s.header__btn__enter}>Давиденко А.А.</NavLink>
                </div>
                <div class={s.header__content__menu}>
                    <div class={s.header__form__row}>
                        <section class={s.header__form__content}>
                            <div class={s.form__content__title}>Хлебные единицы</div>
                            <div class={s.form__content__menu}>
                                <span class={s.litra}>ХЕ</span>
                                <span class={s.litra}>Что это такое и как рассчитать?</span>

                            </div>

                        </section>
                        <section class={s.header__form__content}>
                            <div class={s.form__content__title}>Памятки</div>
                            <div class={s.form__content__menu}>
                                <span class={s.litra}>ПМ</span>
                                <span class={s.litra}>Что такое диабет?</span>

                            </div>

                        </section>
                        <section class={s.header__form__content}>
                            <div class={s.form__content__title}>Продукты</div>
                            <div class={s.form__content__menu}>
                                <span class={s.litra}>ПР</span>
                                <span class={s.litra}>Какие продукты уставиваются быстро, а какие нет?</span>

                            </div>

                        </section>
                        <section class={s.header__form__content}>
                            <div class={s.form__content__title}>Распечатки</div>
                            <div class={s.form__content__menu}>
                                <span class={s.litra}>РП</span>
                                <span class={s.litra}>Материалы для помощи в постановке инъекций</span>

                            </div>

                        </section>

                    </div>

                </div>
        </div>
            
    </header>

    )
}

export default Header;
