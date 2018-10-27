import React from 'react';
import Card from '@material-ui/core/Card';
import ChatIcon from '@material-ui/icons/Chat';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardIcon from './CardIcon';

const styles = {
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
};

const IntOut = ({ value, jobs, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={ChatIcon} bgColor="#ff9800" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
            Interviews Granted
            </Typography>
            {jobs &&<Typography variant="headline" component="h2">
                {jobs.length}
            </Typography>}
        </Card>
    </div>
);

export default withStyles(styles)(IntOut);
