import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from './header';
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders the header component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toEqual(true);
});
