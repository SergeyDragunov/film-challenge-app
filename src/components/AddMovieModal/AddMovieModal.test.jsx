    
import React from "react";
import { withRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from "enzyme";

import { storeFactory } from '../../test/testUtils';
import AddMovieModal from "./AddMovieModal";
import Modal from '../Modal/Modal';

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	return mount(
		<Router>
			<Route render={props => 
				<AddMovieModal store={store} {...props} />
			} />
		</Router>
	);
};

describe('render', () => {
	let wrapper = setup();
	test('renders component without error', () => {
		const component = wrapper.find('form');
		expect(component.length).toBe(1);
	});
})