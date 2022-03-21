import { IEpisode } from "../components/IEpisode";

function isSearchTermPresent(
  singleEpisode: IEpisode,
  searchTerm: string
): boolean {
  const fullDetail =
    singleEpisode.name.toLowerCase() + singleEpisode.summary.toLowerCase();
  return fullDetail.includes(searchTerm.toLowerCase());
}

export default isSearchTermPresent;
