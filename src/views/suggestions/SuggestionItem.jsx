import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SuggestionItem = (props) => {
    const Item = styled.div`
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin: 2px;
    `
    return <Item>{props.word}</Item>
};

SuggestionItem.propTypes = {
    word: PropTypes.string
};

export default SuggestionItem;