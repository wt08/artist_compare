import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompPage from "./components/CompPage";
import NavBar from "./components/NavBar";
import spotifyLogo from './spotifyLogo'

function App() {
  let apiToken = process.env.API_KEY;

  const [artistInfo, setArtistInfo] = useState({});
  const [comps, setComps] = useState([]);
  if (comps.length > 2) {
    setComps([]);
  }

  useEffect(() => {
    const url =
      "https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,1i8SpTcr7yvPOmcqrbnVXY,4obzFoKoKRHIphyHzJ35G3,7iK8PXO48WeuP03g8YR51W,1GDbiv3spRmZ1XdM1jQbT7";
    const makeApiCall = async () => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });
      const json = await res.json();
      setArtistInfo(json.artists);
    };
    makeApiCall();
  }, []);

  const handleCompToggle = (artist) => {
    const compsCopy = [...comps];
    const artistIndex = compsCopy.indexOf(artist);
    artistIndex > -1
      ? compsCopy.splice(artistIndex, 1)
      : compsCopy.push(artist);
    setComps(compsCopy);
  };

  console.log(comps);

  const clearComps = () => setComps([]);

  return (
    <div className="App">
      <NavBar />
      <header>
      <h1><img className='spotify' src={spotifyLogo} alt=''/> Compare</h1>
      <h2>Pick 2</h2>
      </header>

      <main>
        <Switch>
          <Route
            path="/Project-2---React"
            render={(routerProps) => (
              <HomePage
                {...routerProps}
                artistInfo={artistInfo}
                handleCompToggle={handleCompToggle}
                comps={comps}
                clearComps={clearComps}
              />
            )}
          />
          <Route
            path="/CompPage"
            render={(routerProps) => (
              <CompPage {...routerProps} comps={comps} apiToken={apiToken} done={'70'}/>
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
