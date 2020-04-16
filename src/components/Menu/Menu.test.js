import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu";

describe("Menu", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu />);
  });

  it("renders MenuElements", () => {
    // here is just tip how you can console log what you render
    console.log(wrapper.debug());
    expect(wrapper.find("MenuElements").exists()).toBeTruthy();
  });

  it("has length of 1", () => {
    expect(wrapper.find("MenuElements")).toHaveLength(3);
  });
});