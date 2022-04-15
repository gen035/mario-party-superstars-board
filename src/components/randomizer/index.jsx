import React, {useEffect, useState} from 'react';
import { sample } from 'lodash';
import Map from './map';

function Randomizer() {
  const [maps, setMaps] = useState();
  const [selectedMap, setSelectedMap] = useState();
  const [buttonValues] = useState({
    "initial": "Select...",
    "loading": "Let me think...",
    "map": "Meh... try again",
    "allMaps": "Select..."
  });
  const [view, setView] = useState('initial');

  useEffect(() => {
    fetchMaps();
  }, []);

  const fetchMaps = async () => {
    const data = await fetch('data/maps.json');
    const maps = await data.json();
    setMaps(maps);
  };

  const randomize = () => {
    const mapsCopy = [...maps];
    const duplicate = [...mapsCopy, ...mapsCopy]; //Duplicate to avoid drawing same map in a row
    const item = sample(duplicate);

    setSelectedMap(item);
    setView("loading");

    setTimeout(() => {
      setView("map");
    }, 2000);
  };

  const renderButton = () => {
    return (
      <>
        <button type="button" className="btn btn-lg btn-success" onClick={randomize}>
          {buttonValues[view]}
        </button>
        <button type="button" className={`btn btn-lg btn-primary ${view === "allMaps" ? 'disabled' : ''}`} onClick={() => setView("allMaps")}>Show All Boards</button>
      </>
    )
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
        <div className="col-12 d-flex justify-content-center">
          {renderButton()}
        </div>
      </div>
      {view === "loading" && renderLoader()}
      {view === "map" && renderSelectedMap()}
      {view === "allMaps" && (
        maps.map(item => {
          return <Map key={item.id} data={item} />
        })
      )}
    </div>
  );
}

export default Randomizer;