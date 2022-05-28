import React from "react";
import { shallow } from "enzyme";
import NewTaskForm from "./new-task-form";

describe("NewTaskForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewTaskForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
