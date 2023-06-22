const price = document.querySelector('.sellmain')

const submitButton = document.querySelector('#buy')

const initialPriceValue = 5000
const htmlBase = 'Итоговая стоймость:'

const formatPrice = price => {
	return htmlBase + ' ' + (initialPriceValue + price)
}

submitButton.addEventListener('click', () => {
	const date = document.querySelector('#date').value
	const city = document.querySelector('#selector').value

	switch (city) {
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
