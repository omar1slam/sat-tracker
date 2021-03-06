import React, { Component } from 'react';
import SelectedStations from './Selection/SelectedStations';


class Info extends Component {
    render() {
        const p = this.props;
        const { selected, stations, satCounter } = p;

        return (
            
            <div className='Info'>
                <h1>Egsa Satellite tracker</h1>
                {stations && stations.length > 0 && (<p>Total objects: {satCounter}</p>)}
                
            </div>
        )
    }
}

export default Info;