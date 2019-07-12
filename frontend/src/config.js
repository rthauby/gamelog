const config = {
  api: {
    steam: {
      key: process.env.REACT_APP_STEAM_API_KEY,
      id: process.env.REACT_APP_STEAM_ID,
      urls: {
        ownedGames: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${process.env.REACT_APP_STEAM_ID}&format=json`
      }
    }
  }
}

export default config