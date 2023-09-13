import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {

    const markers = [
        {
            geocode: [48.86, 2.3522],
            popup: "Pop up 1"
        },
        {
            geocode: [48.85, 2.3522],
            popup: "Pop up 2"
        },
        {
            geocode: [48.855, 2.34],
            popup: "Pop up 3"
        }
    ]

    return (
        <>
            <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={true} className='h-screen' >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                { markers.map(marker => (
                    <Marker position={marker.geocode}>
                        <Popup>
                            <h2>{marker.popup}</h2>
                        </Popup>
                    </Marker>
                )) }
            </MapContainer>
        </>
    )
}