import React from 'react';

function Profile(props) {
  const { player, short = false, questionIndex } = props;
  return (
    <span className={`${short ? '' : 'small'}`}>
      {
        !short &&
        <span className="mr-2">
          <small><i className="mr-1 fas fa-user"></i></small>
          {player.name}
        </span>
      }
      {
        !short &&
        <span className="mr-2">
          <small><i className="mr-1 fas fa-award"></i></small>
          {player.state === 0 ? 'N/A' : player.rank}
        </span>
      }
      <span className="mr-2">
        {player.results.map((result, i) => (
          <span key={i} className={i === questionIndex ? '' : 'small'}>
            {result === null && <i className="far fa-circle"></i>}
            {result === false && <i className="fas fa-times-circle"></i>}
            {result === true && <i className="text-warning fas fa-check-circle"></i>}
          </span>
        ))}
      </span>
      <span className="mr-2 font-weight-lighter font-italic">
        {player.score}
      </span>
    </span>
  );
}

export default Profile;