// import React, { Component } from 'react';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// const styles = theme => ({

// snackbar: {
// 	backgroundColor: theme.palette.secondary.main,
// 	width: 'flex',
// 	height: 75,
// },
// card: {
//     maxWidth: 345,
// },
// media: {
//     // ⚠️ object-fit is not supported by IE 11.
//     objectFit: 'cover',
// },
// });

// class Calendar extends Component {
	
// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<div>
// 			<br></br>
// 			<br></br>
// 			<br></br>
// 			<br></br>
// 			<SnackbarContent className={classes.snackbar} message='Resources' variant='h6' />
// 			<Card className={classes.card}>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           className={classes.media}
//           height="140"
//           image="https://images-na.ssl-images-amazon.com/images/I/71%2ByQUGOR4L._SX425_.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
	
  
// 			</div>
// 		)
// 	}
// }

// export default withStyles(styles)(Calendar);


// // const styles = {
// //   card: {
// //     maxWidth: 345,
// //   },
// //   media: {
// //     // ⚠️ object-fit is not supported by IE 11.
// //     objectFit: 'cover',
// //   },
// // };

// // function ImgMediaCard(props) {
// //   const { classes } = props;
// //   return (
// //     <Card className={classes.card}>
// //       <CardActionArea>
// //         <CardMedia
// //           component="img"
// //           alt="Contemplative Reptile"
// //           className={classes.media}
// //           height="140"
// //           image="/static/images/cards/contemplative-reptile.jpg"
// //           title="Contemplative Reptile"
// //         />
// //         <CardContent>
// //           <Typography gutterBottom variant="h5" component="h2">
// //             Lizard
// //           </Typography>
// //           <Typography component="p">
// //             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
// //             across all continents except Antarctica
// //           </Typography>
// //         </CardContent>
// //       </CardActionArea>
// //       <CardActions>
// //         <Button size="small" color="primary">
// //           Share
// //         </Button>
// //         <Button size="small" color="primary">
// //           Learn More
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// // ImgMediaCard.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };

// // export default withStyles(styles)(ImgMediaCard);