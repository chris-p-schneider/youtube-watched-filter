function filterWatched() {
	const thumbs = document.querySelectorAll('#content.style-scope ytd-rich-item-renderer');
	thumbs.forEach((t) => {
		const watched = t.querySelector('#progress');
		if (watched) {
			t.style.display = 'none';
		}
	});
}

function filterAll() {
	let iterations = 5;
	filterWatched();
	for (let i = 1; i <= iterations; i++) {
		setTimeout(filterWatched, (1000 * i));
	}
}

filterAll();