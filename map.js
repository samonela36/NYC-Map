// credit for base code: https://docs.mapbox.com/help/tutorials/building-a-store-locator/

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
            "coordinates":  [-73.94073553418781,40.7491748409441]
        },
        "properties": {
            "title":"929",
            "address":"42-45 27th St, Queens, NY",
            "description":"929 is a small bar tucked behind a kitchen in Hunter's Point. All their drinks are named after Canto- and Mando-pop songs, with a wall of vinyl records on proud display at the back of the space. Their service is always excellent and you can tell they have put a lot of thought into curating their cocktail menu. My favorite drink is 'Not the Melon You Know,' but I recommend 'The Most Familiar Stranger' if you want to try something really unique.",
            "image":"<img src='images/929.png' style='max-width:600px;max-height:400px'></img>"
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
            "coordinates":  [-73.98287665026983,40.69176611567547]
        },
        "properties": {
            "title":"Alamo Drafthouse",
            "address":"445 Albee Square W 4th floor, Brooklyn, NY",
            "description":"I know 'dine-in movie theaters' can be hit or miss. I can see why some people find the constant shadows of waiters running in and out of rows distracting. I do love Alamo Drafthouse though. They have three locations-- Downtown BK, FiDi, and Staten Island. In addition to their extensive (and expensive) food and drink menu, Alamo often screens smaller, independent films, or re-run old favorites. They also host plenty of interesting events for movie-lovers. A few months ago I watched <em>Armageddon Time</em>, and Jeremy Strong was in attendance for a Q&A after the screening. Greta Gerwig even paid a surprise visit to this Alamo location on the opening night of <em>Barbie.</em> As a Season Pass holder at Alamo, I spend plenty of time in their screening rooms. They always have something playing for casual movie-goers and cinephiles alike.",
            "image":"<img src='images/alamo.png' style='max-width:600px;max-height:400px'></img>"
        }
    },
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
            "coordinates":  [-73.84419051700394,40.7576890896528]
        },
        "properties": {
            "title":"Citi Field",
            "address":"41 Seaver Wy, Queens, NY",
            "description":"Alright, confession, I only attend MLB games for the atmosphere. And there is no better place to take in the vibes of this fine, American sport than a Mets game at Citi Field, which won a USA Today award for 'Best Stadium Food in the US.' Fried chicken donuts, pizza bagels, and Shake Shack shakes are just a few of the options at the stadium. Plus, if you aren't feeling greasy food, Flushing is just one stop away.",
            "image":"<img src='images/Citi Field.png' style='max-width:600px;max-height:400px'></img>"
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
            "coordinates":  [-73.94462657301465, 40.7176186522976]
        },
        "properties": {
            "title":"Land to Sea",
            "address":"402 Graham Ave, Brooklyn, NY",
            "description":"This Asian-American woman-owned cafe in Williamsburg embodies community in a cozy way. Not only do they have excellent seasonal drinks, but they also offer a variety of fresh Chinese pastries. Try their ham & cheese bolo bao. In the evenings, Land to Sea recently began converting into a wine bar. Their backroom (illustrated above) plays host to many types of community events, from jazz nights to artist markets.",
            "image":"<img src='images/land to sea.png' style='max-width:600px;max-height:400px'></img>"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.99807813068914, 40.71621715664297]
        },
        "properties": {
            "title":"Mei Lai Wah",
            "address":"62 Bayard St, New York, NY",
            "description":"You'll almost always have to wait in a line at this Chinatown bakery. And for good reason. At under $3.00, their pineapple pork buns are a steal. Pro tip, a lot of people don't know there's a second kiosk to order by credit card inside the store.",
            "image":"<img src='images/mei lai wah.png' style='max-width:600px;max-height:400px'></img>"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":  [-73.95199745918113,40.71414083344967]
        },
        "properties": {
            "title":"Metropolitan-Lorimer MTA Stop",
            "address":"452 Union Ave, Brooklyn, NY",
            "description":"I promise this subway stop is not in my top 10 places to hang out in the city. But, when paying homage to the Big Apple, I have to include the MTA somehow. The subway keeps the city moving and it's one of few places in New York where having more money than those around you doesn't mean much of anything. My regular routines rely heavily on the G line. It is the only train line that doesn't go into Manhattan, and it is also one of the least reliable trains. Nevertheless, I take it from my apartment in Bed-Stuy west to go to Downtown Brooklyn for errands, or I take it east to my boyfriend's apartment in Queens. I end up in this particular subway station often because it's where I get off to visit my friends in Williamsburg, or it's where I transfer to the L to get into Manhattan. \n I've noticed that this station has some of the most talented buskers I've ever seen. In particular, there are a few classical music groups that play here often. One of my favorite musicians, poorly illustrated above, is Hemir Saucedo (@thecellolatte on Instagram), a stunning cellist who makes me regret choosing the violin. \n Speaking of the subway, I've created a game for myself where I try to optimize all of my subway trips down to the exact car that I enter. For instance, when taking the L to the East Village, I know that I have to be in the very last car so that I get off right by the 3rd Ave stop's only exit. Or, when waiting for the G in Long Island City, I have figured out the exact spot I must stand on the subway platform to get into the ideal car, which is important because the G doesn't extend the full length of the platform. You might be thinking, 'Sam, there's no way that saves you any significant amount of time.' And to that, I say I simply do not care and enjoy making my little optimizations. Plus, saving a few seconds might not matter when taking one train, but it can turn into saving several minutes when transferring.",
            "image":"<img src='images/subway.png' style='max-width:600px;max-height:400px'></img>"
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
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: stores
    });

    stores.features.forEach((store,i) => {
        store.properties.id = i;
    });

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
            addDescription(marker);
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
                    addDescription(feature);
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
// function createPopUp(currentFeature) {
//     const popUps = document.getElementsByClassName('mapboxgl-popup');
//     if (popUps[0]) popUps[0].remove();
//         const popup = new mapboxgl.Popup({ closeOnClick: false })
//         .setLngLat(currentFeature.geometry.coordinates)
//         .setHTML(`
//             <h4>${currentFeature.properties.title}</h4>
//             <p>${currentFeature.properties.description}</p>
//         `)
//         .addTo(map);
//     }

function addIllustration(currentFeature) {
    const images = document.getElementById('illustrations');
    if (images[0]) images[0].remove();
        const image = images
            .setHTML(`
                ${currentFeature.properties.image}
                <p style='text-align: left;'>${currentFeature.properties.description}</p>`
            )
            .addTo(illustrations);
}
