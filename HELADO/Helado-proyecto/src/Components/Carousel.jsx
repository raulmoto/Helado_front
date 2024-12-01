import  { useState,useEffect  } from 'react';
import '../App.css';
import Cards from '../Components/Card';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel({ CardList }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const avanzarDelante = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === CardList.length - 1 ? 0 : prevIndex + 1;

            return newIndex;
        });
    };

    const retrocederAtras = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? CardList.length - 1 : prevIndex - 1;
            return newIndex;
        });
    };

    useEffect(()=>{
        const backgrounds = [
            'url("../../public/fresa.jpg")',
            'url("../../public/bolas.jpg")',
            'url("../../public/conos.jpg")',
            'url("../../public/taza.jpg")'
        ];
        document.body.style.backgroundImage = backgrounds[currentIndex];
        document.body.style.backgroundSize = 'cover'; // Ajusta el tamaño del fondo
        document.body.style.backgroundPosition = 'center'; // Centra el fondo
    }, [currentIndex]);

    return (
        <div className="Carousel">
            <div className="row izquierda" onClick={retrocederAtras}>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </div>
            <div className="carousel-track">
                {CardList.map((card) => (
                    <Cards 
                        key={card.id} 
                        modelUrl={card.modelUrl} 
                        name={card.name} 
                        id={card.id}
                        style={{
                            width: card.id === CardList[currentIndex].id ? '400px' : '386px', // Cambia el ancho de la tarjeta actual
                            height: card.id === CardList[currentIndex].id ? '120px' : '90px',
                            // Cambia la altura de la tarjeta actual
                            transition: 'all 0.3s ease' // Animación suave
                        }}
                    />
                ))}
            </div>
            <div className="row derecha" onClick={avanzarDelante}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </div>
        </div>
    );
}

Carousel.propTypes = {
    CardList: PropTypes.arrayOf(PropTypes.shape({
        modelUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
};

export default Carousel;
