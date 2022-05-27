import React from "react";
import { shallow } from "enzyme";
import Sandbox from "./sandbox";

describe("Sandbox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Sandbox />);
    expect(wrapper).toMatchSnapshot();
  });
});
