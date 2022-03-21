import { IEpisode } from "../components/IEpisode";

export function seasonEpisodeString(singleEpisode: IEpisode): string {
  // return `S${singleEpisode.season}E${singleEpisode.number}`;
  return `S${String(singleEpisode.season).padStart(2, "0")}E${String(
    singleEpisode.number
  ).padStart(2, "0")}`;
}

// String(singleEpisode.season).padStart(2, '0'); // '0009'
// String(singleEpisode.number).padStart(2, '0'); // '0009'
