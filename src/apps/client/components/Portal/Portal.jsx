import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, parentNode, styles = { wrapper: '' }, active = true }) => {
    if (active) {
        return ReactDOM.createPortal(
            <div className={styles.wrapper}>{children}</div>,
            parentNode
        );
    }

    return children;
};

Portal.propTypes = {
    children: PropTypes.node,
    parentNode: PropTypes.node,
    styles: PropTypes.object,
    active: PropTypes.bool
};

export default Portal;
