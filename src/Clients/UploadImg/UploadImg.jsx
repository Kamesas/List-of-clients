import React, { Component } from "react";
import { storage } from "../../config/fbConfig";
import stl from "./style.module.sass";

class UploadImg extends Component {
  state = {
    image: this.props.url ? this.props.url : null,
    url: "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg",
    progress: 0,
    styleColor: "transparent"
  };

  uploadFile = e => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0], styleColor: "black" });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        // complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            //console.log(url);
            this.setState({ url });
            this.props.getUrl(url);
          });
      }
    );
  };

  render() {
    return (
      <div className={stl["uploadImg"]}>
        <img
          src={this.props.url ? this.props.url : this.state.url}
          alt="avatar"
        />

        <div className={stl["div-input-btn-progress"]}>
          <div className={stl["div-input-btn"]}>
            <input
              type="file"
              onChange={this.uploadFile}
              id={stl["custom-file-input"]}
              style={{ color: this.state.styleColor }}
            />
            <button onClick={this.handleUpload}>Upload</button>
          </div>
          <progress value={this.state.progress} max="100" />
          <div className={stl["div-progress-num"]}>{this.state.progress} %</div>
        </div>
      </div>
    );
  }
}

export default UploadImg;
