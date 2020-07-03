import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';


export default class RegistrationForm extends Component {
    state = {
        loading: false,
        data: {
            name: '',
            lastName: '',
            city: '',
            phone: '',
        },
        error: false
    };
    handleChange = (e) => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value},
            error: false
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.dataSubmit();
    };
    dataSubmit = () => {

        const error = this.validateForm(this.state.data);
        this.setState({
            error
        });
        if (!error) {
            this.setState({
                loading: true,
            });
            setTimeout(() => {
                this.setState({
                    loading: false,
                    data: {
                        name: '',
                        lastName: '',
                        city: '',
                        phone: ''
                    }
                });
            }, 1000);
        }
    };

    validateForm = (data) => {
        if (!data.name || !data.lastName || !data.phone) {
            return true
        }
        return false
    };

    render() {

        console.log(this.state);
        const {loading, data, error} = this.state;
        const requiredText = 'This field is required';
        return (
            <Box mt={4} display='flex' justifyContent='center'>
                <form onSubmit={this.onSubmit} noValidate>
                    <Box mb={2}>
                        <TextField
                            required
                            label="Name"
                            variant="outlined"
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                            error={!data.name && error}
                            helperText={!data.name && error ? requiredText : ''}
                            value={data.name}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            required
                            label="Last Name"
                            variant="outlined"
                            type='text'
                            name='lastName'
                            onChange={this.handleChange}
                            helperText={!data.lastName && error ? requiredText : ''}
                            error={!data.lastName && error}
                            value={data.lastName}/>

                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="City"
                            variant="outlined"
                            type='text'
                            name='city'
                            onChange={this.handleChange}
                            value={data.city}/>
                    </Box>
                    <Box mb={2}>
                        <TextField
                            required
                            label="Phone Number"
                            variant="outlined"
                            type='text'
                            name='phone'
                            onChange={this.handleChange}
                            error={!data.phone && error}
                            helperText={!data.phone && error ? requiredText : ''}
                            value={data.phone}/>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Button variant="outlined" color="primary" type='submit'
                                disabled={loading ? true : false}>
                            {loading ? <CircularProgress size={24}/> : 'Sing up'}
                        </Button>
                    </Box>
                </form>
            </Box>
        );
    }
}


