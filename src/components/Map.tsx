import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';


function Map({start, stops, end}: MapProps) {
    
    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const initMap = async () =>{
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary("maps");

            const { AdvancedMarkerElement, PinElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: -1.93132,
                lng: 30.15276
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: "MAP_ID"
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const routesLibrary = await loader.importLibrary('routes');

            let directionService = new routesLibrary.DirectionsService();
            let directionRenderer = new routesLibrary.DirectionsRenderer({
                map: map,
            });

            const waypts: google.maps.DirectionsWaypoint[] = [];
            const wayptsMarkers: google.maps.marker.AdvancedMarkerElement[] = []

            for (let i = 0; i < stops.length; i++) {
            
                waypts.push({
                    location: stops[i],
                    stopover: true,
                });

              }

            if('geolocation' in navigator) {
                // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                    const { latitude, longitude } = coords;

                    const glyphImg = document.createElement('img');
                    glyphImg.src = '/car.svg';
                    glyphImg.className = 'h-6 w-6 dark:invert';

                    const marker = new AdvancedMarkerElement({
                        map: map,
                        position:  { lat: latitude, lng: longitude },
                        title: "Driver",
                        content: new PinElement({
                            glyph: glyphImg,
                            scale: 1
                        }).element
                    });

                    const contentString =
                    '<div id="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Driver position</h1>' +
                    "</div>";

                    const infoWindow = new google.maps.InfoWindow({
                        ariaLabel: 'Driver position',
                        content: contentString
                    });


                    marker.addListener("click", ()=> {
                        infoWindow.open({
                            anchor: marker,
                            map,
                        });
                    });

                    infoWindow.open({
                        anchor: marker,
                        map,
                    });

                })
            }


            directionService.route({
                destination: end,
                origin: start,
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: waypts,
            }).then((response) => {
                directionRenderer.setDirections(response);

                const directions = directionRenderer.getDirections()

                const legs = directions?.routes[0].legs;

                for (let i = 0; i < legs!.length - 1; i++){

                    const wayptMarker = new AdvancedMarkerElement({
                        map: map,
                        position: stops[i],
                        title: "Way point " + i,
                    });

                    const contentString =
                    '<div id="content">' +
                    '<h1 id="firstHeading" class="text-l">Step info</h1>' +
                    `<p>Distance: ${legs![i].distance?.text}</p>`+
                    `<p>Duration: ${legs![i].duration?.text}</p>`+
                    "</div>";

                    const infoWindow = new google.maps.InfoWindow({
                        ariaLabel: 'Step info',
                        content: contentString
                    });

                    wayptMarker.addListener("click", ()=> {
                        infoWindow.open({
                            anchor: wayptMarker,
                            map,
                        });
                    });

                    infoWindow.open({
                        anchor: wayptMarker,
                        map,
                    });

                }
                
            });
        }

        initMap()
    }, []);

    return (
        <div style={{height: '100%', width: "100%"}} ref={mapRef} />
    );
}

export default Map;