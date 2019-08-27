import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';
import CaltexStationComp from './../CaltexStationComp';
import Stations from "../../stations";
import WithPagination from '../WithPagination';



import img3 from './../../img/icons_select_arrow@1x.svg';

class MapStations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOpen: false,
      filterToShow: {
        routes : [
          {name: 'San Isidro II to Sumapang', value: 'val1',id: '1001'},
          {name: 'San Isidro II to Kapitangan', value: 'val1',id: '1002'},
          {name: 'San Isidro II to Bulihan', value: 'val1',id: '1003'},
          
        ],
        amenities : [
          {name: 'Gold with Techron', value: 'val1',id: '1001'},
          {name: 'Silver with Techron', value: 'val1',id: '1002'},
          {name: 'Diesel with Techron D', value: 'val1',id: '1003'},
          {name: 'Kerosene', value: 'val1',id: '1004'},
          {name: 'Lubricants (Delo & Havoline)', value: 'val1',id: '9045'},
        ],
        fuels: [          
          {name: '5-Star Refreshrooms', value: 'val1',id: '1000'},
          {name: 'Workshop', value: 'val1',id: '1110'},
          {name: 'Convenience Store', value: 'val1',id: '1001'},
          {name: 'Air / Water Stations', value: 'val1',id: '1002'},
          {name: 'vaAccept StarCardslue1', value: 'val1',id: '1001'},
          {name: 'Accept Credit Cards', value: 'val1',id: '1003'},
          {name: 'Toilet', value: 'val1',id: '1004'},
          {name: 'Café Plus', value: 'val1',id: '1005'},
          {name: 'Jolliebee', value: 'val1',id: '1006'},
          {name: 'Disabled Friendly Toilet', value: 'val1',id: '1007'},
          {name: 'ATM', value: 'val1',id: '1008'},
          {name: 'Raptors Store', value: 'val1',id: '1009'},
          {name: 'Lube Bay', value: 'val1',id: '1010'},
          {name: 'KFC', value: 'val1',id: '1001'}
        ],
      },
      filterList: {
        routes : [],
        amenities : [],
        fuels: [],
      }
    }
  }

  clearFilters = () => {   
      this.setState({
        filterList: {
          routes : [],
          amenities : [],
          fuels: [],  
        }
      })
  }

  openfilter = (num) => {
    if(this.state.filterOpen === num){
      this.setState({
        filterOpen: false
      })
    }
    else{
      this.setState({
        filterOpen: num
      })
    }    
  }

  checkFilterSelected = (filter, val) => {
    return filter.find(item => item.id == val )
  }

  selectFilter = (type,val) => {
    const filterListClone = this.state.filterList
      if(type == 1){
        if(!this.checkFilterSelected(filterListClone.routes,val)){
          filterListClone.routes.push(val)
        }   
        else{
          filterListClone.routes.filter(item => item == val)
        }    
         
      }
      else if(type == 2){
        if(!this.checkFilterSelected(filterListClone.fuels,val)){
          filterListClone.fuels.push(val)
        }  
         else{
          filterListClone.fuels.filter(item => item == val)
        } 

      }
      else if(type == 3){
        if(!this.checkFilterSelected(filterListClone.amenities,val)){
          filterListClone.amenities.push(val)
        }  
        else{
          filterListClone.amenities.filter(item => item == val)
        } 
      }
    this.setState({
      filterList : filterListClone
    })
  }


