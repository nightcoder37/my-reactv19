import React from 'react';

const SeriesCard = (props) => {
    const {id, img_url, name, rating, description, genre, cast, watch_url} =
        props.data;
    return (
        <>
            <li key={id}>
                <div>
                    <img src={img_url} alt={name} width="20%" height="20%" />
                </div>
                <h2>Name: {name}</h2>
                <h3>Rating:{rating}</h3>
                <p>Summary:{description}</p>
                <p>Gener:{genre}</p>
                <p>Cast: {cast}</p>
                <a href={watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </li>
        </>
    );
};

export default SeriesCard;
