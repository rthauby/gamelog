const config = {
  api: {
    steam: {
      key: process.env.REACT_APP_STEAM_API_KEY,
      id: process.env.REACT_APP_STEAM_ID,
      urls: {
        ownedGames: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${process.env.REACT_APP_STEAM_ID}&format=json`
      }
    },
    local : {
      urls: {
        list: 'http://127.0.0.1:8000/api/games?format=json',
        search: 'http://127.0.0.1:8000/api/games/search/'
      }
    }
  }
}

export default config