import React from 'react';
import Button from '@material-ui/core/Button';

import './Chore.css';

const Chore = (props) => {
    return (
        <div className='chore'>
            <p className='chore-description'>{props.chore.description}</p>
            <p className='chore-reward'>${props.chore.reward}</p>
        </div>
    )
}

export default Chore;