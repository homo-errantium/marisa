import './MainPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import { NaviogationCards } from '../DataBase/navigationData';

import Swiper from '../Swiper/Swiper';
import { actionsImage } from '../DataBase/actionsData';

function MainPage({ onCardClick }) {
    return (
        <div className='wrapper'>
            <Header />
            <Main>
                <>
                    <section className='main main_top'>
                        <h1 className='main__title'>Marisa_Cake</h1>
                    </section>
                    <section className='main main_middle'>
                        <h2 className='main__subtitle'>
                            Торты на заказ в Казани
                        </h2>
                        <Swiper onCardClick={onCardClick}>
                            {actionsImage}
                        </Swiper>
                    </section>
                    <section className='main main_bottom'>
                        <Slider title={''} onCardClick={onCardClick}>
                            {NaviogationCards}
                        </Slider>
                    </section>
                </>
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;