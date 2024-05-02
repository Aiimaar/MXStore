import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ContactContent.css';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from '/images/marker-icon.png';

const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const ContactContent = () => {
    return (
        <div className="contact-container">
            <div className="section">
                <h2>Encuéntranos</h2>
                <MapContainer className="location-map" center={[28.100971, -15.436388]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[28.100971, -15.436388]} icon={customMarkerIcon}>
                        <Popup>
                            MXStore <br /> Motocross Shop
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="section">
                <h2>Contáctanos</h2>
                <p className="contact-info">mxstore@email_client.com</p>
                <p className="contact-info">+34 247920726</p>
            </div>
        </div>
    );
}

export default ContactContent;