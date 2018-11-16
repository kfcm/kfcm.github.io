		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "-4.536984", "longitude":"39.367611", "icon": "img/pins/Marker.png"}
			]
		};

		// set up kanana fellowship church as center
		var kanana = {lat: -4.536984, lng: 39.367611};
		
		//set up map options
		$(".map_contact").mapmarker({
			zoom	: 12,
			center	: kanana,
			markers	: myMarkers
		});