import React from 'react';
import SuggestionRow from './SuggestionRow';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words: ''}
    }

    async componentDidMount() {
        const {input, requestType} = this.props;
        try {
            const response = await fetch(`https://api.datamuse.com/${requestType}=${input}`);
            console.log('logging response.ok', response.ok);
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                console.log(`https://api.datamuse.com/${requestType}=${input}`);
                const result = await response.json();
                const data = result.map(item => item.word);
                this.setState({words: data})
            }
        }
        catch (e) {
            console.log('ERROR IN FETCH', e);
        }
    };


    render() {
        if (this.state.words) {
            console.log('%clogging state', 'color: yellow; font-weight: bold; text-decoration: underline;', this.state.words);
        }

        return this.state.words ? <SuggestionRow words={this.state.words}/> : <div>Loading</div>;
    };
}

Suggestion.defaultProps = {
  input: 'mindless',
  requestType: 'sug?s'
};

Suggestion.propTypes = {
    input: PropTypes.string,
    requestType: PropTypes.string
};

export default Suggestion;



