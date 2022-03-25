# Academy Project: 'Turn the ship around'
## Nobeen & Mat
<br />
<a href="https://www.notion.so/weareacademy/Team-C4R4-Mat-and-Nobeen-82b1a6e9af9d477ca8fdd30c11e3a72e">Notion Project page</a>
<br />
<a href="https://github.com/matbatten/turn-the-ship-around">GitHub repository</a>
<br />
<a href="https://academy-matbatten-tv-shows.netlify.app/">Netlify Hosted Page</a>
<br />
## Initialising Steps - local hosting
<br />
- Fork the repository from GitHub in the above link
- Clone into your machine
- Install dependencies (run command 'yarn')
- Host locally at port 3000 (run command 'yarn start')

##What does this project do?
<br />
The React app we have created uses an API from <a href="tvmaze.com">tvmaze.com< /a> to pull data relating to TV shows.
There is a 'show selector' input on the app that allows users to select a TV show from a static list of shows taken from <a href="http://api.tvmaze.com/shows?page=1">TV Maze< /a> and the dropdown makes available a dynamic list of episodes in the next dropdown input.
< /br>
There is also a search functionality that returns a TV episode that contains the search term in the title or description of an episode.
The two select inputs and the search functionality run independently of each other - if you select a new show, it will clear the episode selected or the search bar, so you can avoid unintended double-filtering.
