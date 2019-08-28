import React from 'react';
import './App.css';
import Compo1 from './components/Comp1';

function App() {

    window.config= {
        "general": {
            "mapBgImage": "/content/dam/caltex/sg/b2b/Image_002.jpg",
            "overlayImage": "/content/dam/caltex/sg/b2b/oil-tanker-highres@2x.png",
            "heading": "Journey Planner",
            "description": "At Caltex, we know that managing a fleet can be challenging.The journey planner manifesto lorem ipsum dolor sit amet,",
            "ctaLabel": "Begin your journey"
        },
        "createRoute": {
            "yourRouteHeading": "Your Routes",
            "createRouteHeading": "Create your fleet route",
            "createAnotherRouteHeading": "Create another fleet route",
            "editRouteHeading": "Edit Route",
            "noRouteImage": "/content/dam/caltex/sg/b2b/lubs-bottle@2x.png",
            "startPointLabel": "Start Point",
            "endPointLabel": "End Point",
            "routeDetailHeading": "Your fleet route details",
            "fleetRouteDetail": "In an average {duration} , {vehicle} vehicles in my fleet take this route for {time} times.",
            "addRouteButtonLabel": "Add route",
            "seeRouteButtonLabel": "See my routes"
        },
        "displayRoute": {
            "singleRouteLabel": "Displaying 1 route",
            "multipleRouteLabel": "Displaying {count} routes",
            "editRouteLabel": "Add/Edit Route",
            "resetLabel": "Start Over",
            "journeyOverviewHeading": "Journey Overview",
            "vehicleLabel": "Vehicles",
            "routesLabel": "Routes",
            "stationLabel": "Caltex Stations",
            "singleRouteJourneyDesc": "{vehicle} of my vehicles take this return route from {start} to {end}, 1 times daily. With a total of {station} Caltex Stations at my service.",
            "multipleRouteJourneyDesc": "{vehicle} of my vehicles take these {route} routes with a total of {station} Caltex Stations at my service.",
            "listStationCtaLabel": "See full list of stations",
            "listStationCtaLink": "/content/caltex/sg/en/business---home",
            "dailyFleetHeading": "Total Daily Fleet Mileage",
            "dailyFleetDesc": "<ul className='fleet-mileage-list'>\r\n<li>A Caltex station every 100km on average.</li>\r\n<li>A 24-hour Caltex service station every 100 km.</li>\r\n</ul>\r\n",
            "printLabel": "Print",
            "downloadLabel": "Download Journey Overview",
            "shareLabel": "Share"
        }
    }



  return (
    <div className="App">

      <Compo1 />
    </div>
  );
}

export default App;
