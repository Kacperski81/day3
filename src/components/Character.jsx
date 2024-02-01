import PropTypes from 'prop-types';

export default function Character(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <ul>
                <li>Date of Birth: {props.birth}</li>
                <li>Date of Death: {props.death}</li>
                <li>Race: {props.race}</li>
                <li>Realm: {props.realm}</li>
                <li>Spouse: {props.spouse}</li>
            </ul>
        </div>
    )
}

Character.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    race: PropTypes.string,
    realm: PropTypes.string,
    spouse: PropTypes.string,

}