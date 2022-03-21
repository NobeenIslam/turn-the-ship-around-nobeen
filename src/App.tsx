import { useState } from "react";
import Episode from "./components/episode-component";
import episodeData from "./episodes.json";
import { IEpisode } from "./components/IEpisode";
import isSearchTermPresent from "./utils/isSearchTermPresent";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const episodeBlocks = episodeData
    .filter((singleEpisode: IEpisode) =>
      isSearchTermPresent(singleEpisode, search)
    )
    .map(Episode);

  // function isSearchTermPresent(
  //   singleEpisode: IEpisode
  // ): boolean {
  //   const fullDetail =
  //     singleEpisode.name.toLowerCase() + singleEpisode.summary.toLowerCase();
  //   return fullDetail.includes(search.toLowerCase());
  // }

  return (
    <>
      <header>
        <input
          placeholder="Type to Search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
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
