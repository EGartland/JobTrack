import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'
// import React from 'react';
// import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    userForm: {
        margin: '10em auto',
        width: 'max-content',
    },
    buttonStyle: {
        background: 'grey',     
    }  
}

class LoginForm extends React.Component {
    state = {
        name: '',
        password: '',
		resume: '',
		linkedIn: '',
		gitHub: '',
		portfolio: '',
		status: 'Register',
		text: 'Already a member? ',
		other: 'Login',
		error: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { name, password, resume, linkedIn, gitHub, portfolio } = this.state
		if(this.state.status === 'Login') {
			let data = await API.login(name, password)
			data.auth ? this.props.setUser(data.user) : this.setState({error: data.status})
		} else {
			let links = [resume, linkedIn, gitHub, portfolio]
			API.register(name, password, links)
			this.changeForm()
		}
	}
	
	resetForm = () => {
		this.setState({
			name: '',
			password: '',
			resume: '',
			linkedIn: '',
			gitHub: '',
			portfolio: '',
		})
	}

	changeForm = () => {
		this.state.status === 'Register' ? 
		this.setState({status: 'Login', text: 'New here? ', other: 'Register'}) :
		this.setState({status: 'Register', text: 'Already a member? ', other: 'Login'})
		this.resetForm()
	}

    componentDidMount() {
        if (this.props.login) {
            this.setState({status: 'Login', other: 'Register', text: 'New here? '}) 
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className={classes.userForm} noValidate autoComplete='off'>
                <Typography>
                    {this.state.status}
                </Typography>
                    <TextField
                        label='Name *'
                        value={this.state.name}
                        name='name'
                        margin='normal'
                        onChange={this.handleChange}
                    />
                    <br/>                    
                    <TextField
                        label='Password *'
                        type='password'
                        className=''
                        value={this.state.password}
                        name= 'password'
                        margin='normal'
						onChange={this.handleChange}
						autoComplete='stoof'
                    />
					{this.state.status === 'Register' && 
					<React.Fragment>
						<br/>
						<TextField
							label='Resume'
							type='url'
							value={this.state.resume}
							name='resume'
							margin='normal'
							onChange={this.handleChange}
						/>
						<br/>
						<TextField
							label='LinkedIn'
							type='url'
							value={this.state.linkedIn}
							name='linkedIn'
							margin='normal'
							onChange={this.handleChange}
							
						/>
						<br/>
						<TextField
							label='GitHub'
							type='url'
							value={this.state.gitHub}
							name='gitHub'
							margin='normal'
							onChange={this.handleChange}
						/>
						<br/>
						<TextField
							label='Portfolio'
							type='url'
							value={this.state.portfolio}
							name='portfolio'
							margin='normal'
							onChange={this.handleChange}
						/>
						</React.Fragment>
					}
                    <br></br>
					<p>{this.state.error}</p>
					<p>* indicates required field</p>
                    <Button className={classes.buttonStyle} type='submit'>{this.state.status}</Button>
					{this.state.status && <p>{this.state.text}<a onClick={this.changeForm}>{this.state.other}</a></p>}
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(LoginForm);


// const styles = theme => ({
//   layout: {
//     width: 'auto',
//     display: 'block', // Fix IE11 issue.
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//   },
//   avatar: {
//     margin: theme.spacing.unit,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE11 issue.
//     marginTop: theme.spacing.unit,
//   },
//   submit: {
//     marginTop: theme.spacing.unit * 3,
//   },
// });

// function SignIn(props) {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form}>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="email">Email Address</InputLabel>
//               <Input id="email" name="email" autoComplete="email" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <Input
//                 name="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </FormControl>
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign in
//             </Button>
//           </form>
//         </Paper>
//       </main>
//     </React.Fragment>
//   );
// }

// SignIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SignIn);

