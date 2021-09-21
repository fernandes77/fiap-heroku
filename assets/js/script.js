$(document).ready(function () {
	$.ajax({
		url: 'https://geolocation-db.com/jsonp',
		jsonpCallback: 'callback',
		dataType: 'jsonp',
		success: function (location) {
			$('#state').html(location.state)
			$('#city').html(location.city)
			console.log(location)
			$('#hotels-find').text('Buscar hotéis em ' + location.city)
			$('#hotels-heading').text(
				'Hotéis encontrados em ' + location.city + ', ' + location.country_name
			)
		}
	})

	const form = document.querySelector('form')
	form.addEventListener('submit', (event) => {
		event.preventDefault()
		$('.hotels').css('display', 'block')
	})
})
