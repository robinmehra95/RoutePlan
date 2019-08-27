import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import Stations from "../../stations";
import ClatexStationRow from '../ClatexStationRow';
import img3 from './../../img/icons_select_arrow@1x.svg';

class MapStations extends React.Component {
  constructor(props) {
    super(props);
    let slicedData = Stations.results.slice(0, 4);
    this.state = {
      filterOpen: false,
      dataToBeRender: slicedData,
      activePage: 1,
      totalPages: Math.ceil(Stations.results.length / 4),
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
      },
      filteredStations: Stations.results
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
      this.removeFilter()
  }

  removeFilter = () => {
    let slicedData = Stations.results.slice(0, 4);
    this.setState({
      filteredStations: Stations.results,
      totalPages: Math.ceil(Stations.results.length / 4),
      dataToBeRender: slicedData,
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

  checkFilterSelected = (filter, id) => {
    return filter.find(item => item == id )
  }

  selectFilter = (type,val) => {
    const filterListClone = this.state.filterList
      if(type == 1){
        if(!this.checkFilterSelected(filterListClone.routes,val)){
          filterListClone.routes.push(val)
        }   
        else{
          let routes = filterListClone.routes.filter(item => item !== val)
          filterListClone.routes = routes;
        }    
         
      }
      else if(type == 2){
        if(!this.checkFilterSelected(filterListClone.fuels,val)){
          filterListClone.fuels.push(val)
        }  
         else{
          let fuels = filterListClone.fuels.filter(item => item !== val)
          filterListClone.fuels = fuels;
        } 
      }
      else if(type == 3){
        if(!this.checkFilterSelected(filterListClone.amenities,val)){
          filterListClone.amenities.push(val)
        }  
        else{
          let amenities = filterListClone.amenities.filter(item => item !== val)
          filterListClone.amenities = amenities;
        } 
      }
      this.setState({
        filterList : filterListClone,
      })
      this.filterStatons()
  }

filterStatons = () => {
  let applied_filters = []
  let filterList = this.state.filterList;
  let filteredStations = []
  let stations = Stations.results;
  for (let f_type in filterList) {
        if (f_type == "routes" && filterList[f_type].length > 0) {
            for (let f_code of filterList[f_type])
            applied_filters.push("routeid_" + f_code)
        }
        if (f_type == "amenities" && filterList[f_type].length > 0) {
            for (let f_code of filterList[f_type])
            applied_filters.push("amenityid_" + f_code)
        }
        if (f_type == "fuels" && filterList[f_type].length > 0) {
            for (let f_code of filterList[f_type])
            applied_filters.push("fuelid_" + f_code)
        }
     }
    for (let station of stations) {
      let _fiters = station.filterIds.split(",")
      if (applied_filters.every(elem => _fiters.indexOf(elem) > -1) || applied_filters.length == 0) {
        filteredStations.push(station)
      }
    }
    let slicedData = filteredStations.slice(0, 4);
    this.setState({
      filteredStations: filteredStations,
      totalPages: Math.ceil(filteredStations.length / 4),
      dataToBeRender: slicedData,
      activePage: Math.ceil(filteredStations.length / 4) >= 1 ? 1 : 0
    })
}

paginationRight = (pageNum) => {
  let num = pageNum - 1;
  let slicedData = this.state.filteredStations.slice(num*4,num*4+4);
  this.setState({
     dataToBeRender: slicedData,
     activePage: pageNum
  })
}


paginationLeft = (pageNum) => {    
  let num = pageNum - 1;
  let slicedData = this.state.filteredStations.slice(num*4,num*4+4);
  this.setState({
     dataToBeRender: slicedData,
     activePage: pageNum
  })
}

  

  render() {
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
                        checked={!!this.checkFilterSelected(this.state.filterList.routes,item.id)} 
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
                        checked={!!this.checkFilterSelected(this.state.filterList.fuels,item.id)} 
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
                        checked={!!this.checkFilterSelected(this.state.filterList.amenities,item.id)} 
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
          <div className="station-wrap">
            {this.state.dataToBeRender.map(item => {
              return (
                <ClatexStationRow info={item} showSidemapComp={this.props.showSidemapComp}/>
              )
            })}
            <div className="cs-pagination">
                  <div className={`${this.state.activePage <= 1 && 'disable-btn'} left-arrow cursor-pointer`} onClick={() => this.paginationRight(this.state.activePage-1)}>
                    <img src={img3}/>
                  </div>
                  <div className="page-no-wrap">
                    Page  {this.state.activePage}  of {this.state.totalPages}
                  </div>
                  <div className={`${this.state.activePage >= this.state.totalPages && 'disable-btn'} right-arrow cursor-pointer`} onClick={() => this.paginationRight(this.state.activePage+1)}>
                    <img src={img3}/>
                  </div>
            </div>
          </div>
      </div>
      );
  }
}

export default MapStations;
