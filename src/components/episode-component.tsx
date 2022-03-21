import { IEpisode } from "./IEpisode";
import { seasonEpisodeString } from "../utils/season-episode-string";

  function Episode(props :IEpisode) :JSX.Element {
      const episodeCode = seasonEpisodeString(props)
      return (<>
        <h1>{props.name}</h1>    
        <h2>{episodeCode}</h2>
        <img src ={props.image.medium} alt = "scaled still from episode" />
        <>
    {/* <a href={props.image.medium}><img alt="scaled still from episode" src={props.image.medium}></img></a> */}
  </>

        {props.summary}
      </>)
  }

  export default Episode;