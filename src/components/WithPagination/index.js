import React from 'react';
import './style.css';
import ClatexStationRow from '../ClatexStationRow';
import img3 from './../../img/icons_select_arrow@1x.svg';


class WithPagination extends React.Component {
  constructor(props) {
    super(props); 
    this.totalRecords = this.props.allStations 
    this.totalPages = Math.ceil(this.totalRecords.length / 4); 
    let slicedData = this.totalRecords.slice(0, 4);
    this.state = {
      dataToBeRender: slicedData,
      activePage: 1
    }
  }


  paginationRight = (pageNum) => {
     let num = pageNum - 1;
     let slicedData = this.totalRecords.slice(num*4,num*4+4);
     this.setState({
        dataToBeRender: slicedData,
        activePage: pageNum
     })
  }


  paginationLeft = (pageNum) => {    
     let num = pageNum - 1;
     let slicedData = this.totalRecords.slice(num*4,num*4+4);
     this.setState({
        dataToBeRender: slicedData,
        activePage: pageNum
     })
  }


  render() {
    return (
        <div className="station-wrap">
        {this.state.dataToBeRender.map(item => {
          return (
            <ClatexStationRow info={item}/>
          )
        })}
        <div className="cs-pagination">
              <div className={`${this.state.activePage <= 1 && 'disable-btn'} left-arrow cursor-pointer`} onClick={() => this.paginationRight(this.state.activePage-1)}>
                <img src={img3}/>
              </div>
              <div className="page-no-wrap">
                Page  {this.state.activePage}  of {this.totalPages}
              </div>
              <div className={`${this.state.activePage >= this.totalPages && 'disable-btn'} right-arrow cursor-pointer`} onClick={() => this.paginationRight(this.state.activePage+1)}>
                <img src={img3}/>
              </div>
        </div>
      </div>
      );
  }
}

export default WithPagination;
