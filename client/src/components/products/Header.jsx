import React, {useContext} from 'react';
import logo from '../media/logo.svg'
import s from './Header.module.css';
import food from '../media/food.jpg';
import f1 from '../media/1.png';
import f2 from '../media/2.png';
import f3 from '../media/3.png';
import f4 from '../media/4.png';
import f5 from '../media/5.png';
import { NavLink } from 'react-router-dom';
import { INDEX_ROUTE, MENU_ROUTE, PERSONAL_ROUTE } from '../../paths/const';
import {observer} from "mobx-react-lite";
import {Context} from "../..";

const Header = observer(() => {
    const {food} = useContext(Context);
    return (
        <header class={s.header}>
            <div class={s.container}>
                <div class={s.header__top}>
                    <NavLink to={INDEX_ROUTE}><img class={s.header__logo} src={logo} alt="Логотип" /></NavLink>
                    <h2 class={s.header__center}>Продукты</h2>
                    <NavLink to={PERSONAL_ROUTE} class={s.header__btn__enter}>Давиденко А.А.</NavLink>
                </div>
                <div class={s.header__content__menu}>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={food} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                {food.menu.map(eda =>
                                <div>
                                    <h1 key ={eda.id}></h1>
                                    <div>{eda.countxe}</div>
                                    <div>{eda.title}</div>
                                </div>
                                )}
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={f1} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={f2} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={f3} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={f4} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                    <div class={s.header__form__products}>
                        <section class={s.form__products__content}>
                            <img src={f5} alt="food" class={s.product} />
                            <div class={s.form__content__description}>
                                <span class={s.desc}>Краткий состав</span>
                                <span class={s.prod}>Б: 12</span>
                                <span class={s.prod}>Ж: 13</span>
                                <span class={s.prod}>У: 14</span>
                                <span class={s.prod}>ХЕ: 1</span>
                                <NavLink to={MENU_ROUTE} class={s.add__prod}>Добавить</NavLink>
                            </div>

                        </section>
                    </div>
                </div>

            </div>

    </header >

    )
});

export default Header;
