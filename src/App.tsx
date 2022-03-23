import { useState } from "react";
import Episode from "./components/episode-component";
import episodeData from "./episodes.json";
import { IEpisode } from "./components/IEpisode";
import isSearchTermPresent from "./utils/isSearchTermPresent";
import { createEpSelectorName } from "./utils/createEpSelectorName";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [idSelect,setIdSelect] = useState<string>()

  const episodeBlocks = episodeData
    .filter((singleEpisode: IEpisode) =>
      isSearchTermPresent(singleEpisode, search)
    )
    .map(Episode);

  // function createDropDownListElement(singleEpisode:IEpisode):JSX.Element {
  //   const epSelectorName = createEpSelectorName(singleEpisode);
  //   return (
  //     <option 
  //       key={singleEpisode.airstamp} 
  //       value={singleEpisode.id}
  //     >
  //       {epSelectorName}
  //     </option>
  //   );
  // }

  // const epSelectorOptionsArray = episodeData.map(createDropDownListElement)

  const epSelectorOptionsArray = episodeData.map((singleEpisode: IEpisode) => {
    const epSelectorName = createEpSelectorName(singleEpisode);
    return (
      <option 
        key={singleEpisode.airstamp} 
        value={singleEpisode.id}
      >
        {epSelectorName}
      </option>
    );
  });


  return (
    <>
      <header>
        <select 
          name="Episode Selector" 
          value={idSelect}
          onChange = {(event)=> {setIdSelect(event.target.value); console.log(event.target.value)}}
        >
          {epSelectorOptionsArray}
        </select>
        <input
          placeholder="Type to Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
        <p>
          Displaying {episodeBlocks.length} / {episodeData.length} episodes
        </p>
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
