import { IEpisode } from "../components/IEpisode";

export function createEpSelectorName(singleEpisode: IEpisode): string {
  return `S${String(singleEpisode.season).padStart(2, "0")}E${String(
    singleEpisode.number
  ).padStart(2, "0")} - ${singleEpisode.name}`;
}
