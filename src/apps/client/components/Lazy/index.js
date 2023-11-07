import PropTypes from 'prop-types';

import LazyLoad from 'react-lazyload';

export default function Lazy (props) {
    return (
        <>
            <LazyLoad
                once
                offset={150}
                height={'100%'}
                style={{ height: props.heightAuto ? 'auto' : '100%' }}
                overflow={props.overflow}
            >
                {props.children}
            </LazyLoad>
            <noscript>
                <style>{'.lazyload-placeholder { display: none; }'}</style>
                {props.children}
            </noscript>
        </>
    );
}

Lazy.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    heightAuto: PropTypes.bool,
    overflow: PropTypes.bool
};
