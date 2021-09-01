import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { doApiGet } from '../services/apiService';

function AppMission(props) {
  let [missions_ar, setMissionArr] = useState([])
  let [channels_ar, setChannelsArr] = useState([])

  useEffect(() => {
    
    missions()

  }, [])

  const missions = ()=>{
    let url = "http://localhost:5000/missions"
    doApiGet(url).
      then(data => {
        console.log("data.missions",data.missions);
        setMissionArr(data.missions)
        
      })

  }

  const createChannel =(item)=>{
    for (let index = 0; index < item.channels.length; index++) {
      
    }

  }



  return (
    <div className="container-fluid ">
      {/* <div id="id_dark" className="dark container-fluid center">
        <DarkBox setDarkState={setDarkState} item={singleItem} setContactsArr={setContactsArr} />
      </div> */}
      <div className="container">
        <h2 className="text-center mt-4 display-4 text-info">Missions list in the system</h2>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Chanel</th>
              <th>ip</th>
              <th>port</th>
              <th>type</th>
              <th>duration</th>
              <th>Edit/delete</th>
            </tr>
          </thead>
          <tbody>
            {missions_ar.map((item, i) => {
              console.log("item.channels",item.channels);
              return (
                // <tr key={item.id}  >
                //   <td className="align-middle">{i + 1}</td>
                //   <td className="align-middle">{item.name}</td>
                //   {createChannel(item)}
                //   {/* {item.channels && <td className="align-middle">{item.channels? item.channels.id:" "}</td>} */}
                //   {/* <td className="align-middle">{item.channels? item.channels[i].id:" "}</td>
                //   <td className="align-middle">{item.channels? item.channels[i].ip:" "}</td>
                //   <td className="align-middle">{item.channels? item.channels[i].port:" "}</td>
                //   <td className="align-middle">{item.channels? item.channels[i].type:" "}</td> */}
                  
                //   {/* {item.channels && item.channels.map(ch =>{
                //     return(
                //       <tr>

                //         <td key={ch.id} className="align-middle">{ch.id}</td>
                //         <td key={ch.id} className="align-middle">{ch.ip}</td>
                //         <td key={ch.id} className="align-middle">{ch.port}</td>
                //         <td key={ch.id} className="align-middle">{ch.type}</td>
                //       </tr>
                //     )
                //   })} */}
              

                //   {/* <td className="align-middle">{item.channels.port}</td>
                //   <td className="align-middle">{item.channels.type}</td> */}
                //   <td className="align-middle">{item.duration}</td>
                //   {/* <td className="align-middle">{item.phone}</td> */}
                //   <td className="align-middle">
                    
                //   </td>
                // </tr>
                <MissionChannel item={item}/>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default AppMission
