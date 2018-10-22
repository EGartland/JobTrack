import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShareIcon from '@material-ui/icons/Share';
import AttachmentIcon from '@material-ui/icons/Attachment';
// import { Link } from 'react-router-dom'

/**
 * Need to get the users information here if they supplied links to resume, portfolio, github and linked in.
 * If they did we should add link tags, show this list and populate the links
 */

class LinksList extends Component {
	render() {
		return (
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
		)
	}
}

export default LinksList