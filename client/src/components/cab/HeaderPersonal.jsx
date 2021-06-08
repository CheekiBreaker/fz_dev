import React from 'react';
import styles from './Header.module.css';
import logo from '../media/logo.svg';
import plus from '../media/plus.svg';
import graph from '../media/graph.png';
import { INDEX_ROUTE } from '../../paths/const';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
<header class={styles.header}>
        <div class={styles.container}>
            <div class={styles.header__top}>
                <NavLink to={INDEX_ROUTE}><img class={styles.header__logo} src={logo} alt="Логотип"/></NavLink>
                <h2 class={styles.header__center}>Кабинет</h2>
                <a class={styles.header__btn__enter}>Давиденко А.А.</a>
            </div>
            <div class={styles.header__content}>
            <div class={styles.header__form__center}>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Имя</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Введите имя"></input>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Фамилия</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Введите фамилию"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Отечество</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Введите отчество"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Рост</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Рост"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Вес</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Вес"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Ваше фото</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="фото"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>углеводный коэфициент</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="углеводный коэфициент"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>чувствительность инсулина</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="чувствительность инсулина"/>
                        <img src={plus} alt="add" class={styles.addsmth}/>
                    </div>
                </section>
            </div>
            <div class={styles.header__content__right}>
                <img class={styles.img__graph} src={graph} alt="" />
                <div class={styles.content__right__btns}>
                    <div class={styles.left}>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Создать запись</NavLink>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Сохранить</NavLink>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Создать меню</NavLink>

                    </div>
                    <div class={styles.right}>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Литература</NavLink>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Посмотреть продукты</NavLink>
                    <NavLink to={INDEX_ROUTE} class={styles.header__btn__import} >Вывод отчета</NavLink>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    </header>
    
    )
}

export default Header;
