import { IEpisode } from "./IEpisode";
import { seasonEpisodeString } from "../utils/season-episode-string";
import { tagRemover } from "../utils/tagRemover";

function Episode(props: IEpisode): JSX.Element {
  const episodeCode = seasonEpisodeString(props);
  const summaryWithoutTags = tagRemover(props.summary);
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{episodeCode}</h2>
      {props.image == null && <p>IMAGE MISSiING</p>}
      {props.image !== null && (
        <img src={props.image.medium} alt="scaled still from episode" />
      )}
      <p>{summaryWithoutTags}</p>
    </>
  );
}

export default Episode;
