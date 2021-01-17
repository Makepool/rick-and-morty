import './list.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {todoState } from './shapes';
import {createTodo} from './actions';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Character from '../components/character';
import {TextField} from '@material-ui/core';

interface Itodos {
    todos: todoState[];
    onCreatePressed?: any;
}

type PropsFromRedux = Itodos; //<typeof connector>
type Props = PropsFromRedux & {
    //   backgroundColor: string
}

const dunno = (onCreatePressed: any) => {
    console.log('dunno');
    onCreatePressed('temp');
};

const List = ({todos, onCreatePressed}: Props) => {
    const [value, setValue] = useState('');
    const [characters, setCharacters] = useState<Array<any>>([]);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
            .then(res => res.json())
            .then((result: any) => {
                if (result.results) {
                    setCharacters(result.results);
                } else {
                    setCharacters([]);
                }
            });
    }, [value]);

    return (
        <>
            <TextField id="standard-basic" label="Filter characters" value={value} onChange={(event) => {setValue(event.target.value)}} />
            <button onClick={() => dunno(onCreatePressed)}>dunno</button>
            <Link to='/about'>sdsd</Link>
            {characters.length > 0 && characters.map(character => (
                <Character id={character.id} image={character.image} name={character.name} species={character.species} key={character.id} />
            ))}

            {characters.length === 0 &&
                <div>
                    There are no matching characters
                </div>
            }
        </>
    )
}

const mapStateToProps = (state: todoState[]): Itodos => ({
    todos: state//.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onCreatePressed: (text: string) => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);