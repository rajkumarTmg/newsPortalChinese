import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';
import { oldDbArticlesParser, zhengjianArticlesParser } from '../../utils/htmlParserOldStyleArticles';

export default function StyleRenderer ({ html, newClass, isOldSiteArticle }) {
    const isOldDbArticle = isOldSiteArticle;
    const isZhengjangArticle = html?.includes('data-insert-attach') || html?.includes('class="text-align-center"');
    const htmlParsed = html && (!isOldDbArticle ? (isZhengjangArticle ? zhengjianArticlesParser(html) : html) : oldDbArticlesParser(html));

    return <span
        dangerouslySetInnerHTML={{ __html: htmlParsed || '' }}
        className={classNames(styles.style, styles[newClass])} />;
}

StyleRenderer.propTypes = {
    html: PropTypes.string,
    isOldSiteArticle: PropTypes.bool,
    newClass: PropTypes.string
};
