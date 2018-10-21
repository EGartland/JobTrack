import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddIcon from '@material-ui/icons/Add'
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShareIcon from '@material-ui/icons/Share';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button component='a' href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/addJob">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add a Job" />
    </ListItem>
    <ListItem button component="a" href="/jobs">
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="Applications" />
    </ListItem>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Interviews" />
    </ListItem>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Quick Find</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachmentIcon />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText primary="LinkedIn" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="GitHub" />
    </ListItem>
  </div>
);