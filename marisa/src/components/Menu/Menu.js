import './Menu.css';
import MenuContent from '../MenuContent/MenuContent';

function Menu(props) {
    return (
        <main className='main'>
            <div className='wrapper'>
                <MenuContent onCardClick={props.onCardClick} />
            </div>
        </main>
    );
}

export default Menu;
