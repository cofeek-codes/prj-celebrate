const searchField = document.getElementById('search__field')
const searchAction = document.getElementById('search__action')

let searchTerm = searchField.value

if (searchTerm.length > 0) {
	allLocations = document.querySelectorAll('.locations__card')
	let foundLocations = []
	allLocations.forEarch(l => {
		if (l.querySelector('figcaption').includes(searchTerm)) {
            foundLocations.push(l)
		}
	})
}


