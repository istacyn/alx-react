import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the correct HTML when type and value props are passed", () => {
    const wrapper = shallow(<NotificationItem />);
    
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it("should render the correct HTML when an HTML prop is passed", () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>"});
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});