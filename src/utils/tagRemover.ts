export function tagRemover(inputString: string): string {
  return inputString.replace(/(<([^>]+)>)/gi, "");
}
