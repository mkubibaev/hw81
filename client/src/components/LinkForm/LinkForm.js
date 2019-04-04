import React, {Component} from 'react';

class LinkForm extends Component {
    state = {
        originalUrl: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)
    };

    render() {
        return (
            <div className="link-form">
                <h2>Shorten your link!</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="originalUrl"
                        value={this.state.originalUrl}
                        onChange={this.inputChangeHandler}
                        required
                    />
                    <button type="submit">Shorten!</button>
                </form>
            </div>
        );
    }
}

export default LinkForm;
