import React from 'react';

const PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12">
            <div className="card">
                <div className="card-image">
                <img src="soccer.jpeg" alt="Soccer"/>
    <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                </div>
                <div className="card-content">
                    <p>{props.player.email}</p>
                </div>
                <div className="card-action">
                    Team: FANNG
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default PlayerSingle;