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
import API from '../utils/API'

/**
 * Need to get the users information here if they supplied links to resume, portfolio, github and linked in.
 * If they did we should add link tags, show this list and populate the links
 */

class LinksList extends Component {
	state = {
		user: {}
	}

	async componentDidMount() {
		let user = await API.getUser(this.props.uid)
		if(user._id) {
			this.setState({ user: user })
		}
	}

	render() {
		return (
			<div>
				<ListSubheader inset>Quick Find</ListSubheader>
				{this.state.user.resume && 
					<ListItem button component='a' target='_blank' href={`http://${this.state.user.resume}`}>
						<ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon>
						<ListItemText primary="Resume" />
					</ListItem>
				}
				{this.state.user.portfolio &&
					<ListItem button component='a' target='_blank' href={`http://${this.state.user.portfolio}`}>
						<ListItemIcon>
							<AttachmentIcon />
						</ListItemIcon>
						<ListItemText primary="Portfolio" />
					</ListItem>
				}
				{this.state.user.linkedIn &&
				<ListItem button component='a' target='_blank' href={`http://${this.state.user.linkedIn}`}>
						<ListItemIcon>
							<ShareIcon />
						</ListItemIcon>
						<ListItemText primary="LinkedIn" />
					</ListItem>
				}
				{this.state.user.gitHub &&
					<ListItem button component='a' target='_blank' href={`http://${this.state.user.gitHub}`}>
						<ListItemIcon>
							<FolderIcon />
						</ListItemIcon>
						<ListItemText primary="GitHub" />
					</ListItem>
				}
			</div>
		)
	}
}

export default LinksList