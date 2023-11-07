import React from 'react';
import styles from './index.module.scss';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Lazy from '../../../Lazy';

const Slider = ({ slides, sliderRef }) => {
    const router = useRouter();

    const settings = {
        dots: true,
        slidesToShow: 1,
        arrows: false,
        lazyLoad: true
    };

    return (
        <div className={styles.root} ref={sliderRef}>
            <SlickSlider
                className={styles.slider}
                { ...settings }
            >
                {slides.map((slide) =>
                    <Link key={slide?._id} href={`/posts/${slide.data[router.locale]?.alias}`}>
                        <div className={styles.sliderItem}>
                            <div className={styles.image}>
                                <Lazy>
                                    <img src={slide.data[router.locale]?.avatar[0]?.path} alt='post'/>
                                </Lazy>
                            </div>
                            <p className={styles.text}>{slide.data[router.locale]?.title}</p>
                        </div>
                    </Link>
                )}
            </SlickSlider>
        </div>
    );
};

Slider.propTypes = {
    slides: PropTypes.array,
    sliderRef: PropTypes.object
};

export default Slider;
