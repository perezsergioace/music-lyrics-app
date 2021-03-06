const lyricForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

const updateUI = (data) => {
	const { songLyrics } = data

	// update details
	details.innerHTML = `
        <div class="display-6 my-4">
            <span>lyrics:</span>
        </div>
		<p class="lyrics-text my-3 px-5 text-left text-capitalize">${songLyrics}</p>
		<a class="click-here-link" href="#main-content">
            <p class="lead">Search another song &#8594;</p>
        </a>
    `
	// remove the d-none class if present
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none')
	}
}

const updateLyrics = async (artist, song) => {
	const songLyrics = await getSongLyric(artist, song)

	return {
		songLyrics: songLyrics
	}
}

lyricForm.addEventListener('submit', (event) => {
	// prevent default action
	event.preventDefault()

	// get artist value
	const artist = lyricForm.artist.value.trim()

	// get song value
	const song = lyricForm.song.value.trim()

	lyricForm.reset()

	// update UI
	updateLyrics(artist, song).then((data) => updateUI(data)).catch((error) => console.log(error))
})
