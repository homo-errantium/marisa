import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainBottom.css';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';

function MainBottom({ onAddCake }) {
    return (
        <div className='wrapper'>
            <section className='main__bottom'>
                <button
                    className='main__bottom-button'
                    type='button'
                    onClick={onAddCake}
                >
                    заказать
                </button>
                <NavLink className='main__bottom-title' to='/menu'>
                    Торты
                </NavLink>
                <div className='main__bottom-gallery'>
                    <img
                        src={gallery1}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery3}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery4}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery2}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                </div>

                <NavLink className='main__bottom-title' to='/menu'>
                    Десерты
                </NavLink>
                <div className='main__bottom-gallery'>
                    <img
                        src={gallery1}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery3}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery4}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery2}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                </div>
                <NavLink className='main__bottom-title' to='/menu'>
                    Меренговый рулет
                </NavLink>
                <div className='main__bottom-gallery'>
                    <img
                        src={gallery1}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery3}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery4}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery2}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                </div>

                <h3 className='main__bottom-title'>Отзывы</h3>
                <div className='main__bottom-gallery'>
                    <img
                        src={gallery1}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery3}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery4}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                    <img
                        src={gallery2}
                        alt='фото торта'
                        className='main__bottom-image'
                    />
                </div>
            </section>
        </div>
    );
}

export default MainBottom;
