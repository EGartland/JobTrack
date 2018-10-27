import React from 'react';
import Card from '@material-ui/core/Card';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardIcon from './CardIcon';

const styles = {
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
};

const Applications = ({ value, jobs, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={MenuIcon} bgColor="#31708f" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
            Applications Out
            </Typography>
            {jobs &&<Typography variant="headline" color="primary" component="h2">
                {jobs.length}
            </Typography>}
        </Card>
    </div>
);

export default withStyles(styles)(Applications);