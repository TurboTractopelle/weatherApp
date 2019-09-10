import { shallow } from "enzyme";
import MyComp from "./MyComp";
import React from "react";

describe("MyComp", () => {
	it("display the correct test", () => {
		const wrapper = shallow(<MyComp />);
		expect(wrapper.text()).toBe("It works!");
	});
});
