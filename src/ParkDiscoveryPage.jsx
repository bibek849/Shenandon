import React from 'react';
import ShenandoahMap from './ShenandoahMap'; // Import your map component

const ParkDiscoveryPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Discover the Park</h2>

            <div className="mb-6">
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <h3 className="font-bold mb-2">Skyline Drive</h3>
                    <div className="text-sm mb-2">
                        105-mile scenic route with 75+ overlooks
                    </div>

                    {/* Replace this div with your ShenandoahMap component */}
                    <ShenandoahMap />

                    <div className="text-sm mt-2 text-gray-600">
                        Click on markers to explore key locations along Skyline Drive
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                        <h3 className="font-bold mb-2">Waterfalls</h3>
                        <ul className="text-sm list-disc list-inside">
                            <li>Dark Hollow Falls</li>
                            <li>South River Falls</li>
                            <li>Overall Run Falls</li>
                            <li>White Oak Canyon</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                        <h3 className="font-bold mb-2">Wildlife Spots</h3>
                        <ul className="text-sm list-disc list-inside">
                            <li>Black Bears</li>
                            <li>White-tailed Deer</li>
                            <li>Wild Turkeys</li>
                            <li>Songbirds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkDiscoveryPage;