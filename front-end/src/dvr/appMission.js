import React, { useEffect, useState } from 'react';
import { doApiGet } from '../services/apiService';
import MissionChannel from './misssionChannel';

function AppMission(props) {
  let [missions_ar, setMissionArr] = useState([])
  

  useEffect(() => {
    
    missions()

  }, [])

  const missions = ()=>{
    let url = "http://localhost:5000/missions"
    doApiGet(url).then(data => {
        console.log("data.missions",data.missions);
        setMissionArr(data.missions)
        
      })

  }

  return (
    
    <div className="container-fluid ">
     
      <div className="container">
        <h2 className="text-center mt-4 display-4 text-info">Missions list in the system</h2>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>mission #</th>
              <th>Name</th>
              <th>Chanel</th>
              <th>ip</th>
              <th>port</th>
              <th>type</th>
              <th>duration</th>
              {/* <th>Edit/delete</th> */}
            </tr>
          </thead>
          <tbody>
            {missions_ar.map((item, i) => {
              // console.log("item.channels",item.channels);
              return (
                <MissionChannel item={item} key={item.id}/>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AppMission
