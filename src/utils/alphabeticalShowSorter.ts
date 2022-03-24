import { IShow } from "../components/IShow";

export function alphabeticalShowSorter(infoA: IShow, infoB: IShow): number {
  if (infoA.name.toLowerCase() < infoB.name.toLowerCase()) {
    return -1;
  } else if (infoA.name.toLowerCase() > infoB.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}
