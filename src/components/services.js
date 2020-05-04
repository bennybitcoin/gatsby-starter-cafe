import React, { Component } from "react";
import Title from "./title";
import { FaPlaneArrival, FaTrain, FaShuttleVan, FaBeer, FaCar, FaFileExcel } from "react-icons/fa";


export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaPlaneArrival size='2x'/>,
        title: "By Plane",
        info: "Free cocktails on demand. Tasteful choices"
      },
      {
        icon: <FaTrain size='2x'/>,
        title: "By Train",
        info:
          "Together with our experts everyday we have hiking through Zanka Mountain"
      },
      {
        icon: <FaCar size='2x'/>,
        title: "By Automobile",
        info:
          "Airport to Hotel or Hotel to Airport. Any time free shuttle service"
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
        
          {this.state.services.map((item, index) => {
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