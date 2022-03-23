import { IEpisode } from "../components/IEpisode";

function isSearchTermPresent(
  singleEpisode: IEpisode,
  searchTerm: string
): boolean {
  let fullDetail = "";
  if (singleEpisode.summary == null) {
    fullDetail = singleEpisode.name.toLowerCase();
  } else {
    fullDetail =
      singleEpisode.name.toLowerCase() + singleEpisode.summary.toLowerCase();
  }

  return fullDetail.includes(searchTerm.toLowerCase());
}

export default isSearchTermPresent;

// {props.summary == null && <p>SUMMARY MISSING</p>}
// {props.summary !== null &&
// <p>{tagRemover(props.summary)}</p>
// }
