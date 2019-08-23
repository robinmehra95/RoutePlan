import React from 'react';
import './style.css';
import ClatexStationRow from '../ClatexStationRow';
import img3 from './../../img/icons_select_arrow@1x.svg';

const exampledata = [
    {a:1},{b:1},{c:1},{d:1},{e:1},
    {f:1},{g:1},{h:1},{i:1},{j:1},{k:1},
    {l:1},{m:1},{n:1},{o:1},{p:1},{q:1},
    {r:1},{s:1},{t:1},{u:1},{v:1},{w:1},
    {x:1},{y:1},{z:1}
  ]

class WithPagination extends React.Component {
  constructor(props) {
    super(props); 
    this.totalRecords = this.props.allStations ? this.props.allStations : exampledata;
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
