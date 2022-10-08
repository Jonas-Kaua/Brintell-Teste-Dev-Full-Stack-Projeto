
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet'
import './Mapa.css';
import L from 'leaflet'
import { useRef } from 'react';

function Mapa(){

    var position: [number,number];
    var center: [number,number] = [-15.799, -47.861]; // começa em Brasília

    const animateRef = useRef(false);

    function SetViewOnClick(animateRef : any) {
        const map = useMapEvent('click', (e) => {
          map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
          })
        })
      
        return null
      }
      

    function randomNumberInRange(min: number, max: number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.random() * (max - min + 1) + min;
    }
    
    //ícones do mapa
    var greenIcon = L.icon({
        iconUrl: '/icon-green.png',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var blueIcon = L.icon({
        iconUrl: '/icon-blue.png',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var redIcon = L.icon({
        iconUrl: '/icon-red.png',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const listaIcon : Array<any> = [greenIcon , blueIcon, redIcon];
    
    const listaMarker : Array<any> = [];

    for (let i = 0; i<200; i++){

        position = [(randomNumberInRange(-16.04932239735477, -16.54932239735477)), (randomNumberInRange(-48.20021819527072,-48.41521819527072)) ]

        
        listaMarker.push( 
            <Marker position={position} icon={listaIcon[Math.floor(Math.random() * (3 - 0) + 0) ]}>
                
            </Marker>
        );

    }
    
    return(
        <div>
            <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listaMarker}
                <SetViewOnClick animateRef={animateRef} />
            </MapContainer>
        </div>
            
    );
}

export default Mapa;