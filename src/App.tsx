import { greet } from "./utils/greet";
import episodes from "./episodes.json";

// test episodes pulling correctly-
// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
