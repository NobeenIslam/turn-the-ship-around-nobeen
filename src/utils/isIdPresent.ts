import { IEpisode } from "../components/IEpisode";

function isIdPresent(singleEpisode: IEpisode, idTerm: string): boolean {
  return String(singleEpisode.id).includes(idTerm);
}

export default isIdPresent;
