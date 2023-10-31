import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import "./App.css";

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />

      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;