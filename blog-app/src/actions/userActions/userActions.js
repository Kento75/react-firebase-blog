import { userConstants } from '../../constants';
import { userService } from '../../services';
import { alertActions } from '../';
import { history } from '../../helpers';

export const userActions = {
    getAll,
    getUserDetailed
};

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                //users => dispatch(success(users)),
                //error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUserDetailed(userId) {
    return dispatch => {
        dispatch(request({ userId }));

        userService.getUserDetailed(userId)
            .then(
                userDetailed =>
                    dispatch(success(userDetailed)),
                    error => dispatch(failure(error))
            );
    };

    function request(userId) { return { type: userConstants.DETAILED_REQUEST, userId } }
    function success(userDetailed) { return { type: userConstants.DETAILED_SUCCESS, userDetailed } }
    function failure(error) { return { type: userConstants.DETAILED_FAILURE, error } }
}
