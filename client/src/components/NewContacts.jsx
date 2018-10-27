import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import CardIcon from './CardIcon';

const styles = theme => ({
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
    },
    title: {
        padding: '0 16px',
    },
    info: {
        padding: '0 16px',
        minHeight: 48,
    },

   info: {
        marginLeft: theme.spacing.unit,
    },
});

const NewContacts = ({ jobs, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={PeopleIcon} bgColor="#4caf50" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
            Contacts
            </Typography>
            <br></br>
            {jobs && jobs.map(job => (
                <div>
            {job.contactName && <Typography className={classes.info} variant="title" component="h2">
                {job.contactName}
            </Typography>}
            {job.companyName && <Typography variant="button" component="h2">
                {job.companyName}
            </Typography>}
            <Typography variant="button" component="h2">
                {job.phone}
            </Typography>
            < Divider />
            </div>
            ))}
        </Card>
    </div>
);

const enhance = compose(
    withStyles(styles),
);

export default enhance(NewContacts);