import React from 'react';
import { useHistory } from 'react-router-dom';
import { doApiPost} from '../services/apiService';
import { Link } from "react-router-dom"
import "../css_comps/missions.css"
function CreatChannel(props) {

  let history = useHistory();
  let sendForm = (event) => {
    event.preventDefault();
    
    let bodyData = {
      ip: event.target.ip.value,
      port: event.target.port.value,
      type: event.target.type.value,
      mis_id: event.target.mis_id.value,
      
    }
   
    
    let url = "http://localhost:5000/channel"
    doApiPost(url, bodyData)
      .then(data => {
        // console.log("doApiPost", data);
        if (data.message) {
          console.log("data.message", data.message);
          alert(data.message);
        }
        else {
          console.log("data", data);
          history.push("/add-mission/");
        }

      })

  }

  return (
    <div className="container registr">
      <h1 className="mt-5 text-center">Create Mission</h1>
      <div className="col new">
        <form className="col-lg-6" onSubmit={sendForm}>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">ip:</label>
            </div>
            <div className="col-9">
              <input id="ip" type="text" className="form-control" placeholder="ip adderss" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">port:</label>
            </div>
            <div className="col-9">
              <input id="port" type="text" className="form-control" placeholder="Port" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">type:</label>
            </div>
            <div className="col-9">
              <input id="type" type="text" className="form-control" placeholder="type" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">mis_id:</label>
            </div>
            <div className="col-9">
              <input id="mis_id" type="text" className="form-control" placeholder="Mission id" />
            </div>
          </div>
         
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success mt-3 w-25">Add</button>
            <Link to={"/"} className="btn btn-info mt-3">show contacts</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatChannel