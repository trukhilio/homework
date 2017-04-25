let initMap = () => {
    google.maps.event.addDomListener(window, 'load', initMap);
    let coord = {lat: 50.4499206, lng: 30.5249929};
    let map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 17,
        center: coord,
        scrollwheel: false,
        zoomControl: false,
        mapTypeId: 'roadmap',
        styles: styleMap,
        streetViewControl: false,
        mapTypeControl: false
    });

    let styleMap = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d7d7d7"
                },
                {
                    "lightness": 10
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#add136"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#add136"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#add136"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

    let marker = new google.maps.Marker({
        position: coord,
        icon: '../img/marker.png',
        title: 'Grand Monument',
        map: map,
        optimized: false
    });

    let controlDiv = document.createElement('div');
    controlDiv.classList.add('textMap');
    controlDiv.innerHTML = '<p>Move your mouse on marker</p>';

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv);

    marker.addListener('mouseover', ()=> {
        let imageMarker = document.querySelector("img[src='../img/marker.png']");
        imageMarker.parentNode.classList.add('mapMarkerContainer');
        imageMarker.classList.add('mapMarker');
        setTimeout(()=>imageMarker.classList.add('mapMarkerScale'), 1000);
    });
    marker.addListener('mouseout', ()=> {
        let imageMarker = document.querySelector("img[src='../img/marker.png']");
        imageMarker.parentNode.classList.remove('mapMarkerContainer');
        imageMarker.classList.remove('mapMarker', 'mapMarkerScale');
    });

};

