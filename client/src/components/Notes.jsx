// import React from 'react';
// import compose from 'recompose/compose';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Note from '@material-ui/icons/NoteAdd';
// import Divider from '@material-ui/core/Divider';
// import { Link } from 'react-router-dom';
// import Chip from '@material-ui/core/Chip';

// import CardIcon from './CardIcon';


// const styles = theme => ({
//     main: {
//         flex: '1',
//         marginRight: '1em',
//         marginTop: 20,
//     },
//     titleLink: { textDecoration: 'none', color: 'inherit' },
//     card: {
//         padding: '16px 0',
//         overflow: 'inherit',
//         // textAlign: 'right',
//     },
//     title: {
//        padding: '0 2px 10px',
//     },
//     value: {
//         padding: '0 16px',
//         minHeight: 48,
//     },
//     avatar: {
//         background: theme.palette.background.avatar,
//     },
//     listItemText: {
//         overflowY: 'hidden',
//         height: '4em',
//         display: '-webkit-box',
//         WebkitLineClamp: 2,
//         WebkitBoxOrient: 'vertical',
//     },
// });

// const Notes = ({
//     reviews = [],
//     customers = {},
//     nb,
//     translate,
//     classes,
// }) => (
//     <div className={classes.main}>
//         <CardIcon Icon={Note} bgColor="#673ab7" />
//         <Card className={classes.card}>
//             <Typography className={classes.title} color="textSecondary">
//             Resources
//             </Typography>
//             <Divider />
//             <Button color='primary' variant='contained' href="https://github.com/EGartland/JobTrack" target="_blank">Yep</Button>
//             {/* <List>
//                 {reviews.map(record => (
//                     <ListItem
//                         key={record.id}
//                         button
//                         component={Link}
//                         to={`/reviews/${record.id}`}
//                     >
//                         {customers[record.customer_id] ? (
//                             <Avatar
//                                 src={`${
//                                     customers[record.customer_id].avatar
//                                 }?size=32x32`}
//                                 className={classes.avatar}
//                             />
//                         ) : (
//                             <Avatar />
//                         )}

//                         <ListItemText
//                             primary={<StarRatingField record={record} />}
//                             secondary={record.comment}
//                             className={classes.listItemText}
//                             style={{ paddingRight: 0 }}
//                         />
//                     </ListItem>
//                 ))}
//             </List> */}
//         </Card>
//     </div>
// );

// const enhance = compose(
//     withStyles(styles),
// );

// export default enhance(Notes);