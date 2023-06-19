const searchField = document.getElementById('search__field').value
const searchAction = document.getElementById('search__action')
console.log(searchField);


searchAction.onclick = find__locations

function find__locations() {
// alert('test')
	
	// if (searchTerm.length > 0) {
		allLocations = document.querySelectorAll('.locations__image')
		let foundLocations = []
		allLocations.forEach(l => {
			if (l.querySelector('figcaption').innerText.includes(searchAction)) {
				foundLocations.push(l)
			
			}
		})

		let wrapper = document.querySelector('.locations__cards')

		wrapper.innerHTML = ''
		foundLocations.forEach(l => {
			console.log(l);
			wrapper.innerHTML += `<div class="locations__card"> 
			${l.innerHTML}
			</div>`
		})

}

	
	
// }

