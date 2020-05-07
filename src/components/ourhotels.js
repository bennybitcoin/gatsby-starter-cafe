import React, { Component } from "react";
import { RoomContext } from '../pages/context';
import Loading from "./loading";
import Room from "./room";
import Title from "./title";
import { FaPlaneArrival, FaTrain, FaShuttleVan, FaBeer, FaCar, FaFileExcel } from "react-icons/fa";


export default class OurHotels extends Component {

  state = {
    hotels: [
      {
        icon: <FaPlaneArrival size='2x'/>,
        title: "Hotel 1",
        info: "Hotel 1 Info"
      },
      {
        icon: <FaTrain size='2x'/>,
        title: "Hotel 2",
        info:
          "Hotel 2 Info"
      },
      {
        icon: <FaCar size='2x'/>,
        title: "Hotel 3",
        info:
          "Hotel 3 Info"
      }
      
    ]
  };
  
  render() {
    const containerStyle = {
      position: 'relative',
      display: 'flex',
      margin: 'auto',
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    }
    const cardStyle = {
      paddingTop: '50px',
      paddingBottom: '50px',
      position: 'relative',
      display: 'flex',
      
      flexDirection: 'column',
      maxWidth: '360px',
      justifyContent: 'space-between'
    }
    const elementStyle = {
      display: 'flex',
      position: 'relative',
      flexDirection: 'row'
    }
    return (
      <section style={containerStyle}>
        
          {this.state.hotels.map((item, index) => {
            return (
              
              <div  style={cardStyle}>
                <div style={elementStyle}>
                  {/* <span>{item.icon}</span> */}
                  <svg width="222" height="222" viewBox="0 0 1024 1024">
                    {item.icon}
                  </svg>
                </div>
                  {/* <Icon services>{item.icon}</Icon> */}
                <div style={elementStyle}>
                  <h6>{item.title}</h6>
                </div>
                <div style={elementStyle}>
                  <p>{item.info}</p>
                </div>
              </div>
                

            );
          })}
        
      </section>
    );
  }
}