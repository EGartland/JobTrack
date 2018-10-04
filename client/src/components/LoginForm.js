import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
        name: 'Username',
        password: 'password',
        status: 'Register'

    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, password } = this.state
        console.log(name, password)
    }

    componentDidMount() {
        if (this.props.login) {
            this.setState({status: 'login'}) 
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
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(LoginForm);

