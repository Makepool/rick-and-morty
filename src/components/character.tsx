import './character.scss';
import { useHistory } from 'react-router-dom';

interface Props {
    id: number;
    image: string;
    name: string;
    species: string;
}

export default function Character({id, image, name, species}: Props) {
    const history = useHistory();

    let navigate = function (id: number) {
        history.push(`/${id}`);
    };

    return (
        <div className="character" onClick={() => navigate(id)}>
            <div className="character__image">
                <img src={image} height="50" width="50" alt={name + ' portrait'} />
            </div>
            <div className="character__info">
                <div className="title">{name}</div>
                Species: {species}
            </div>
        </div>
    )
}