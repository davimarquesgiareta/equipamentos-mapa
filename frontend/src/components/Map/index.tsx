import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {

    return (
        <>
            <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={true} className='h-screen' >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[48.8566,2.3522]}>
                    <Popup>
                        alou
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}