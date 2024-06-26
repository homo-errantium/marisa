import './Swiper.sass';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SwiperCard from '../Card/SwiperCard/SwiperCard';

function Swiper({ onCardClick, ...props }) {
    const PAGE_WIDTH = 67;
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    function handleRightClick() {
        setOffset(() => {
            const newOffset = offset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    }

    function handleLeftClick() {
        setOffset(() => {
            const newOffset = offset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    }

    useEffect(() => {
        //вытаскиваем из пропс массив данных, создаем массив карточек
        const cards = props.children;

        //возвращаем массив карточек со стилями/рнедерим
        setPages(
            cards.map((card) => {
                return (
                    <SwiperCard
                        key={card.id}
                        card={card}
                        pageWidth={PAGE_WIDTH}
                    />
                );
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='swiper'>
            <div className='swiper__container'>
                <FaChevronLeft
                    className='swiper__button'
                    onClick={handleLeftClick}
                />
                <div className='swiper__window'>
                    <div
                        className='swiper__slides'
                        style={{
                            transform: `translateX(${offset}vw)`,
                        }}
                    >
                        {pages}
                    </div>
                </div>
                <FaChevronRight
                    className='swiper__button'
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
}

export default Swiper;
