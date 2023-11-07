import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StyleRenderer from '../../../StyleRenderer';

const TextBlock = ({ html, isOldSiteArticle }) => {
    return (
        <Fragment>
            <StyleRenderer html={html} newClass={'article'} isOldSiteArticle={isOldSiteArticle}/>
        </Fragment>
    );
};

TextBlock.propTypes = {
    html: PropTypes.string,
    isOldSiteArticle: PropTypes.bool
};

export default TextBlock;
