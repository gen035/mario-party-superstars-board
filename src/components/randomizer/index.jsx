import React, {useEffect, useState} from 'react';
import Map from './map';

function Randomizer() {
  const [hasRandomized, setHasRandomized] = useState(false);
  const [maps, setMaps] = useState();
  const [selectedMap, setSelectedMap] = useState();
  const [showSelectedMap, setShowSelectedMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMaps();
  }, []);

  const fetchMaps = async () => {
    const data = await fetch('data/maps.json');
    const maps = await data.json();
    setMaps(maps);
  };

  const randomize = () => {
    const max = maps && maps.length - 1 || 0;
    const selectedIndex = Math.floor(Math.random() * max);
    const selectedMap = maps && maps.length > 0 && maps[selectedIndex];
    setHasRandomized(true);
    setSelectedMap(selectedMap);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSelectedMap(true);
    }, 3000);
  };

  const renderButton = () => {
    return <button type="button" className="btn btn-success" onClick={randomize}>{hasRandomized ? 'Meh...retry' : 'Select Map'}</button>
  };

  const renderLoader = () => {
    return (
      <div className="row">
        <div className="col-12">
          <img className={`randomizer__loading is-visible`} src="/images/mario_loading.gif" alt="Loading..." />
        </div>
      </div>
    )
  };

  const renderSelectedMap = () => {
    return (
      <Map data={selectedMap} />
    )
  };

  return (
    <div className="randomizer">
      <div className="row">
        <div className="col-12">
          {renderButton()}
        </div>
      </div>
      {isLoading && renderLoader()}
      {showSelectedMap && renderSelectedMap()}
    </div>
  );
}

export default Randomizer;