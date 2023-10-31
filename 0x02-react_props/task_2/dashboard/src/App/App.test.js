import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe("App Component", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should contain the Notifications component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications />)).toBe(true);
  });

  it("should contain the Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should contain the Login component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should contain the Footer component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});