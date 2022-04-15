import React from 'react';
import PropTypes from 'prop-types';

function Map({ data }) {
  const { id, name, game, image, description} = data;
  return (
    <div className={`map map--${id}`}>
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center map__header">
          <h2>{name} - </h2>
          <span>{game}</span>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <p>{description}</p>
        </div>
        <div className="col-md-6">
          <img src={`/images/boards/${image}`} alt={`Map Thumbnail ${name}`} />
        </div>
      </div>
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.object
};

export default Map;