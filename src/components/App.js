import React, { Component } from "react";
import Footer from "./Footer";
import ImageDetail from "./ImageDetail";
import "../styles/App.css";

class App extends Component {
  // TODO: Fetch API data and store to Redux

  render() {
    return (
      <div className="App">
        {/* TODO: Create and import the Header component */}

        <div className="App-body">
          <div className="App-left">
            <h1>Image List</h1>

            {/* TODO: Pass image data to ImageList */}
          </div>

          <div className="App-right">
            <ImageDetail />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
