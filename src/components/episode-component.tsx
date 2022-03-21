import { IEpisode } from "./IEpisode";

  function Episode(props :IEpisode) :JSX.Element {
      return (<>
        {/* You must extract a pure function to generate this episode code from an episode object, and write unit tests for it with jest. */}

        "Episode Name
        Season Number - Episode Number (both zero-padded to 2 digits eg S01E01)
        Episode Medium Image
        Episode summary Text"

      </>)
  }

  export default Episode;