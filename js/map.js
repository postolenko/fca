function initMap() {

	if( document.getElementById("map") ) {

		var map = new google.maps.Map(document.getElementById('map'), {
							center: {lat: 55.761468, lng: 37.6099002},
							scrollwheel: false,
							scaleControl: false,
							zoom: 16
						});

		var contentString = '<div class="map_tooltip">'+
							'<p>г. Москва, Столешников пер., д. 6, стр. 3,<br />'+
							'тел.: +7 (495) 921-06-40,<br />'+
							'e-mail: info@fsa-msk.ru</p></div>';


		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			pixelOffset: new google.maps.Size(11, 32),
			disableAutoPan: false,
			zIndex: null,
			enableEventPropagation: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 55.761468, lng: 37.6099002},
			map: map,
			title: 'Sevice Print'
		});

		infowindow.open(map, marker);

		google.maps.event.addListener(infowindow, 'domready', function(){
		    $(".gm-style-iw").prev("div").hide();
		    $(".gm-style-iw").next("div").hide();
		});

	}

}