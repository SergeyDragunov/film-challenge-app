import React from 'react';
import Grid from "@material-ui/core/Grid";

import Modal from '../Modal/Modal';
import Logo from '../Logo/Logo';

export default () => {
	return (
		<Modal>
			<Grid container justify="center">
				<Logo />
			</Grid>
		</Modal>
	)
}