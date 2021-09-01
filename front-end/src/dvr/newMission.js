import React from 'react';
import { useHistory } from 'react-router-dom';
import { doApiPost} from '../services/apiService';
import { Link } from "react-router-dom"
import "../css_comps/missions.css"
function NewMission(props) {

  let history = useHistory();
  let sendForm = (event) => {
    event.preventDefault();
    // let phoneInput = event.target.id_phone;
    // if (phoneInput.value.length === 10 && phoneInput.value[0] === "0") {
    //   phoneInput = phoneInput.value.substring(1);
    // }
    let bodyData = {
      name: event.target.mission_name.value,
      duration: event.target.duration.value,
    }
   
    
    let url = "http://localhost:5000/mission"
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
              <label className="float-left">name: </label>
            </div>
            <div className="col-9">
              <input id="mission_name" type="text" className="form-control" placeholder="Mission name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <label className="float-left">Duration:</label>
            </div>
            <div className="col-9">
              <input id="duration" type="text" className="form-control" placeholder="Duration" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success mt-3 w-25">Add</button>
            <Link to={"/"} className="btn btn-info mt-3">show missions</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMission