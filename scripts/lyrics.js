// get song lyrics from API
const getSongLyric = async (artist, song) => {
	const base = 'https://api.lyrics.ovh/v1/'
	const query = `${artist}/${song}`

	const response = await fetch(base + query)
    const data = await response.json()
    
	return data.lyrics
}