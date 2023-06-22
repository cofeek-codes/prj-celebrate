const price = document.querySelector('.sellmain')

const submitButton = document.querySelector('.buy')
const date = document.querySelector('#date').value

const initialPriceValue = 5000
const htmlBase = 'Итоговая стоймость:'

const formatPrice = price => {
	return htmlBase + ' ' + (initialPriceValue + price)
}
const city = document.querySelector('#selector')
price.innerHTML = formatPrice(5000)
city.addEventListener('change', () => {
	switch (city.value) {
		case 'Москва':
			price.innerHTML = formatPrice(5000)
			break
		case 'Ленинград':
			price.innerHTML = formatPrice(3000)
			break
		case 'Сталинград':
			price.innerHTML = formatPrice(4000)
			break
		case 'Свердловск':
			price.innerHTML = formatPrice(2000)
			break
	}
})

// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// modal
