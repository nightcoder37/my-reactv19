import React from 'react';
import ProfileCard from './ProfileCard';
const Profile = () => {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Alice"
                age={25}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderful day!</strong>
                    </div>
                }>
                <p>Hobbies:Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="BOb"
                age={30}
                greeting={
                    <div>
                        <strong>Hello Bob, Keep up the great work</strong>
                    </div>
                }>
                <p>Hobbies: Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
};

export default Profile;
