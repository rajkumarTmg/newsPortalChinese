import setDomain from '../../store/actions/setDomain';

export default function getDomain (req) {
    return dispatch => {
        return Promise.resolve(dispatch(setDomain(`${req.headers.host}`)));
    };
}
