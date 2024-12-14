import React, {useState} from 'react';
import {IoIosSwitch} from 'react-icons/io';

import './ToggleSwitch.css';
const ToggelSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? 'on' : 'off';
    const BGcolor = {backgroundColor: isOn ? '#4caf50' : ''};
    return (
        <>
            <h1 style={{color: '#000', textAlign: 'center'}}>
                Toggle Switch <IoIosSwitch />
            </h1>
            <div
                className="toggle-switch"
                style={BGcolor}
                onClick={handleToggleSwitch}>
                <div className={`switch ${checkIsOn}`}>
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div>
        </>
    );
};

export default ToggelSwitch;
