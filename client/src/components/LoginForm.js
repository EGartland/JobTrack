import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    userForm: {
        margin: '10em auto',
        width: 'max-content',
    }
}

class LoginForm extends React.Component {
    state = {
        name: 'Username',
        password: 'password'

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

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className={classes.userForm} id='userForm' noValidate autoComplete='off'>
                    <TextField
                        id='standard-name'
                        label='Name'
                        className='Test'
                        value={this.state.name}
                        name='name'
                        margin='normal'
                        onChange={this.handleChange}
                    />
                    <br>
                    </br>
                    <TextField
                        id='password'
                        label='Password'
                        type='password'
                        className=''
                        value={this.state.password}
                        name= 'password'
                        margin='normal'
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(LoginForm);

