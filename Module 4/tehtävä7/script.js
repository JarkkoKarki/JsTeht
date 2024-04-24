'use strict';
const query = document.getElementById('query');
const form = document.getElementById('form');
const stat = document.getElementById('stat');
const time = document.getElementById('time');

const school = {lat: 60.223853, lon: 24.758629};

// show the map
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const search = query.value;
    const address = await fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${search}&size=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': 'c79925e362af4dfa8ff6ff187251cc82', // Replace with your actual key
        },
    }).then(async (response) => {
        const data = await response.json();
        console.log(data);
        // Assuming you want to call getRoute here with the obtained address
        // Replace school with the obtained address if needed
        getRoute(school, data.features[0].geometry.coordinates);
    });
});

// fetch route with origin and target
function getRoute(origin, target) {
    // GraphQL query
    const GQLQuery = `{
        plan(
            from: {lat: ${origin.lat}, lon: ${origin.lon}}
            to: {lat: ${target[1]}, lon: ${target[0]}}
            numItineraries: 1
        ) {
            itineraries {
                legs {
                    startTime
                    endTime
                    mode
                    duration
                    distance
                    legGeometry {
                        points
                    }
                }
            }
        }
    }`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': 'c79925e362af4dfa8ff6ff187251cc82', // Replace with your actual key
        },
        body: JSON.stringify({query: GQLQuery}),
    };

    fetch(apiAddress, fetchOptions).then(function (response) {
        return response.json();
    }).then(function (result) {
        console.log(result.data.plan.itineraries[0].legs);
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = googleEncodedRoute[i].legGeometry.points;
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.lat, origin.lon], [target[1], target[0]]]);
    }).catch(function (e) {
        console.error(e.message);
    });
}
