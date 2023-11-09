mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYW53YXIiLCJhIjoiY2toYjNoM3MxMWh3dzJzbzhmMTY5a2RtbSJ9.IQyvuRpUdjeczLOfrnAgGw';
         
/**
* Add the map to the page
*/
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.96, 40.75],
    zoom: 10.3,
});
 
const stores = 
{
    "type": "FeatureCollection",
    "features": [
{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.94913150396395, 40.714630416341656]
        },
        "properties": {
            "title":"Alligator Lounge",
            "address":"600 Metropolitan Ave, Brooklyn, NY",
            "description":"Cheap drinks, karaoke, and free pizza. What can beat that? This is by far my favorite neighborhood dive bar, and not just because it was featured in Nathan Fielder's <em>The Rehearsal</em>. The drinks are cheap, and each one comes with a free pizza ticket. Alligator lounge also boasts a myriad of weekly events, like trivia, bingo, and my personal favorite, karaoke.",
            "image":"<img src='images/Alligator Lounge.png' style='max-width:600px;max-height:400px'></img>"
        }
},
{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.96774057018354,40.80314472629668]
        },
        "properties": {
            "title":"Absolute Bagels",
            "address":"2788 Broadway, NY, NY",
            "description":"Every New Yorker has their favorite bagel spot. I stumbled upon this one by happy accident while doing the trek down the whole length of Manhattan. Nestled near Columbia's campus, this cash-only bagel shop is well-worth the wait. I recommend an everything bagel with garlic cream cheese, not toasted, and a cup of their thai iced tea.",
            "image":"<img src='images/Absolute Bagels.png' style='max-width:600px;max-height:400px'></img>"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.959272,40.744200]
        },
        "properties": {
            "title":"Gantry Plaza State Park",
            "address":"4-44 47th Rd, Queens, NY",
            "description":"A couple of months ago I set out on training for my first 5K. When I first started, I could barely run a mile. I attribute a lot of my progress due to my running route through this state park in Long Island City. It sits abut the East River, and its view of Manhattan's skyline makes this an ultra-popular spot to watch 4th of July Fireworks. But I recommend picnicking here on a nice day. It'll be a lot less crowded than Domino Park with the same views.",
            "image":"<img src='images/LIC.png' style='max-width:580px;max-height:400px;margin-top:30px'></img>"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.84419051700394,40.7576890896528]
        },
        "properties": {
            "title":"Citi Field",
            "address":"41 Seaver Wy, Queens, NY",
            "description":"Alright, confession, I only attend MLB games for the atmosphere. And there is no better place to take in the vibes of this fine, American sport than a Mets game at Citi Field, which won a USA Today award for 'Best Stadium Food in the US.' Fried chicken donuts, pizza bagels, and Shake Shack shakes are just a few of the options at the stadium. Plus, if you aren't feeling greasy food, Flushing is just one stop away.",
            "image":"<img src='images/Citi Field.png' style='max-width:600px;max-height:400px'></img>"
        }
    }

]
};
 
/**
* Assign a unique id to each store. You'll use this `id`
* later to associate each point on the map with a listing
* in the sidebar.
*/
stores.features.forEach((store, i) => {
    store.properties.id = i;
});
 
/**
* Wait until the map loads to make changes to the map.
*/
map.on('load', () => {
    map.addSource('stores', {
        'type': 'geojson',
        'data': stores
    });
/**
* Add all the things to the page:
* - The location listings on the side of the page
* - The markers onto the map
*/
    buildLocationList(stores);
    addMarkers();
});


/**
* Add a marker to the map for every store listing.
**/
function addMarkers() {
/* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
        /* Create a div element for the marker. */
        const el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`;
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker';
    
        /**
        * Create a marker using the div element
        * defined above and add it to the map.
        **/
        new mapboxgl.Marker(el, { offset: [0, -15] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        
        /**
        * Listen to the element and when it is clicked, do three things:
        * 1. Fly to the point
        * 2. Close all other popups and display popup for clicked store
        * 3. Highlight listing in sidebar (and remove highlight for all other listings)
        **/
        el.addEventListener('click', (e) => {
            /* Fly to the point */
            flyToStore(marker);
            /* Close all other popups and display popup for clicked store */
            // createPopUp(marker);
            /* Highlight listing in sidebar */
            const activeItem = document.getElementsByClassName('active');
            
            e.stopPropagation();

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
                `listing-${marker.properties.id}`
            );
            listing.classList.add('active');
            addIllustration(marker);
        });
    }
}


 
/**
* Add a listing for each store to the sidebar.
**/
function buildLocationList(stores) {
    for (const store of stores.features) {
        /* Add a new listing section to the sidebar. */
        const listings = document.getElementById('listings');
        const listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = `listing-${store.properties.id}`;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';
        
        /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${store.properties.id}`;
        link.innerHTML = `${store.properties.title}`;
        
        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${store.properties.address}`;
    
        /**
        * Listen to the element and when it is clicked, do four things:
        * 1. Update the `currentFeature` to the store associated with the clicked link
        * 2. Fly to the point
        * 3. Close all other popups and display popup for clicked store
        * 4. Highlight listing in sidebar (and remove highlight for all other listings)
        **/

        link.addEventListener('click', function () {

            for (const feature of stores.features) {
                
                if (this.id === `link-${feature.properties.id}`) {
                    flyToStore(feature);
                    // createPopUp(feature);
                    const activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                        this.parentNode.classList.add('active');

                    addIllustration(feature); 
                }
            }
        });
    }
}

/**
* Use Mapbox GL JS's `flyTo` to move the camera smoothly
* a given center point.
**/
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 14
});
}

/**
* Create a Mapbox GL JS `Popup`.
**/
function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
        const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(`
            <h4>${currentFeature.properties.title}</h4>
        `)
        .addTo(map);
    }

function addIllustration(currentFeature) {
    const images = document.getElementById('illustrations');
    if (images[0]) images[0].remove();
        const image = images
            .setHTML(`
                ${currentFeature.properties.image}
                <h2>${currentFeature.properties.title}</h2>
                <p style=
                    "text-align:left; 
                    margin-left:20px;
                    margin-right:20px;
                    font-size:18px">
                        ${currentFeature.properties.description}
                </p>`
            )
            .addTo(illustrations);
}

