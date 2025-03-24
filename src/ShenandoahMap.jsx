import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ShenandoahMap = () => {
    // Center coordinates for Shenandoah National Park
    const position = [38.5, -78.4]; // Latitude, Longitude

    // Key points of interest
    const pointsOfInterest = [
        { name: "Skyline Drive - North Entrance", position: [38.8941, -78.1986], description: "Park entrance near Front Royal" },
        { name: "Dark Hollow Falls", position: [38.5238, -78.4329], description: "Popular 1.4-mile waterfall hike" },
        { name: "Stony Man Summit", position: [38.5977, -78.3755], description: "Panoramic vista, easy 1.6-mile hike" },
        { name: "Big Meadows", position: [38.5195, -78.4373], description: "Visitor center, lodge, and camping" },
        { name: "Bearfence Mountain", position: [38.4439, -78.4690], description: "Rock scramble with 360-degree views" },
    ];

    return (
        <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-300">
            <MapContainer
                center={position}
                zoom={9}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {pointsOfInterest.map((poi, index) => (
                    <Marker key={index} position={poi.position}>
                        <Popup>
                            <div>
                                <h3 className="font-bold">{poi.name}</h3>
                                <p>{poi.description}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default ShenandoahMap;