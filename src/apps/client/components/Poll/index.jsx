import React, { useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SlickSlider from 'react-slick';
import SliderArrow from '../MainPageContent/MultimediaSection/SliderArrow';
import { useRouter } from 'next/router';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Poll = ({ page, transparent, additionIdForLabel, votes, handleVote }) => {
    const router = useRouter();
    const intl = useIntl();
    const ref = useRef();
    const [currentVote, setCurrentVote] = useState(votes[0] || null);
    const votesIds = useMemo(() => votes.map((vote) => vote.id).join(','), [votes]);
    const validationSchema = useMemo(() =>
        Yup.object().shape({
            variant: Yup.string().required(`${intl.formatMessage({ id: 'error.voteValidationError' })}`)
        })
    , []);

    useMemo(() => {
        ref?.current?.slickGoTo(0);
        setCurrentVote(votes[0] || null);
    }, [votesIds]);

    const formik = useFormik({
        initialValues: {
            variant: null
        },
        validateOnChange: false,
        validationSchema,
        onSubmit: (values) => {
            handleVote(values, currentVote.id);
        }
    });

    const rootClassname = classNames(styles.root, {
        [styles.transparent]: transparent,
        [styles[page]]: page,
        [styles.noArrows]: !votes?.length > 1
    });

    const handleSlide = (slide) => {
        setCurrentVote(votes[slide]);
    };

    return (
        <div className={rootClassname}>
            <OverlayScrollbarsComponent
                overflow={(page !== 'mainPage' ? 'hidden' : 'visible')}
                defer
            >
                {
                    votes && votes.length > 0
                        ? <SlickSlider
                            className={styles.slider}
                            nextArrow={<React.Fragment/>}
                            prevArrow={<React.Fragment/>}
                            slidesToShow={1}
                            afterChange={handleSlide}
                            infinite={false} // required!
                            ref={ref}
                        >
                            {votes.map((vote) => {
                                const leftTime = vote.date - Date.now();
                                const days = Math.floor(leftTime / (3600 * 24 * 1000));
                                const hours = Math.floor((leftTime - (days * 3600 * 24 * 1000)) / (3600 * 1000));
                                return (
                                    <div key={vote.id} className={classNames(styles.slide, {
                                        [styles.voted]: vote.selectedOption
                                    })}>
                                        {/*
                                            vote.selectedOption && <div className={styles.header}>
                                                {intl.formatMessage({ id: 'vote.header' })}
                                            </div>
                                        */}
                                        <h6 className={styles.title}>{vote.title}</h6>
                                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: vote.description }}/>
                                        {
                                            vote.selectedOption && <div className={styles.resultsHeader}>
                                                {intl.formatMessage({ id: 'vote.resultsHeader' })}
                                            </div>
                                        }
                                        <div className={styles.variants}>
                                            {vote.votingOptions?.map((option, i) => {
                                                return (
                                                    <div className={styles.variant} key={option.variantId}>
                                                        <input
                                                            className={styles.input}
                                                            onChange={formik.handleChange}
                                                            type='radio'
                                                            value={option.variantId}
                                                            name='variant'
                                                            id={additionIdForLabel
                                                                ? `${option.variantId}-${additionIdForLabel}`
                                                                : `${page}-${option.variantId}`
                                                            }
                                                            disabled={vote.selectedOption}
                                                            checked={
                                                                (vote.selectedOption && vote.selectedOption === option.variantId) ||
                                                                    formik.values.variant === option.variantId
                                                            }
                                                        />
                                                        <label
                                                            className={classNames(styles.label, {
                                                                [styles.selected]: (vote.selectedOption && vote.selectedOption === option.variantId) ||
                                                                    formik.values.variant === option.variantId
                                                            })}
                                                            htmlFor={additionIdForLabel
                                                                ? `${option.variantId}-${additionIdForLabel}`
                                                                : `${page}-${option.variantId}`}>
                                                            {option.data[router.locale]?.variant}
                                                            <span />
                                                            <div
                                                                className={styles.votePercent}
                                                                style={{
                                                                    width: (vote.answers && vote.answers[option.variantId]?.percent)
                                                                        ? `${vote.answers[option.variantId]?.percent}%`
                                                                        : '0%'
                                                                }}/>
                                                        </label>
                                                        {
                                                            vote.selectedOption &&
                                                                <div className={styles.tooltip}>
                                                                    <p className={styles.voteInfo}>
                                                                        {
                                                                            vote.answers[option.variantId]?.percent
                                                                                ? `${vote.answers[option.variantId]?.percent}%`
                                                                                : '0%'}
                                                                    </p>
                                                                </div>
                                                        }
                                                    </div>
                                                );
                                            }
                                            )}
                                        </div>
                                        {
                                            !vote.selectedOption &&
                                            <button className={styles.voteBtn} disabled={vote.selectedOption} type='submit' onClick={formik.handleSubmit}>
                                                {intl.formatMessage({ id: 'common.goVote' })}
                                            </button>
                                        }
                                        {
                                            vote.selectedOption &&
                                            <div className={styles.voteFinish}>
                                                {intl.formatMessage({ id: 'form.poll' }, { days, hours })}
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                        </SlickSlider>
                        : null
                }
            </OverlayScrollbarsComponent>
            {
                votes && votes.length > 1 &&
                <React.Fragment>
                    {/* eslint-disable-next-line max-len */}
                    <SliderArrow theme='vote' direction='right' onClick={() => { ref?.current.slickNext(); }} disabled={currentVote?.id === votes[votes.length - 1]?.id}/>
                    {/* eslint-disable-next-line max-len */}
                    <SliderArrow theme='vote' direction='left' onClick={() => { ref?.current.slickPrev(); }} disabled={currentVote?.id === votes[0]?.id}/>
                </React.Fragment>
            }
        </div>
    );
};

Poll.propTypes = {
    page: PropTypes.string.isRequired,
    transparent: PropTypes.bool,
    votes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    handleVote: PropTypes.func,
    additionIdForLabel: PropTypes.string
};

export default Poll;
