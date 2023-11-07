import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import Lazy from '../../Lazy';

const Commercial = () => {
    const commercial = useSelector(({ commercial }) => commercial.articlePageCommercial[0]);

    return (
        <div className={styles.root}>
            {
                commercial
                    ? <a className={styles.commercialLink} href={commercial.link} target='_blank' rel="noreferrer">
                        <Lazy>
                            <picture>
                                <source srcSet={commercial.photosHorizontal[0].pathWebp} type='image/webp' />
                                <img src={commercial.photosHorizontal[0].path} alt={commercial.name || 'commercial'} />
                            </picture>
                        </Lazy>
                    </a>
                    : <div className={styles.placeholder}>{'AD'}</div>
            }
        </div>
    );
};

export default Commercial;
