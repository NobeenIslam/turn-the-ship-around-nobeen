import { IEpisode } from "./IEpisode";
import { seasonEpisodeString } from "../utils/season-episode-string";

  function Episode(props :IEpisode) :JSX.Element {
      const episodeCode = seasonEpisodeString(props)
      return (<>
        <h1>{props.name}</h1>    
        <h2>{episodeCode}</h2>
        <img src ={props.image.medium} alt = "scaled still from episode"> </img> 
        {props.summary}
      </>)
  }

  export default Episode;