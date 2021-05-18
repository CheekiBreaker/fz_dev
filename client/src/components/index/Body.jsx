
import React from 'react';
import styles from './Header.module.css';
import tele from '../media/telephone.svg';

const Body = () => {
    return(
        <body>
<section class={styles.mobile}>
        <div class={styles.container}>    
            <div class={styles.mobile__row}>
                <div class={styles.mobile__left}>
                    <p class={styles.mobile__left__text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo debitis quibusdam saepe eveniet eaque consequuntur fugiat provident similique voluptatum harum repudiandae, sit praesentium optio modi nemo? Vero ab aperiam excepturi!</p>
                    <a class={styles.mobile__left__btn} >Скачать</a>
                </div>
                <div class={styles.mobile__right}>
                    <img class={styles.mobile__right__img} src={tele} alt=""></img>
                </div>
            </div>
        </div>
    </section>
    <section class={styles.opportunities}>
        <div class={styles.container}>
            <h2 class={styles.opportunities__h2}>Возможности</h2>
            <div class={styles.opportunities__row}>
                <div class={styles.opportunities__block}>
                    <h3 class={styles.opportunities__title}>Cоставление меню на день</h3>
                    <p class={styles.opportunities__text}>Составьте индивидуальное меню
                        на каждый день</p>
                </div>
                <div class={styles.opportunities__block}>
                    <h3 class={styles.opportunities__title}>Рассчет дозы инсулина на еду</h3>
                    <p class={styles.opportunities__text}>Выбирайте продукты, система все сделает за вас, и поссчитает ХЕ и даже подскажет дозу короткого инсулина
                    </p>
                </div>
                <div class={styles.opportunities__block}>
                    <h3 class={styles.opportunities__title}>Литература</h3>
                    <p class={styles.opportunities__text}>Ознакомьтесь с литературой по сахарному диабету. Здесь все то, что вам пригодиться в жизни</p>
                </div>
                <div class={styles.opportunities__block}>
                    <h3 class={styles.opportunities__title}>Чат с врачем</h3>
                    <p class={styles.opportunities__text}>Общайтесь с врачем, задавая интересующие вас вопросы</p>
                </div>
            </div>
        </div>
    </section>
    </body>
    )
    }
    export default Body;
    