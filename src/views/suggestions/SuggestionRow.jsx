import React from 'react';
import PropTypes from 'prop-types';
import SuggestionItem from './SuggestionItem';
import styled from 'styled-components';

const SuggestionRow = ({words}) => {
    const Row = styled.div`
        display: flex;
        padding: 5px; 
        background: #f5f5f5; 
        flex-direction: row; 
        flex-wrap: wrap;
    `

    return <Row>
        {words.map((word, index) =>
            <SuggestionItem word={word} key={index}/>)}
    </Row>
};

SuggestionRow.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string)
};

export default SuggestionRow;