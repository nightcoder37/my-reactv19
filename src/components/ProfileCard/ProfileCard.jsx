import React from 'react';

const ProfileCard = (props) => {
    const {name, age, greeting} = props;
    return (
        <div>
            <h2>name:{name}</h2>
            <p>age:{age}</p>
            <p>{greeting}</p>
            <div>{props.children}</div>
        </div>
    );
};

export default ProfileCard;
