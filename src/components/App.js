import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import ImageDetail from "./ImageDetail";
import "../styles/App.css";
import { getImages, setSelectedImage, clearSelectedImage } from "../redux/actions";
import ImageList from "./ImageList";
import Header from "./Header";

class App extends Component {
  // TODO: Fetch API data and store to Redux
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <div className="App">
        {/* TODO: Create and import the Header component */}
        <Header />

        <div className="App-body">
          <div className="App-left">
            <h1>Image List</h1>

            {/* TODO: Pass image data to ImageList */}
            <ImageList images={this.props.images} onSelect={this.props.setSelectedImage} />
          </div>

          <div className="App-right">
            <ImageDetail selectedImage={this.props.selectedImage} onClear={this.props.clearSelectedImage} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
  selectedImage: state.selectedImage,
});

const mapActionToProps = (dispatch) => ({
  getImages: () => dispatch(getImages()),
  setSelectedImage: (image) => dispatch(setSelectedImage(image)),
  clearSelectedImage: () => dispatch(clearSelectedImage()),
});

export default connect(mapStateToProps, mapActionToProps)(App);
