import React, { useState } from "react";
import "./createpost.css";

function Createpost() {
  const [body, setBody] = useState();
  const [image, setImage] = useState();

//post data to clodnery
  const postDetails = ()=>{
    console.log(body,image)
    const data = new FormData()
    data.append("file", image)
    data.append("uploade_preset", "insta_clone")
    data.append("cloud_name", "dw9dbhgbq")


  }
  var loadFile = function (event) {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div className="createpost">
      <div className="post-header">
        <h4>Create New Post</h4>
        <button id="post-btn" onClick={()=>{postDetails()}}>Share</button>
      </div>

      <div className="main-div">
        <img
          id="output"
          alt="selected"
          src="data:image/png;base64,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"
        />
        <input type="file" accept="image/*" onChange={(event)=>{loadFile(event); setImage(event.target.files[0])}} />
      </div>

      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="data:image/jpeg;base64,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"
              alt="user profile pic"
            />
          </div>
          <h5>Aditya Sharma</h5>
        </div>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="Write caption"
        ></textarea>
      </div>
    </div>
  );
}

export default Createpost;
