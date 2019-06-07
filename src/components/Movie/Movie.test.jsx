import React from "react";
import { shallow } from "enzyme";

import Movie from './Movie';
import MoreMenu from '../MoreMenu/MoreMenu';

const defaultProps = {
	movie: {}
}

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Movie {...setupProps} />);
};

describe("render", () => {
	test("renders component withour error and without menu", () => {
		const wrapper = setup();
		const component = wrapper.find('[data-test="movie"]');
		const menu = wrapper.find(MoreMenu);
		expect(component.length).toBe(1);
		expect(menu.length).toBe(0)
	});
	test("renders menu with passed props `menu`", () => {
		const wrapper = setup({ menu: true }).dive();
		const menu = wrapper.find(MoreMenu);
		expect(menu.length).toBe(1);
	});
});
