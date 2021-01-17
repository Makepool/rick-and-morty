import "./details.scss";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function Details() {
    const { id } = useParams<{id?: string}>();
    const [character, setCharacter] = useState<any>({});
    const [episodes, setEpisodes] = useState<Array<any>>([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then((result: any) => {
                setCharacter(result);
                const episodesStrings = result.episode.map((x: string) => Number(x.split('/').pop()));

                setTimeout(() => {
                    fetch(`https://rickandmortyapi.com/api/episode/${episodesStrings.join(',')}`)
                        .then(res => res.json())
                        .then((result: any) => {
                            setEpisodes(result);
                        });
                }, 200);
            });
    }, [id]);

    return (
        <>
            <div>
                <Link to="/">Characters</Link> &gt; Details
            </div>
            <div className="top-bar">
                <h1>{character.name}</h1>
                {/* <div>
                    <button>Back</button>
                </div> */}
            </div>
            <div className="details">
                <div className="details__information">
                    <img src={character.image} height="250" width="250" className="portrait" alt={character.name + ' portrait'} />
                    <div>
                        <dl>
                            <dt>Status</dt>
                            <dd>{character.status}</dd>
                            <dt>Species</dt>
                            <dd>{character.species}</dd>
                            <dt>Type</dt>
                            {character.type && <dd>{character.type}</dd>}
                            {!character.type && <dd>--</dd>}
                            <dt>Gender</dt>
                            <dd>{character.gender}</dd>
                            <dt>Origin</dt>
                            <dd>{character?.origin?.name}</dd>
                            <dt>Location</dt>
                            <dd>{character?.location?.name}</dd>
                            <dt>Created</dt>
                            <dd>{character.created}</dd>
                        </dl>
                    </div>
                </div>
                <div className="details__episodes">
                    <h2>Episodes</h2>
                    {episodes.length > 0 &&
                        <dl>
                            {episodes.map((episode: any) => (
                                <React.Fragment key={episode.id}>
                                    <dt className="episode">{episode.episode}</dt>
                                    <dd>{episode.name}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    }
                    {episodes.length === 0 && <CircularProgress />}
                </div>
            </div>
        </>
    )
}