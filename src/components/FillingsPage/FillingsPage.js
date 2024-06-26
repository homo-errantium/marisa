import './FillingsPage.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FillingsContent from './FillingsContent/FillingsContent';
import Main from '../Main/Main';

function FillingsPage({ onCardClick }) {
    return (
        <div className='wrapper'>
            <Header />
            <Main>
                <FillingsContent onCardClick={onCardClick} />
            </Main>
            <Footer />
        </div>
    );
}

export default FillingsPage;
