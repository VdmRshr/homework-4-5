import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class AddComment extends Component {
    state = {
        comment: '',
        error: false
    };

    onChange = (e) => {

        this.setState({
            comment: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const error = this.validateForm(this.state.comment);
        this.setState({
            error
        });
        if (!error) {
            this.props.onCommentAdded(this.state.comment);
            this.setState({
                comment: ''
            })
        }

    };
    validateForm = (data) => {
        if (!data) {
            return true
        }
        return false
    };
    render() {
        const {error} = this.state;
        const requiredText = 'This field is required';
        return (
            <Box width={1 / 2} mt={4}>
                <form onSubmit={this.onSubmit} noValidate>
                    <Box mb={2}>
                        <TextField
                            multiline
                            fullWidth={true}
                            rows={4}
                            label="Your Comment"
                            variant="outlined"
                            onChange={this.onChange}
                            error={error}
                            helperText={error ? requiredText : ''}
                            value={this.state.comment}
                        />
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Button variant="outlined" color="primary" type='submit'>
                            Add Comment
                        </Button>
                    </Box>
                </form>
            </Box>
        );
    }
}
