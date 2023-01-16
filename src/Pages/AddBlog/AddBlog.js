import React from 'react';
import './AddBlog.css'

const AddBlog = () => {
    return (
        <div>
            <div className="add-blog">
      <img
        className="add-Img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="add-Form">
        <div className="add-FormGroup">
          <label htmlFor="fileInput">
            <i className="add-Icon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="add-Input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="add-FormGroup">
          <textarea
            className="add-Input add-Text"
            placeholder="Write Something..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="add-Submit" type="submit">
          Publish
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddBlog;