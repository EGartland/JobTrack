import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import CardIcon from './CardIcon';


const styles = theme => ({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    titleLink: { textDecoration: 'none', color: 'inherit' },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
    info: {
        padding: '0 16px',
        // minHeight: 48,
    },
});

const convertedDate = (dateToConvert) => {
    if (dateToConvert) 
    {const date = dateToConvert.substring(0, 10).split('-')
    const [ year, month, day ] = date
    return `${month}/${day}/${year}`
}
}

const PendingInterviews = ({
    jobs,
    classes,
}) => (
    <div className={classes.main}>
        <CardIcon Icon={CalendarTodayIcon} bgColor="#f44336" />
        <Card className={classes.card}>
        <Typography className={classes.title} color="textSecondary">
            Interview Reminders
            </Typography>
            <br></br>
        {jobs && jobs.map(job => (
                <div>
            {job.companyName && <Typography className={classes.info} variant="title" color="primary" component="info" paddingRight='0.5em'>
                {job.companyName}
            </Typography>}
            {job.interviewDate && <Typography className={classes.info} variant="button" component="info" paddingRight='0.5em'>
                {convertedDate(job.interviewDate)}
            </Typography>}
            {job.location && <Typography className={classes.info} variant="button" component="info" paddingRight='0.5em'>
                {job.location}
            </Typography>}
            < Divider />
            </div>
            ))}
        </Card>
    </div>
);

const enhance = compose(
    withStyles(styles),
);

export default enhance(PendingInterviews);