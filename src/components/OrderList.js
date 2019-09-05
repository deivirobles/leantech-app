import React, { Component, Fragment } from 'react'

export default class ProjectList extends Component {
  state =  { 
    items:[{
      date: "Monday 10th 2:28 PM",
      from: "Houston, TX, 33619",
      to: "Atlanta, GA, 30123",
      ammount: "$250.000",
      qt: "46"
    },{
      date: "Friday 17th 7:28 AM",
      from: "El Paso, TX, 33619",
      to: "Queens, NY, 87576",
      ammount: "$650.000",
      qt: "6"
    }
  ],
  text: ""
  }

  handlerChange = (event)=>{
    this.setState ({
      text: event.target.value,
    })
  }

  render(){
    const { items, text } = this.state;

    let filteredItems = [...items];
    if (text) {
      filteredItems = filteredItems.filter(item =>{
        return item.from.startsWith(text) || item.to.startsWith(text)
      })
    }

    return(
      <Fragment>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <input className="form-control form-control-lg" value={ text } onChange={this.handlerChange} type="text" placeholder="Search"/>
      </div>
      </div>
      <ul className="list-unstyled">
        {filteredItems.map((item, index)=>{
          return (
            <li className="itemList">
          <div className="row align-items-center">
            <div className="col-1 iconList">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="col">
              <div className="row align-items-center ordenItem">
                <div className="col-sm-2">
                  <p>{item.date}</p>
                </div>
                <div className="col-sm-4">
                  <div className="row align-items-center">
                    <div className="col-sm-2 iconOrderLocation">
                      <i className="fas fa-location-arrow"></i>
                    </div>
                    <div className="col-sm-10">
                      <p>{item.from}</p>
                      <p className="iconChevron"><i className="fas fa-chevron-down"></i></p>
                      <p>{item.to}}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 iconTruck">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="col-sm-2">
                  <p>{item.ammount}</p>
                </div>
                <div className="col-sm-2">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <p className="square align-middle">{item.qt}</p>
                    </div>
                    <div className="col-6 iconDots">
                      <a href="/">
                        <i className="fas fa-ellipsis-v"></i>
                      </a>													
                    </div>
                  </div>												
                </div>
              </div>
            </div>
          </div>
        </li>
          )
        })}
        
      </ul>
      </Fragment>
    )
  }
}
