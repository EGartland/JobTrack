import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Jobs, JobForm, Calendar, Interviews, Contact, LinksList, NavList } from '.';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9,
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		height: '100vh',
		overflow: 'auto',
		marginTop: theme.spacing.unit * 3,
	},
	chartContainer: {
		marginLeft: -22,
	},
	tableContainer: {
		height: 320,
	},
	h5: {
		marginBottom: theme.spacing.unit * 2,
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing.unit * 2,
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 25}px 0 ${theme.spacing.unit * 25}px`,
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
	},
	button: {
		margin: theme.spacing.unit,
	  },
});

class Dashboard extends React.Component {
	state = {
		open: true,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	logout = () => {
		this.props.logout()
	}

	render() {
		const { classes } = this.props;

		return (
			<Router>
				<div>
					<CssBaseline />
					<div className={classes.root}>
						<AppBar position="absolute"
							className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
						>
							<Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
								<IconButton color="inherit" aria-label="Open drawer"
									onClick={this.handleDrawerOpen}
									className={classNames(
										classes.menuButton,
										this.state.open && classes.menuButtonHidden,
									)}
								>
									<MenuIcon />
								</IconButton>
								<Typography component="h1" variant="display1" color="inherit" noWrap className={classes.title} >
									Job Track
              					</Typography>
									
									<Button onClick={this.logout} variant="contained" color="secondary" className={classes.button}>Sign Out</Button>
								
							</Toolbar>
						</AppBar>
						<Drawer
							variant="permanent"
							classes={{
								paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
							}}
							open={this.state.open}
						>
							<div className={classes.toolbarIcon}>
								{this.state.open && <IconButton onClick={this.handleDrawerClose}>
									<ChevronLeftIcon />
								</IconButton>}
							</div>
							<Divider />
							{this.props.user.niceName && 
								<div>
									<List>
										<NavList />
									</List>
									<Divider />
									<List>
										<LinksList uid={this.props.user._id} />
									</List>
								</div>
								}
						</Drawer>
						<main className={classes.content}>
							<Route exact path='/' component={() => <Home uid={this.props.user._id} />} />
							<Route exact path='/job/:id' component={JobForm} />
							<Route exact path='/addJob' component={JobForm} />
							<Route exact path='/jobs' component={() => <Jobs uid={this.props.user._id} />} />
							<Route exact path='/calendar' component={Calendar} />
							<Route exact path='/contacts' component={() => <Contact uid={this.props.user._id} />} />
							<Route exact path='/interviews' component={() => <Interviews uid={this.props.user._id} />} />
						</main>
					</div>
				</div>
			</Router>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);


/* <div className={classes.heroUnit}>
	<div className={classes.heroContent}>
		<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
			Job Track
		</Typography>
		<Typography variant="h6" align="center" color="textSecondary" paragraph>
			Something short and leading about the collection below—its contents, the creator, etc.
			Make it short and sweet, but not too short so folks don&apos;t simply skip over it
			entirely.
		</Typography>
		<div className={classes.heroButtons}>
			<Grid container spacing={16} justify="center">
				<Grid item>
					<Button variant="contained" color="primary">
						Create Account
					</Button>
				</Grid>
				<Grid item>
					<Button variant="outlined" color="primary">
						Login to Existing Account
					</Button>
				</Grid>
			</Grid>
		</div>
	</div>
</div> */