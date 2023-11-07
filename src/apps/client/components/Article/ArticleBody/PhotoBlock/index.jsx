import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Lazy from '../../../Lazy';
import { FormattedMessage } from 'react-intl';

const PhotoBlock = ({ data }) => {
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);
    const author = authors.find((author) => author._id === data.photoAuthor);

    return (
        <div className={classNames(styles.root, styles[`${data.position}Position`], {
            [styles.full]: parseInt(data.size) === 100
        })} style={{ width: `${data.size}%` }}>
            <div className={styles.imageContainer}>
                <Lazy>
                    <img className={styles.img} src={data.photo[0].path} alt={data.photoDescription}></img>
                </Lazy>
            </div>
            <p className={styles.articleImageDesc}>
                {data.photoDescription}
            </p>
            <p className={styles.articleImageRights}><FormattedMessage id='common.imageCopyright'/>©️
                <span className={styles.copyrightAuthor}>{author && author?.data[router.locale]?.name}</span>
                {
                    data.photoLink &&
                    <Link href={data.photoLink}>
                        <a className={styles.copyrightBuy}>购买此图</a>
                    </Link>
                }
            </p>
        </div>
    );
};

PhotoBlock.propTypes = {
    data: PropTypes.object
};

export default PhotoBlock;
