// import React, { Component } from 'react'

// class Contact extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<br></br>
// 			<p>Contacts</p>
// 			</div>
// 		)
// 	}
// }

// export default Contact

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 10,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, interviewNum, time, date, location, notes ) {
  id += 1;
  return { id, name, interviewNum, time, date, location, notes };
}

const rows = [
  createData('Cerner', 2, '3:45PM', '10/29', 'NKC', 'Bring MacBook'),
  createData('Saint Lukes', 1, '10:00AM', '11/03', 'Plaza', 'Dr. Jones refferal'),
  createData('Google Fiber', 0, '12:00PM', '10/30', 'Discord', 'Add contact for remote interview'),
  createData('Trilogy', 0, '2:00PM', '11/07','Overland Park', 'Phone Interview'),
  createData('Sprint', 1, '1:45PM', '11/10', 'Leawood', '2nd Floor, Suite #211'),
];

function Contact(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
			<CustomTableCell></CustomTableCell>
            <CustomTableCell>Company Name</CustomTableCell>
            <CustomTableCell numeric>Interview #</CustomTableCell>
            <CustomTableCell numeric>Time</CustomTableCell>
            <CustomTableCell numeric>Date</CustomTableCell>
            <CustomTableCell>Location</CustomTableCell>
			<CustomTableCell>Notes</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
				
              <TableRow className={classes.row} key={row.id}>
			  <CustomTableCell padding="checkbox"><Checkbox name="cBox" /></CustomTableCell>
				<CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
               <CustomTableCell numeric>{row.interviewNum}</CustomTableCell>
                <CustomTableCell numeric>{row.time}</CustomTableCell>
                <CustomTableCell numeric>{row.date}</CustomTableCell>
                <CustomTableCell>{row.location}</CustomTableCell>
				<CustomTableCell>{row.notes}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);