filtered = () => {    
  const stations2 = {
    "results": [
      {
        "id": "1000",
        "name": "Caltex Alexandra",
        "street": "360 Alexandra Rd., Singapore 159951",
        "city": "",
        "state": "",
        "country": "Singapore",
        "postalCode": "159951",
        "notes": "",
        "phoneNumber": "+65 6475 3380",
        "latitude": "1.29039",
        "longitude": "103.807",
        "operatingHours": "",
        "fuelId": "1000,1001,1002,1003",
        "amenitiesId": ['1002','1003','1005','9045'],
        "distance": 0,
        "filterIds": "fuelid_1000,fuelid_1001,fuelid_1002,fuelid_1003,amenityid_1002,amenityid_1003,amenityid_1005,amenityid_9045",
        "amenitiesName": [
          "Car Wash",
          "5-Star Refreshrooms",
          "Convenience Store",
          "AXS Station"
        ],
        "fuelsName": [
          "Platinum 98 with Techron",
          "Premium 95 with Techron",
          "Regular 92 with Techron",
          "Caltex Diesel with Techron D"
        ]
      },
      {
        "id": "1003",
        "name": "Caltex Balestier",
        "street": "542 Balestier Road, Singapore 329864",
        "city": "Singapore",
        "state": "",
        "country": "Singapore",
        "postalCode": "329864",
        "notes": "",
        "phoneNumber": "+65 6255 2873",
        "latitude": "1.32677",
        "longitude": "103.84507",
        "operatingHours": "",
        "fuelId": "1000,1001,1002,1003",
        "amenitiesId": ['1002','1003','1005','9009','9036','9045'],
        "distance": 0,
        "filterIds": "fuelid_1000,fuelid_1001,fuelid_1002,fuelid_1003,amenityid_1002,amenityid_1003,amenityid_1005,amenityid_9009,amenityid_9036,amenityid_9045",
        "amenitiesName": [
          "Car Wash",
          "5-Star Refreshrooms",
          "Convenience Store",
          "OCBC ATM",
          "Singpost POPStation",
          "AXS Station"
        ],
        "fuelsName": [
          "Platinum 98 with Techron",
          "Premium 95 with Techron",
          "Regular 92 with Techron",
          "Caltex Diesel with Techron D"
        ]
      },
      {
        "id": "1004",
        "name": "Caltex Beach Road",
        "street": "4870 Beach Road, Singapore 199586",
        "city": "Singapore",
        "state": "",
        "country": "Singapore",
        "postalCode": "199586",
        "notes": "",
        "phoneNumber": "+65 6392 5609",
        "latitude": "1.30373",
        "longitude": "103.86583",
        "operatingHours": "",
        "fuelId": "1000,1001,1002,1003",
        "amenitiesId": ['1001','1002','1003','1005','9009','9036','9045'],
        "distance": 0,
        "filterIds": "fuelid_1000,fuelid_1001,fuelid_1002,fuelid_1003,amenityid_1001,amenityid_1002,amenityid_1003,amenityid_1005,amenityid_9009,amenityid_9036,amenityid_9045",
        "amenitiesName": [
          "Tyre Bay",
          "Car Wash",
          "5-Star Refreshrooms",
          "Convenience Store",
          "OCBC ATM",
          "Singpost POPStation",
          "AXS Station"
        ],
        "fuelsName": [
          "Platinum 98 with Techron",
          "Premium 95 with Techron",
          "Regular 92 with Techron",
          "Caltex Diesel with Techron D"
        ]
      },
      {
        "id": "1005",
        "name": "Caltex Binjai Park",
        "street": "836 Dunearn Road, Singapore 589457",
        "city": "",
        "state": "",
        "country": "Singapore",
        "postalCode": "589457",
        "notes": "",
        "phoneNumber": "+65 6466 2407",
        "latitude": "1.33525",
        "longitude": "103.7868",
        "operatingHours": "",
        "fuelId": "1000,1001,1002,1003",
        "amenitiesId": ['1003','1005','9045'],
        "distance": 0,
        "filterIds": "fuelid_1000,fuelid_1001,fuelid_1002,fuelid_1003,amenityid_1003,amenityid_1005,amenityid_9045",
        "amenitiesName": [
          "5-Star Refreshrooms",
          "Convenience Store",
          "AXS Station"
        ],
        "fuelsName": [
          "Platinum 98 with Techron",
          "Premium 95 with Techron",
          "Regular 92 with Techron",
          "Caltex Diesel with Techron D"
        ]
      },
      {
        "id": "1007",
        "name": "Caltex Changi",
        "street": "78 Changi Road, Singapore 419714",
        "city": "",
        "state": "",
        "country": "Singapore",
        "postalCode": "419714",
        "notes": "",
        "phoneNumber": "+65 6344 6595",
        "latitude": "1.3163",
        "longitude": "103.90013",
        "operatingHours": "",
        "fuelId": "1000,1001,1002,1003",
        "amenitiesId": ['1002','1003','1005','9037','9045'],
        "distance": 0,
        "filterIds": "fuelid_1000,fuelid_1001,fuelid_1002,fuelid_1003,amenityid_1002,amenityid_1003,amenityid_1005,amenityid_9037,amenityid_9045",
        "amenitiesName": [
          "Car Wash",
          "5-Star Refreshrooms",
          "Convenience Store",
          "Budget Car Rental",
          "AXS Station"
        ],
        "fuelsName": [
          "Platinum 98 with Techron",
          "Premium 95 with Techron",
          "Regular 92 with Techron",
          "Caltex Diesel with Techron D"
        ]
      },
    ]
  };

    const amenitiesFiltered =  stations2.results.filter( item => {
      return this.state.filterList.amenities.every( filterAppied => {
        if (item.amenitiesId.includes(filterAppied)) {
          return item.amenitiesId.includes(filterAppied)
        }
      });
    });

    const fuelsFiltered =  stations2.results.filter( item => {
      return this.state.filterList.fuels.every( filterAppied => {      
        if (item.fuelId.includes(filterAppied)) {
          return item.fuelId.includes(filterAppied);
        }
      });
    });


    Array.prototype.unique = function() {
        var a = this.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }    
        return a;
    };

    return amenitiesFiltered.concat(fuelsFiltered).unique(); 
  }

  

  render() {
    console.log('*********** Stations.results',this.filtered(),'this.state',this.state)
    return (
      <div className="mapstations-comp-wrap">
        <div className="cs-top-row">
            <a className="close-btn cursor-pointer" onClick={() => this.props.onClose()}><img src={img1}/></a>
        </div>
        <div className="comp-heading">
          Displaying 4 of 45 Stations along your 3 routes
        </div>
        <div className="drop-down-list">
          <ul>
            <li className="filter-station">Filter stations by</li>
            <li className="routes " >
              <div className="filter-box cursor-pointer" onClick={() => this.openfilter(1)}>
                Routes <span>  • {this.state.filterList.routes.length}</span> <span className="arrow-icon"><img src={img3}/></span>
              </div>

              <div className={`filter-wrap filter-colp-box ${this.state.filterOpen == 1 ? 'show' : ''}`}>
                <ul>

                  {this.state.filterToShow.routes.map(item => {
                    return ( 
                      <li className="form-field">
                        <input type="checkbox" id="checkbox-1" 
                        checked={this.checkFilterSelected(this.state.filterList.routes,item.value)} 
                        onClick={() => this.selectFilter(1,item.id)} value={item.value}/>
                        <span></span>
                        <label for="checkbox-2" className="filter-item">
                          {item.name}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li className="fuels " >
              <div className="filter-box cursor-pointer" onClick={() => this.openfilter(2)}>
                Fuels available <span> •  {this.state.filterList.fuels.length}</span> <span className="arrow-icon"><img src={img3}/></span>
              </div>

              <div className={`filter-wrap filter-colp-box ${this.state.filterOpen == 2 ? 'show' : ''}`}>
                <ul>
                {this.state.filterToShow.fuels.map(item => {
                    return ( 
                      <li className="form-field">
                        <input type="checkbox" id="checkbox-1" 
                        checked={this.checkFilterSelected(this.state.filterList.fuels,item.value)} 
                        onClick={() => this.selectFilter(2,item.id)} value={item.value}/>
                        <span></span>
                        <label for="checkbox-1" className="filter-item">
                          {item.name}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li className="amenties " >
              <div className="filter-box cursor-pointer" onClick={() => this.openfilter(3)}> amenities 
              <span>  • {this.state.filterList.amenities.length}</span><span className="arrow-icon"><img src={img3}/></span></div>
              <div className={`filter-wrap filter-colp-box ${this.state.filterOpen == 3 ? 'show' : ''}`}>
                <ul>
                {this.state.filterToShow.amenities.map(item => {
                    return ( 
                      <li className="form-field">
                        <input type="checkbox" id="checkbox-1"
                        checked={this.checkFilterSelected(this.state.filterList.amenities,item.value)} 
                        onClick={() => this.selectFilter(3,item.id)} value={item.value}/>
                        <span></span>
                        <label for="checkbox-2" className="filter-item">
                          {item.name}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
            <li>
              <p className="cursor-pointer" onClick={() => this.clearFilters()}>
                Clear All 
              </p>
            </li>
          </ul>
        </div>
        <WithPagination allStations={Stations.results} showSidemapComp={this.props.showSidemapComp}/>
      </div>
      );
  }
}

export default MapStations;
