const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientID = "4ac04bacf72d4756aa346b242e5a3649"
const redirectUri = "localhost:3000"
const scopes = ["user-library-read","playlist-modify-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}
&scopes=${scopes.join("%20"
)}&response_type=token&show_dialog=true`