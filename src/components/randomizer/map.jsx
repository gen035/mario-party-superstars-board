import React from 'react';
import PropTypes from 'prop-types';

function Map({ data }) {
  const { id, name, game, image, description} = data;
  return (
    <div className={`map map--${id}`}>
      <div className="row">
        <div className="col-12 map__header">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img src={`/images/boards/${image}`} alt={`Map Thumbnail ${name}`} />
        </div>
        <div className="col-md-6">
          <h3>Original game: {game}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.object
};

export default Map;