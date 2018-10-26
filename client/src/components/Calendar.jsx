import React, { Component } from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

snackbar: {
	backgroundColor: theme.palette.secondary.main,
	width: 'flex',
	height: 75,
},
});

class Calendar extends Component {
	
	render() {
		const { classes } = this.props;
		return (
			<div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<SnackbarContent className={classes.snackbar} message='Resources' variant='h6' />
			</div>
		)
	}
}

export default withStyles(styles)(Calendar);