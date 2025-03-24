import React, { useState } from 'react';
import shenandoahImage from './images/shenandoah.jpg';
import beach from './images/miami.jpg';
import ridge from './images/blueridge.jpg';
import springImage from './images/spring.jpg';
import summerImage from './images/summer.jpg';
import fallImage from './images/fall.jpg';
import winterImage from './images/winter.jpg';
import ShenandoahMap from './ShenandoahMap';
import spring1 from './images/spring1.jpg';
import spring2 from './images/spring2.jpg';
import spring3 from './images/spring3.jpg';
import summer1 from './images/summer1.jpg';
import summer2 from './images/summer2.jpg';
import summer3 from './images/summer3.jpg';
import fall1 from './images/fall1.jpg';
import fall2 from './images/fall2.jpg';
import fall3 from './images/fall3.jpg';
import winter1 from './images/winter1.jpg';
import winter2 from './images/winter2.jpg';
import winter3 from './images/winter3.jpg';


const ShenandoahBrochure = () => {
    const [activePage, setActivePage] = useState(0);
    const [season, setSeason] = useState('fall');
    const [language, setLanguage] = useState('english');
    const translations = {
        english: {
            title: "Bridging Cultures",
            languageOptions: "Language Options",
            culturalConnections: "Cultural Connections",
            culturalText: "Experience how the mountains connect with your heritage. The Appalachian region has welcomed diverse communities throughout history.",
            communitySpotlight: "Community Spotlight",
            testimonial: "Our South Florida student group was amazed by the mountain ecosystem - so different from what we're used to seeing every day!",
            testimonialSource: "- Miami-Dade College Environmental Club",
            culturalExchange: "Cultural Exchange Ideas",
            exchangeIdeas: [
                "Caribbean-inspired picnic at an overlook",
                "Photography comparing ocean and mountain horizons",
                "Nature  reflecting on different ecosystems",
                "Share family traditions in a new landscape"
            ]
        },
        spanish: {
            title: "Conectando Culturas",
            languageOptions: "Opciones de Idioma",
            culturalConnections: "Conexiones Culturales",
            culturalText: "Experimente cómo las montañas se conectan con su patrimonio. La región de los Apalaches ha recibido a diversas comunidades a lo largo de la historia.",
            communitySpotlight: "Destacado de la Comunidad",
            testimonial: "¡Nuestro grupo de estudiantes del sur de Florida quedó asombrado por el ecosistema montañoso, tan diferente de lo que estamos acostumbrados a ver todos los días!",
            testimonialSource: "- Club Ambiental de Miami-Dade College",
            culturalExchange: "Ideas de Intercambio Cultural",
            exchangeIdeas: [
                "Picnic de inspiración caribeña en un mirador",
                "Fotografía comparando horizontes oceánicos y montañosos",
                "Diarios de naturaleza que reflejan diferentes ecosistemas",
                "Compartir tradiciones familiares en un nuevo paisaje"
            ]
        },
        creole: {
            title: "Konekte Kilti yo",
            languageOptions: "Opsyon Lang",
            culturalConnections: "Koneksyon Kiltirèl",
            culturalText: "Fè eksperyans kijan mòn yo konekte ak eritaj ou. Rejyon Apalach la te akeyi divès kominote pandan tout listwa.",
            communitySpotlight: "Limyè sou Kominote a",
            testimonial: "Gwoup etidyan nou yo ki soti nan Sid Florid te etone pa ekosistèm mòn yo - tèlman diferan de sa nou abitye wè chak jou!",
            testimonialSource: "- Klub Anviwònman Kolèj Miami-Dade",
            culturalExchange: "Lide pou Echanj Kiltirèl",
            exchangeIdeas: [
                "Pik-nik enspire pa Karayib sou yon belvédère",
                "Fotografi ki konpare orizons oseyan ak mòn",
                "Jounal lanati ki reflete diferan ekosistèm",
                "Pataje tradisyon fanmi nan yon nouvo peyizaj"
            ]
        }
    };

    // Get the current translations based on selected language
    const t = translations[language];
    const [showGallery, setShowGallery] = useState(false);

    // Sample photo data organized by seasons
    const seasonalPhotos = {

            spring: [
                { src: spring1, alt: "Spring wildflowers in Shenandoah", caption: "Wildflowers bloom along trails in spring" },
                { src: spring2, alt: "Spring waterfall", caption: "Waterfalls reach peak flow in spring months" },
                { src: spring3, alt: "Spring hiking trail", caption: "Trails come alive with greenery in spring" },
            ],
            // And so on for other seasons...
        summer: [
            { src: summer1, alt: "Summer vista", caption: "Clear summer views from mountain overlooks" },
            { src: summer2, alt: "Summer forest", caption: "Lush green forest canopy in summer" },
            { src: summer3, alt: "Summer wildlife", caption: "Wildlife is highly active during summer months" },
        ],
        fall: [
            { src: fall1, alt: "Fall foliage along Skyline Drive", caption: "The famous fall colors of Shenandoah" },
            { src: fall2, alt: "Fall mountain vista", caption: "Fall transforms the Blue Ridge into a tapestry of color" },
            { src: fall3, alt: "Fall hiking trail", caption: "Hiking through colorful autumn landscapes" },
        ],
        winter: [
            { src: winter1, alt: "Snow-covered mountain view", caption: "Peaceful winter scenes in Shenandoah" },
            { src: winter2, alt: "Frozen waterfall", caption: "Waterfalls transform into ice sculptures in winter" },
            { src: winter3, alt: "Winter forest trail", caption: "Quiet winter trails offer solitude" },
        ]
    };

    // Use placeholder images if your actual images aren't available yet
    const placeholderImage = (season, index) =>
        `https://via.placeholder.com/400x300/87CEEB/333333?text=${season.charAt(0).toUpperCase() + season.slice(1)}+Photo+${index}`;

    // Pages in the brochure
    const pages = [
        { id: 0, name: "Cover" },
        { id: 1, name: "Why Shenandoah?" },
        { id: 2, name: "Seasons" },
        { id: 3, name: "Park Map" },
        { id: 4, name: "First-Timer Guide" },
        { id: 5, name: "Cultural Bridge" },
        { id: 6, name: "Plan Your Trip" },
        { id: 7, name: "Conservation" }
    ];

    // Seasonal images
    const seasonalImages = {
        spring: springImage,
        summer: summerImage,
        fall: fallImage,
        winter: winterImage
    };

    // Beginner trails
    const beginnerTrails = [
        { name: "Dark Hollow Falls", length: "1.4 miles", difficulty: "Easy", highlight: "70-foot waterfall" },
        { name: "Stony Man", length: "1.6 miles", difficulty: "Easy", highlight: "Panoramic vista" },
        { name: "Limberlost Trail", length: "1.3 miles", difficulty: "Easy/Accessible", highlight: "Forest boardwalk" }
    ];

    // Navigation between pages
    const goToNextPage = () => {
        if (activePage < pages.length - 1) {
            setActivePage(activePage + 1);
        }
    };

    const goToPrevPage = () => {
        if (activePage > 0) {
            setActivePage(activePage - 1);
        }
    };

    // Render the current page content
    const renderPageContent = () => {
        switch(activePage) {
            case 0:
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                        <div className="text-4xl font-bold mb-2 text-blue-800">FROM COAST TO CREST</div>
                        <div className="text-3xl font-bold mb-6">Your Mountain Adventure Awaits</div>
                        <div
                            className="relative w-full h-64 mb-6 rounded-lg overflow-hidden"
                            style={{
                                backgroundImage: `url(${shenandoahImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-2xl font-bold">SHENANDOAH NATIONAL PARK</div>
                            </div>
                        </div>
                        <div className="text-xl italic mb-6">Just a flight away: Experience the magic of mountains</div>
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transform transition hover:scale-105"
                            onClick={() => setActivePage(1)}
                        >
                            Begin Your Journey
                        </button>
                        <div className="mt-4 text-sm text-gray-600">
                            A special guide for South Florida explorers By Bibek Yadav
                        </div>
                    </div>
                );

            case 1:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Shenandoah for South Floridians?</h2>

                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">From Sea Level to Sky High</h3>
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-center">
                                    <div className="text-sm">South Florida</div>
                                    <div className="font-bold">0-30 ft</div>
                                    <div className="text-sm">above sea level</div>
                                </div>
                                <div className="grow mx-4 h-2 bg-gradient-to-r from-blue-300 to-blue-700 rounded-full"></div>
                                <div className="text-center">
                                    <div className="text-sm">Shenandoah Peaks</div>
                                    <div className="font-bold">4,000+ ft</div>
                                    <div className="text-sm">above sea level</div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-2">Beach to Blue Ridge Slider</h3>
                            <div className="border border-gray-300 rounded-lg p-2 bg-gray-50">
                                <div className="relative h-40 bg-gradient-to-r from-yellow-200 to-blue-500 rounded overflow-hidden">
                                    <div className="absolute inset-y-0 left-0 w-1/2 bg-yellow-100 flex items-center justify-center"
                                         style={{
                                             backgroundImage: `url(${beach})`,
                                             backgroundSize: "cover",
                                             backgroundPosition: "center"
                                         }}>
                                        <span className="text-xl font-bold">Miami Beach</span>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-700 flex items-center justify-center"

                                         style={{
                                             backgroundImage: `url(${ridge})`,
                                             backgroundSize: "cover",
                                             backgroundPosition: " left"
                                         }}>

                                        >
                                        <span className="text-xl font-bold text-white">Blue Ridge Mountains</span>
                                    </div>
                                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-500"></div>
                                </div>
                                <div className="text-center text-sm mt-2 text-gray-600">landscapes</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">Travel Made Easy</h3>
                            <div className="flex items-center mb-2">
                                <div className="w-1/4 text-center">
                                    <div className="font-bold">MIA/FLL</div>
                                    <div className="text-sm">South Florida</div>
                                </div>
                                <div className="w-2/4 h-0.5 bg-blue-500 relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs">~2.5 hour flight</div>
                                </div>
                                <div className="w-1/4 text-center">
                                    <div className="font-bold">IAD/DCA</div>
                                    <div className="text-sm">Washington D.C.</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/4"></div>
                                <div className="w-2/4 h-0.5 bg-green-500 relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs">~2 hour drive</div>
                                </div>
                                <div className="w-1/4 text-center">
                                    <div className="font-bold">SNP</div>
                                    <div className="text-sm">Shenandoah</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Seasonal Splendor</h2>

                        <div className="mb-6">
                            <div className="flex mb-2">
                                {Object.keys(seasonalImages).map(s => (
                                    <button
                                        key={s}
                                        className={`grow py-2 px-1 border ${season === s ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-300'} mx-1 rounded text-sm capitalize`}
                                        onClick={() => setSeason(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            <div className="border border-gray-300 rounded-lg overflow-hidden">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div>
                                            <div className="text-xl font-bold mb-2 capitalize">
                                            </div>
                                            <img
                                                src={seasonalImages[season]}
                                                alt={`${season} in Shenandoah`}
                                                className="w-full h-auto rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">Temperature Comparison</h3>
                                <div className="flex justify-between items-center text-sm">
                                    <div>Miami</div>
                                    <div className="grow mx-2 h-2 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full"></div>
                                    <div>75-90°F</div>
                                </div>
                                <div className="flex justify-between items-center text-sm mt-2">
                                    <div>Shenandoah</div>
                                    <div className="grow mx-2 h-2 bg-gradient-to-r from-blue-300 to-yellow-400 rounded-full"></div>
                                    <div>45-75°F</div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">Best Time to Visit</h3>
                                <div className="text-sm">
                                    <div className="flex justify-between mb-1">
                                        <span>Spring</span>
                                        <span>Wildflowers</span>
                                    </div>
                                    <div className="flex justify-between mb-1">
                                        <span>Summer</span>
                                        <span>Waterfalls</span>
                                    </div>
                                    <div className="flex justify-between mb-1">
                                        <span>Fall</span>
                                        <span>Foliage</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Winter</span>
                                        <span>Snow views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 3:
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
                                <ShenandoahMap/>

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

            case 4:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">First-Timer's Guide</h2>

                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">Beginner-Friendly Trails</h3>

                            {beginnerTrails.map((trail, index) => (
                                <div key={index} className="mb-3 bg-white p-3 rounded-lg shadow-sm">
                                    <div className="font-bold">{trail.name}</div>
                                    <div className="flex justify-between text-sm">
                                        <span>{trail.length}</span>
                                        <span>|</span>
                                        <span>{trail.difficulty}</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">Highlight: {trail.highlight}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">Packing Essentials</h3>
                                <ul className="text-sm list-disc list-inside">
                                <li>Hiking shoes</li>
                                    <li>Water bottle</li>
                                    <li>Layers of clothing</li>
                                    <li>Park map</li>
                                    <li>Sunscreen</li>
                                    <li>Camera</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">Wildlife Safety</h3>
                                <ul className="text-sm">
                                    <li>• Keep distance from animals</li>
                                    <li>• Never feed wildlife</li>
                                    <li>• Store food properly</li>
                                    <li>• Stay on marked trails</li>
                                    <li>• Observe from afar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">{t.title}</h2>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-2">{t.languageOptions}</h3>
                            <div className="flex mb-4">
                                {['english', 'spanish', 'creole'].map(lang => (
                                    <button
                                        key={lang}
                                        className={`grow py-2 px-1 border ${language === lang ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-300'} mx-1 rounded text-sm capitalize`}
                                        onClick={() => setLanguage(lang)}
                                    >
                                        {lang === 'english' ? 'English' : lang === 'spanish' ? 'Español' : 'Kreyòl'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">{t.culturalConnections}</h3>
                            <div className="text-sm mb-3">
                                {t.culturalText}
                            </div>
                            <div className="border border-gray-300 bg-white p-3 rounded-lg">
                                <div className="font-bold mb-1">{t.communitySpotlight}</div>
                                <div className="text-sm">
                                    "{t.testimonial}"
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{t.testimonialSource}</div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">{t.culturalExchange}</h3>
                            <ul className="text-sm list-disc list-inside">
                                {t.exchangeIdeas.map((idea, index) => (
                                    <li key={index}>{idea}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Plan Your Trip</h2>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">Accommodations</h3>
                                <ul className="text-sm list-disc list-inside">
                                    <li>Park Lodges</li>
                                    <li>Campgrounds</li>
                                    <li>Cabins</li>
                                    <li>Nearby Hotels</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-3 rounded-lg">
                                <h3 className="font-bold mb-2">When to Book</h3>
                                <table className="w-full text-sm">
                                    <tbody>
                                    <tr>
                                        <td>Spring/Fall</td>
                                        <td className="text-right">3+ months ahead</td>
                                    </tr>
                                    <tr>
                                        <td>Summer</td>
                                        <td className="text-right">4-6 months ahead</td>
                                    </tr>
                                    <tr>
                                    <td>Winter</td>
                                        <td className="text-right">1-2 months ahead</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">Budget Estimator</h3>
                            <table className="w-full text-sm">
                                <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1">Flights (MIA to IAD)</td>
                                    <td className="text-right">$250-400 per person</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1">Car Rental (4 days)</td>
                                    <td className="text-right">$200-300</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1">Park Entrance</td>
                                    <td className="text-right">$30 per vehicle</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="py-1">Accommodation</td>
                                    <td className="text-right">$25-250 per night</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Food & Extras</td>
                                    <td className="text-right">$40-80 per day/person</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-purple-50 p-3 rounded-lg">
                            <h3 className="font-bold mb-2">Accessibility</h3>
                            <div className="text-sm">
                                Shenandoah offers accessible facilities and trails like Limberlost Trail. Visitor centers, some overlooks, and picnic areas are wheelchair accessible.
                            </div>
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Conservation Connection</h2>

                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">Leave No Trace</h3>
                            <ul className="text-sm list-disc list-inside">
                                <li>Plan ahead and prepare</li>
                                <li>Travel and camp on durable surfaces</li>
                                <li>Dispose of waste properly</li>
                                <li>Leave what you find</li>
                                <li>Minimize campfire impacts</li>
                                <li>Respect wildlife</li>
                                <li>Be considerate of other visitors</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-2">Different Ecosystems</h3>
                            <div className="flex items-start mb-2">
                                <div className="w-1/2 text-center p-2">
                                    <div className="font-bold mb-1">South Florida</div>
                                    <ul className="text-sm text-left list-disc list-inside">
                                        <li>Coastal</li>
                                        <li>Everglades</li>
                                        <li>Subtropical</li>
                                        <li>Wetlands</li>
                                    </ul>
                                </div>
                                <div className="w-1/2 text-center p-2">
                                    <div className="font-bold mb-1">Shenandoah</div>
                                    <ul className="text-sm text-left list-disc list-inside">
                                        <li>Deciduous Forest</li>
                                        <li>Mountain</li>
                                        <li>Temperate</li>
                                        <li>Highlands</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border border-green-500 p-4 rounded-lg bg-white">
                            <h3 className="font-bold text-lg mb-2 text-green-700">Take the Pledge</h3>
                            <div className="text-sm mb-4">
                                I pledge to protect Shenandoah National Park by following Leave No Trace principles,
                                respecting wildlife, and preserving the natural beauty for future generations.
                            </div>
                            <button
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                                onClick={() => setShowGallery(!showGallery)}
                            >
                                {showGallery ? "Hide Gallery" : "View Gallery of Photos"}
                            </button>
                        </div>

                        {/* Photo Gallery */}
                        {showGallery && (
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-300">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-lg">Seasonal Photo Gallery</h3>
                                    <button
                                        className="text-sm text-gray-600 hover:text-gray-800"
                                        onClick={() => setShowGallery(false)}
                                    >
                                        Close Gallery
                                    </button>
                                </div>

                                {/* Seasons */}
                                {Object.keys(seasonalPhotos).map(season => (
                                    <div key={season} className="mb-8">
                                        <h4 className="font-bold text-md capitalize mb-3 text-blue-700 border-b pb-1">
                                            {season} in Shenandoah
                                        </h4>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {seasonalPhotos[season].map((photo, index) => (
                                                <div key={index} className="rounded overflow-hidden shadow-md">
                                                    <img
                                                        src={photo.src || placeholderImage(season, index + 1)}
                                                        alt={photo.alt}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                    <div className="p-2 bg-white">
                                                        <p className="text-sm text-gray-700">{photo.caption}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="text-center mt-4">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                        onClick={() => setShowGallery(false)}
                                    >
                                        Close Gallery
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div
            className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white">
            {/* Page content */}
            <div className="flex-grow overflow-y-auto">
                {renderPageContent()}
            </div>

            {/* Navigation */}
            <div className="bg-gray-100 p-3 border-t border-gray-300">
                <div className="flex justify-between items-center">
                    <button
                        onClick={goToPrevPage}
                        disabled={activePage === 0}
                        className={`px-4 py-2 rounded ${activePage === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
                    >
                        Previous
                    </button>

                    <div className="text-sm text-gray-600">
                        Page {activePage + 1} of {pages.length}
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={activePage === pages.length - 1}
                        className={`px-4 py-2 rounded ${activePage === pages.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
                    >
                        Next
                    </button>
                </div>

                <div className="flex justify-center mt-3">
                    {pages.map(page => (
                        <button
                            key={page.id}
                            onClick={() => setActivePage(page.id)}
                            className={`w-3 h-3 mx-1 rounded-full ${activePage === page.id ? 'bg-blue-600' : 'bg-gray-300'}`}
                            aria-label={`Go to page ${page.name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShenandoahBrochure;