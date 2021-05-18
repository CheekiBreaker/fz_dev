import React from 'react';
import styles from './Header.module.css';
import logo from '../media/logo.svg';

const Header = () => {
    return(
<header class={styles.header}>
        <div class={styles.container}>
            <div class={styles.header__top}>
                <a><img class={styles.header__logo} src={logo} alt="Логотип"/></a>
                <h2 class={styles.header__center}>Дневник</h2>
                <a class={styles.header__btn__enter}>Давиденко А.А.</a>
            </div>
            <div class={styles.header__form__center}>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Сахар</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input} id="a" type="float" placeholder="Введите Сахар"/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Длительный инсулин</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input} type="text" placeholder="Какое значение"/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}><a class ={styles.header__form__text} >Меню</a></span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input} id="b" type="float" placeholder="Выберите что вы ели"/>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Самочувствие</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text" placeholder="Как себя чувствуете?"/>
                    </div>
                    <div class={styles.checkbox}>
                        <label>
                            <input type="radio" id= "4" value="0"  name="raz"/>
                           не было нагрузки
                        </label>
                        <label>
                            <input type="radio" id= "1" value="1"  name="raz"/>
                            Легкая нагрузка
                        </label>
                        <label>
                            <input type="radio" id= "2" value="2" name="raz"/>
                          Средняя нагрузка
                        </label>
                        <label>
                            <input type="radio" id= "3" value="3"  name="raz"/>
                           Сложная нагрузка
                        </label>
                        
                        <div id={styles.outputField}></div>
                    </div>
                   
                </section>
                <section class={styles.header__form}>
                    <div class={styles.header__form__top}>
                        <span class={styles.header__form__text}>Итого</span>
                    </div>
                    <div class={styles.header__form__bottom}>
                        <input class={styles.header__form__input}  type="text"/>
                        <div id={styles.result} style="color: #5DC090; font-weight: 800; font-size: 18px;"></div>
                    </div>
                </section>
                <input class={styles.submit} type="button" value="Сохранить" onclick="addition();"/><br/>
            </div>
        </div>

    </header>

    
    )
}

export default Header;
