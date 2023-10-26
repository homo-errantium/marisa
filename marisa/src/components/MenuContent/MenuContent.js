import './MenuContent.css';
import MenuCard from '../MenuCard/MenuCard';
import cardImage1 from '../../images/gallery1.jpg';
import cardImage2 from '../../images/gallery2.jpg';
import cardImage3 from '../../images/gallery3.jpg';
import cardImage4 from '../../images/gallery4.jpg';
import cakes from '../../utils/constants';

function MenuContent(props) {
    return (
        <section className='menu-content'>
            <h1 className='menu-content__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>

            <ul className='menu-content__gallery'>
                {cakes.map((card, index) => (
                    <MenuCard
                        key={index}
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </ul>
        </section>
    );
}

export default MenuContent;
