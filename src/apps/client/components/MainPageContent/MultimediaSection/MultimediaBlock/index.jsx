import React, { useMemo } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useWindowSize } from '../../../../utils/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MultimediaVideoBlock from '../MultimediaVideoBlock';
import Lazy from '../../../Lazy';
import { FormattedMessage } from 'react-intl';

const MultimediaBlock = ({ theme, slide }) => {
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 1024, [width]);
    const router = useRouter();
    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.videoCenter]: slide.videos?.length < 3,
            [styles.photosCenter]: slide.videos?.length < 5
        })}>
            {!!slide?.videos?.length &&
                <div className={styles.videoList}>
                    {slide?.videos?.map((item) =>
                        <MultimediaVideoBlock item={item} key={item?._id} theme={theme}/>
                    )}
                </div>
            }
            {isMobile
                ? slide.data && <Link href={`/posts/${slide.data[router.locale]?.alias}`}>
                    <a className={styles.imageWrapper}>
                        <Lazy overflow={true}>
                            <picture>
                                <source srcSet={slide.data[router.locale]?.avatar[0]?.pathWebp} type='image/webp' />
                                <img src={slide.data[router.locale]?.avatar[0]?.path} alt={slide.data[router.locale]?.title} />
                            </picture>
                        </Lazy>
                        <div className={styles.info}>
                            <p className={styles.imageDesc}>{slide.data[router.locale]?.title}</p>
                            <span className={styles.views}>{slide.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></span>
                        </div>
                    </a>
                </Link>

                : slide?.photos?.length && <div className={styles.imageList}>
                    {slide?.photos?.map((item) =>
                        <Link key={item?._id} href={`/posts/${item.data[router.locale]?.alias}`}>
                            <a className={styles.imageWrapper}>
                                <Lazy overflow={true}>
                                    <picture>
                                        <source srcSet={item.data[router.locale]?.avatar[0]?.pathWebp} type='image/webp' />
                                        <img src={item.data[router.locale]?.avatar[0]?.path} alt={item.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                                <div className={styles.info}>
                                    <p className={styles.imageDesc}>{item.data[router.locale]?.title}</p>
                                    <span className={styles.views}>{item.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></span>
                                </div>
                            </a>
                        </Link>)}
                </div>
            }
        </div>
    );
};
MultimediaBlock.propTypes = {
    theme: PropTypes.string,
    slide: PropTypes.object
};

export default MultimediaBlock;
