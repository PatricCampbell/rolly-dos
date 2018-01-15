import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { shallow } from "enzyme";

it('renders without crashing', () => {
  shallow(<Header />);
});