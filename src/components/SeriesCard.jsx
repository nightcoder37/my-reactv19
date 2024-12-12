import React from 'react';
import styles from './Netflix.module.css';
import styled from 'styled-components';
const SeriesCard = (props) => {
    const {img_url, name, rating, description, genre, cast, watch_url} =
        props.data;

    // const ButtonPro = styled.button({
    //     padding: '1.2rem 2.4rem',
    //     border: 'none',
    //     fontsize: '1.6rem',
    //     backgroundColor: `${rating >= 8.5 ? '#7dcea0' : '#f7dc6f'}`,
    //     color: 'var( --btn-color)',
    //     fontweight: 'bold',
    //     cursor: 'pointer'
    // });

    const ButtonPro = styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem;
        background-color: ${(props) =>
            props.rating >= 8.5 ? '#7dcea0' : '#f7dc6f'};
        color: var(--btn-color);
        font-weight: bold;
        cursor: pointer;
    `;

    const Rating = styled.h3`
        font-size: 1.6rem;
        color: #7dcea0;
        text-transform: capitalize;
    `;

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
    return (
        <>
            <li className={styles.card}>
                <div>
                    <img src={img_url} alt={name} width="20%" height="20%" />
                </div>
                <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
                    <h2>Name: {name}</h2>
                    <Rating>
                        Rating:
                        <span className={`${styles.rating} ${ratingClass}`}>
                            {rating}
                        </span>
                    </Rating>
                    <p className="text-3xl font-bold underline">
                        Summary:{description}
                    </p>
                    <p>Gener:{genre.join(',')}</p>
                    <p>Cast: {cast.join(',')}</p>
                    <a href={watch_url} target="_blank">
                        {/* <button style={btn_style}>Watch Now</button> */}
                        <ButtonPro rating={rating}>Watch Now</ButtonPro>
                    </a>
                </div>
            </li>
        </>
    );
};

export default SeriesCard;
