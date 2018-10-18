import React from 'react'
// import { TextField, Button, Typography } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    layout: {
      width: 'auto',
      display: 'block', // Fix IE11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

  function LoginForm(props) {
    const { classes } = props;
  
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
  
 LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LoginForm);
  

// class LoginForm extends React.Component {
//     state = {
//         name: '',
//         password: '',
// 		status: 'Register',
// 		text: 'Already a member? ',
// 		other: 'Login'
//     };

//     handleChange = (e) => {
//         const { name, value } = e.target
//         this.setState({
//             [name]: value
//         })
//     }

//     onSubmit = async (e) => {
//         e.preventDefault();
//         const { name, password } = this.state
// 		console.log(name, password)
// 		if(this.state.status === 'Login') {
// 			let user = await API.login(name, password)
// 			console.log(user)
// 			user ? this.props.setUser(user) : null
// 		} else {
// 			API.register(name, password)
// 			this.changeForm()
// 		}
// 	}
	
// 	changeForm = () => {
// 		this.state.status === 'Register' ? 
// 		this.setState({status: 'Login', text: 'New here? ', other: 'Register'}) :
// 		this.setState({status: 'Register', text: 'Already a member? ', other: 'Login'})
// 	}

//     componentDidMount() {
//         if (this.props.login) {
//             this.setState({status: 'Login'}) 
//         }
//     }

//     render() {
//         const { classes } = this.props;
//         return (
//             <div>
     
//                 <form onSubmit={this.onSubmit} className={classes.userForm} noValidate autoComplete='off'>
//                 <Typography>
//                     {this.state.status}
//                 </Typography>
//                     <TextField
//                         label='Name'
//                         value={this.state.name}
//                         name='name'
//                         margin='normal'
//                         onChange={this.handleChange}
//                     />
//                     <br>
//                     </br>
//                     <TextField
//                         label='Password'
//                         type='password'
//                         className=''
//                         value={this.state.password}
//                         name= 'password'
//                         margin='normal'
//                         onChange={this.handleChange}
//                     />
//                     <br></br>
//                     <Button className={classes.buttonStyle} type='submit'>{this.state.status}</Button>
// 					{this.state.status && <p>{this.state.text}<a onClick={this.changeForm}>{this.state.other}</a></p>}
//                 </form>
//             </div>
//         )
//     }
// }
// export default withStyles(styles)(LoginForm);

