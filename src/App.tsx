import { useEffect, useState } from "react";
import EpisodeComponent from "./components/episode-component";
// import episodeData from "./episodes.json";
import shows from "./shows.json";
import { IEpisode } from "./components/IEpisode";
import { IShow } from "./components/IShow";
import isSearchTermPresent from "./utils/isSearchTermPresent";
import { createEpSelectorName } from "./utils/createEpSelectorName";
import isIdPresent from "./utils/isIdPresent";
import { alphabeticalShowSorter } from "./utils/alphabeticalShowSorter";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [idSelect, setIdSelect] = useState<string>("Select an episode...");
  const [showIdSelect, setShowIdSelect] = useState<string>("496");
  console.log(showIdSelect);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showIdSelect}/episodes`)
      .then((response) => response.json())
      .then((jsonEpisode: IEpisode[]) => setEpisodeData(jsonEpisode));
  }, [showIdSelect]);

  let filteredEpisodes: IEpisode[] = [];

  if (idSelect === "Select an episode...") {
    filteredEpisodes = episodeData.filter((singleEpisode: IEpisode) =>
      isSearchTermPresent(singleEpisode, search)
    );
  } else {
    filteredEpisodes = episodeData.filter((singleEpisode: IEpisode) =>
      isIdPresent(singleEpisode, idSelect)
    );
  }

  const episodeBlocks = filteredEpisodes.map((singleEpisode) => (
    <EpisodeComponent episode={singleEpisode} key={singleEpisode.id} />
  ));
  // const episodeBlocks :IEpisode[] = [];

  const epSelectorOptionsArray = episodeData.map((singleEpisode: IEpisode) => {
    const epSelectorName = createEpSelectorName(singleEpisode);
    return (
      <option key={singleEpisode.id} value={singleEpisode.id}>
        {epSelectorName}
      </option>
    );
  });

  const showSelectorOptionsArray = shows
    .sort(alphabeticalShowSorter)
    .map((singleShow: IShow) => {
      return (
        <option key={singleShow.id} value={singleShow.id}>
          {singleShow.name}
        </option>
      );
    });

  return (
    <>
      <header>
        <h1 className="title">Turn the Ship around.tv</h1>
        <select
          name="Show selector"
          value={showIdSelect}
          onChange={(event) => {
            setShowIdSelect(event.target.value);
            setIdSelect("Select an episode...");
            setSearch("");
          }}
          className="dropDown"
        >
          <option value={496}>Select a show...</option>
          {showSelectorOptionsArray}
        </select>
        <select
          name="Episode Selector"
          value={idSelect}
          onChange={(event) => {
            setIdSelect(event.target.value);
            setSearch("");
          }}
          className="dropDown"
        >
          <option defaultValue={""}>Select an episode...</option>
          {epSelectorOptionsArray}
        </select>
        <input
          placeholder="Type to Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setIdSelect("Select an episode...");
          }}
          className="searchBar"
        ></input>
        <div className="epControls">
          <p className="epCount">
            Displaying {episodeBlocks.length} / {episodeData.length} episodes
          </p>
          <button
            onClick={() => {
              setSearch("");
              setIdSelect("Select an episode...");
            }}
            className="allEpButton"
          >
            Show All Episodes
          </button>
        </div>
      </header>
      <br></br>
      <main>{episodeBlocks}</main>
      <br></br>
      <br></br>
      <br></br>
      <footer>
        {" "}
        Use of the TVmaze API is licensed by CC BY-SA. This means the data can
        freely be used for any purpose, as long as TVmaze is properly credited
        as source and your application complies with the ShareAlike provision.
        You can satisfy the attribution requirement by linking back to TVmaze
        from within your application or website, for example using the URLs
        available in the API.
        <a href="https://www.tvmaze.com/api#licensing"> See more here </a>
      </footer>
    </>
  );
}

export default App;
