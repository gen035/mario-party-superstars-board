import React, {useEffect, useState} from 'react';
import './styles.sass';

function Randomizer() {
  const [hasRandomized, setHasRandomized] = useState(false);
  const [maps, setMaps] = useState();
  const [selectedMap, setSelectedMap] = useState();
  const [isLoading, setIsLoading] = useState(true)

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
  };

  const renderButton = () => {
    return <button type="button" className="btn btn-success" onClick={randomize}>{hasRandomized ? 'Meh...retry' : 'Select Map'}</button>
  };

  const renderLoader = () => {
    if(isLoading) {
      return <img className="randomizer__loading" src="/images/mario_loading.gif" alt="Loading..." />
    }
  };

  return (
    <div className="randomizer">
      <div className="row">
        <div className="col-md-12">
          {renderButton()}
        </div>
        {renderLoader()}
      </div>
    </div>
  );
}

export default Randomizer;