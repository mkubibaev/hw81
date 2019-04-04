import React, {Component, Fragment} from 'react';
import LinkForm from "./components/LinkForm/LinkForm";
import LinkResult from "./components/LinkResult/LinkResult";
import {addUrl} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <Fragment>
                <LinkForm
                    onSubmit={this.props.addUrl}
                />
                <LinkResult shortUrl={this.props.shortUrl}/>
            </Fragment>
        );
    }
}

const mapSateToProps = state => ({
    shortUrl: state.shortUrl
});

const mapDispatchToProps = dispatch => ({
    addUrl: urlData => dispatch(addUrl(urlData))
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
