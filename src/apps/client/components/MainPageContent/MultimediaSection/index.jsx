import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import MultimediaBlock from './MultimediaBlock';
import SliderArrow from './SliderArrow';
import SlickSlider from 'react-slick';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../../utils/useWindowSize';
import Link from 'next/link';

const MultimediaSection = ({ theme, multimediaSlides, link }) => {
    const router = useRouter();
    const intl = useIntl();
    const isEngLocale = useMemo(() => router.locale === 'en', [router.locale]);
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 1024, [width]);

    const settings = {
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderArrow direction='right' />,
        prevArrow: <SliderArrow direction='left' />
    };

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme
        })}>
            <div className={classNames(styles.titleWrapper, {
                [styles.engLocale]: isEngLocale
            })}>
                <h6 className={styles.title}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <Link href={link}>
                        <a className={styles.link}>
                            {intl.formatMessage({ id: 'mainPage.multimedia' })}
                        </a>
                    </Link>
                </h6>
            </div>
            <div className={styles.sliderWrapper}>
                <SlickSlider
                    className='multimedia-slider'
                    { ...settings }
                >
                    {
                        isMobile
                            ? multimediaSlides.reduce((resultArray, item) => ([...resultArray, ...(item.photos || [])]), []).map((item, i) => (
                                <div key={i}>
                                    <MultimediaBlock theme={theme} slide={item}/>
                                </div>
                            ))
                            : multimediaSlides.map((item, i) => (
                                <div key={i}>
                                    <MultimediaBlock theme={theme} slide={item}/>
                                </div>
                            ))
                    }
                </SlickSlider>
            </div>
        </div>

    );
};

MultimediaSection.propTypes = {
    theme: PropTypes.string,
    link: PropTypes.string,
    multimediaSlides: PropTypes.array
};

export default MultimediaSection;
