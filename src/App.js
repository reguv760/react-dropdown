import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  // better code to handle toggle statements
  // for current React and future versions
  drawToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawToggleClickHandler} />

        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: "64px" }}>
          <p>This is content area</p>
        </main>
      </div>
    );
  }
}

export default App;
