import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add'
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom'

const NavList = () => (
	<div>
		<Link to='/' style={{ textDecoration: 'none' }}>
			<ListItem button  >
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
		</Link>
		<Link to='addJob' style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>
					<AddIcon />
				</ListItemIcon>
				<ListItemText primary="Add a Job" />
			</ListItem>
		</Link>
		<Link to='/jobs' style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>
					<MenuIcon />
				</ListItemIcon>
				<ListItemText primary="Applications" />
			</ListItem>
		</Link>
		<Link to='/interviews' style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>
					<ChatIcon />
				</ListItemIcon>
				<ListItemText primary="Interviews" />
			</ListItem>
		</Link>
		<Link to='/contacts' style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Contacts" />
			</ListItem>
		</Link>
		<Link to='/calendar' style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>
					<CalendarTodayIcon />
				</ListItemIcon>
				<ListItemText primary="Calendar" />
			</ListItem>
		</Link>
	</div>
);

export default NavList
