import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../components/NavigationItems";
import NavigationItem from "../components/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should render three <NavigationItem />", () => {
    //const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should render <NavigationItem /> element with Order option", () => {
    expect(
      wrapper.contains(<NavigationItem link="/orders">Orders</NavigationItem>)
    ).toEqual(true);
  });
});
