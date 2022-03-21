import Episode from "./components/episode-component";
import episodeData from "./episodes.json";
//import IEpisode from "./components/IEpisode"

const episodeBlocks = episodeData.map(Episode);

// test episodes pulling correctly-
// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return <>
          {episodeBlocks}
  </>

}

export default App;
