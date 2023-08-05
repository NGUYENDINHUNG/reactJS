import React from 'react';
import List from './list';
import Play from './play';
function ZingPlay(props) {
    return (
        <div className='d-flex'>
           <List/>
           <Play/>
        </div>
    );
}

export default ZingPlay;