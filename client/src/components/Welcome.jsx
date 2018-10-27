import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    media: {
        height: '18em',
    },
};

const mediaUrl = 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/05/07/105189720-makeit_05082018_Welch_3_Interview_Traps_GTWWSW_mezz.940x528.jpg?v=1525707956';


// `https://marmelab.com/posters/cat-${parseInt(
//     Math.random() * 10,
//     10
// ) + 1}.jpeg`;

const Welcome = ({ classes, translate }) => (
    <Card>
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>
            <Typography variant="headline" component="h2">
            Welcome to Job Track
            </Typography>
            <Typography component="p">
            The perfect place for job applicants everywhere! Here you can keep track of applications,
            resumes, interviews, contacts, and appointments throughout the job finding process!
            </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
<<<<<<< HEAD
            {/* <Button href="https://www.indeed.com/">
                Indeed  <HomeIcon style={{ paddingRight: '0.5em' }} />
            </Button> */}
            <Button href="https://github.com/EGartland/JobTrack">
                GitHub <CodeIcon style={{ paddingLeft: '0.2em' , paddingRight: '0em' }} />
=======
            <Button target='_blank' href="https://www.indeed.com/">
                Indeed  <HomeIcon style={{ paddingRight: '0.5em' }} />
            </Button>
            <Button target='_blank' href="https://github.com/EGartland/JobTrack">
                GitHub  <CodeIcon style={{ paddingRight: '0.5em' }} />
>>>>>>> 54ae826b8f219a66d16f5b9bc608873ed9138d2c
            </Button>
        </CardActions>
    </Card>
);

export default withStyles(styles)(Welcome);