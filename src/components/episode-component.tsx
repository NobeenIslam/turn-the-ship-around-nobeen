import { IEpisode } from "./IEpisode";
import { seasonEpisodeString } from "../utils/season-episode-string";
import { tagRemover } from "../utils/tagRemover";

function EpisodeComponent(props: IEpisode): JSX.Element {
  const episodeCode = seasonEpisodeString(props);
  // const summaryWithoutTags = tagRemover(props.summary);
  return (
    <section className = "episodeBlock">
      <h2 className = "epCode">{episodeCode}</h2>
      <h1 className = "epName">{props.name}</h1>
      {props.image == null && <p>IMAGE MISSING</p>}
      {props.image !== null && (
        <img className = "epImg" src={props.image.medium} alt="scaled still from episode" />
      )}
      {props.summary == null && <p className = "epText">SUMMARY MISSING</p>}
      {props.summary !== null && <p className = "epText">{tagRemover(props.summary)}</p>}
    </section>
  );
}

export default EpisodeComponent;
