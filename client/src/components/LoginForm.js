import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import API from '../utils/API'

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
		status: 'Register',
		text: 'Already a member? ',
		other: 'Login'
    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { name, password } = this.state
		console.log(name, password)
		if(this.state.status === 'Login') {
			let user = await API.login(name, password)
			console.log(user)
			user ? this.props.setUser(user) : null
		} else {
			API.register(name, password)
			this.changeForm()
		}
	}
	
	changeForm = () => {
		this.state.status === 'Register' ? 
		this.setState({status: 'Login', text: 'New here? ', other: 'Register'}) :
		this.setState({status: 'Register', text: 'Already a member? ', other: 'Login'})
	}

    componentDidMount() {
        if (this.props.login) {
            this.setState({status: 'Login'}) 
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
                        label='Name'
                        value={this.state.name}
                        name='name'
                        margin='normal'
                        onChange={this.handleChange}
                    />
                    <br>
                    </br>
                    <TextField
                        label='Password'
                        type='password'
                        className=''
                        value={this.state.password}
                        name= 'password'
                        margin='normal'
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <Button className={classes.buttonStyle} type='submit'>{this.state.status}</Button>
					{this.state.status && <p>{this.state.text}<a onClick={this.changeForm}>{this.state.other}</a></p>}
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(LoginForm);

