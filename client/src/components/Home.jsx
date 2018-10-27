// import React, { Component } from 'react'

// class Home extends Component {
// 	state = {
// 		user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}
// 	}
// 	componentDidMount() {
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<br></br>
// 				<p>Welcome {this.state.user.niceName}!</p>
// 			</div>
// 		)
// 	}
// }
// export default Home


// import React from 'react';
// import Card from '@material-ui/core/Card';
// import DollarIcon from '@material-ui/icons/AttachMoney';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// // import { translate } from 'react-admin';
// import CardIcon from './CardIcon';

// const styles = {
//     main: {
//         flex: '1',
//         marginRight: '1em',
//         marginTop: 20,
//     },
//     card: {
//         overflow: 'inherit',
//         textAlign: 'right',
//         padding: 16,
//         minHeight: 52,
//     },
// };

// const Home = ({ value, classes }) => (
//     <div className={classes.main}>
// 	<br></br>
//         <CardIcon Icon={DollarIcon} bgColor="#31708f" />
//         <Card className={classes.card}>
//             <Typography className={classes.title} color="textSecondary">
//             </Typography>
//             <Typography variant="headline" component="h2">
//                 {value}
//             </Typography>
//         </Card>
// 		<br></br>
// 		<br></br>
//         <CardIcon Icon={ShoppingCartIcon} bgColor="#ff9800" />
//         <Card className={classes.card}>
//             <Typography className={classes.title} color="textSecondary">
//             </Typography>
//             <Typography variant="headline" component="h2">
//                 {value}
//             </Typography>
//         </Card>
//     </div>

	
// );

// export default withStyles(styles)(Home);

import React, { Component, Fragment } from 'react';
import Welcome from './Welcome';
import Applications from './Applications';
import IntOut from './IntOut';
import PendingInterviews from './PendingInterviews';
import NewContacts from './NewContacts';
// import Notes from './Notes';
import API from '../utils/API';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};

class Home extends Component {
	
	state = {
		user: {}
	}
	async componentDidMount() {
		let user = await API.getUser(this.props.uid)
		console.log(this.props.uid);
		// console.log(user);
		// let interviews = user.job.filter(job => job.interview)
		if (user._id){
		this.setState({ user })
	}
	}
    render() {
		console.log(this.state.user);
        return (
            <Fragment>
					<br></br>
					<br></br>
                        <div style={styles.flex}>
                            <div style={styles.leftCol}>
                                <div style={styles.flex}>
                                    {this.state.user.job &&<Applications jobs={this.state.user.job}/>}
                                    {this.state.user.job && <IntOut jobs={this.state.user.job.filter(job => job.interview)}/>}
                                </div>
                                <div style={styles.singleCol}>
                                    <Welcome />
                                </div>
                                <div style={styles.singleCol}>
                                    {/* <Notes
                                        // orders={pendingOrders}
                                        // customers={pendingOrdersCustomers}
                                    /> */}
                                </div>
                            </div>
                            <div style={styles.rightCol}>
                                <div style={styles.flex}>
								{this.state.user.job && <PendingInterviews jobs={this.state.user.job.filter(job => job.interview)}/>}
                                    {this.state.user.job && <NewContacts jobs={this.state.user.job.filter(job => job.contactName && job.phone || job.companyName && job.phone)}
                                    />}
                                </div>
                            </div>
                        </div>

                
            </Fragment>
        );
    }
}

export default Home;