import { IEpisode } from "./IEpisode";
import { seasonEpisodeString } from "../utils/season-episode-string";
import { tagRemover } from "../utils/tagRemover";

interface EpisodeComponentProp {
  episode: IEpisode;
}

function EpisodeComponent(props: EpisodeComponentProp): JSX.Element {
  const episodeCode = seasonEpisodeString(props.episode);
  // const summaryWithoutTags = tagRemover(props.summary);
  return (
    <section className="episodeBlock">
      <h2 className="epCode">{episodeCode}</h2>
      <h1 className="epName">{props.episode.name}</h1>
      {props.episode.image == null && <p>IMAGE MISSING</p>}
      {props.episode.image !== null && (
        <img
          className="epImg"
          src={props.episode.image.medium}
          alt="scaled still from episode"
        />
      )}
      {props.episode.summary == null && (
        <p className="epText">SUMMARY MISSING</p>
      )}
      {props.episode.summary !== null && (
        <p className="epText">{tagRemover(props.episode.summary)}</p>
      )}
    </section>
  );
}

export default EpisodeComponent;
