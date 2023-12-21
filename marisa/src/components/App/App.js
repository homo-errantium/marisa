import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Fillings from '../Fillings/Fillings';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import AddCakePopup from '../AddCakePopup/AddCakePopup';

function App() {
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [isAddCakePopupOpen, setIsOpenPopupFormAdd] = React.useState(false);

    function openPopupViewer(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsOpenPopupFormAdd(false);
        setSelectedCard(false);
    }

    function openPopupFormAdd() {
        setIsOpenPopupFormAdd(true);
        console.log(isAddCakePopupOpen);
    }

    function handleAddCakeSubmit() {
        alert('Письмо отправлено');
    }

    return (
        <div className='page'>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Main
                            onCardClick={openPopupViewer}
                            onAddCake={openPopupFormAdd}
                        />
                    }
                />
                <Route
                    path='/menu'
                    element={<Menu onCardClick={openPopupViewer} />}
                />
                <Route path='/fillings' element={<Fillings />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <ImagePopup
                isOpen={selectedCard}
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <AddCakePopup
                isOpen={isAddCakePopupOpen}
                onClose={closeAllPopups}
                onSubmit={handleAddCakeSubmit}
            />
        </div>
    );
}

export default App;
