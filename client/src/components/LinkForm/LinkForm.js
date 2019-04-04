import React, {Component} from 'react';

class LinkForm extends Component {
    state = {
        link: ''
    };

    render() {
        return (
            <div className="link-form">
                <h2>Shorten your link!</h2>
                <form>
                    <input type="text"/>
                    <button type="submit">Shorten!</button>
                </form>
            </div>

        );
    }
}

export default LinkForm;
