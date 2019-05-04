import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../components/NavigationItems";
import NavigationItem from "../components/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  it("should render three <NavigationItem />", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
