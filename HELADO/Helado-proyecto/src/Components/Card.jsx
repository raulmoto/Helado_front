
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Cards({ modelUrl, name, id, style }) {
    return (
        <Card style={style} className='card'>
            <Card.Img className='imgCard' variant="top" src={modelUrl} />
            <Card.Body>
                <Card.Title></Card.Title>
            </Card.Body>
        </Card>
    );
}

Cards.propTypes = {
    modelUrl: PropTypes.string.isRequired,  // URL del modelo debe ser una cadena obligatoria
    name: PropTypes.string.isRequired,      // Nombre debe ser una cadena obligatoria
    id: PropTypes.number.isRequired,        // ID debe ser un número obligatorio
    style: PropTypes.object                 // El estilo es un objeto que puede ser pasado para customizar la tarjeta
};

export default Cards;
