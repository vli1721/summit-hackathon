import { database } from '../index';


/* IMAGE STUFF */

export const getFaces = () => ({
    type: 'GET_FACES'
});

export const changeFaces = (num) => ({
    type: 'CHANGE_FACES',
    num
});

export const getExpression = () => ({
    type: 'GET_EXPRESSION'
});

export const changeExpression = (expression) => ({
    type: 'CHANGE_EXPRESSION',
    expression
});


/* USER */

export const changeUser = (user) => ({
    type: 'CHANGE_USER',
});


/* BALANCE */

export const getBalance = (balance) => {
    return {
        type: 'GET_BALANCE',
        balance
    }
}

export const startGetBalance = () => {
    return (dispatch, getState) => {
        const user = getState().settings.user;

        database.ref(`users/${user}/balance`).once('value', (snapshot) => {

            dispatch(getBalance(snapshot.val()));
        })
    }
}

export const watchBalance = () => {
    return (dispatch, getState) => {
        const user = getState().settings.user;

        database.ref(`users/${user}/balance`).on('value', (snap) => {
            dispatch(getBalance(snap.val()));
        })
    }
}

export const changeBalance = (balance) => {
    return {
        type: 'CHANGE_BALANCE',
        balance
    }
}

export const startChangeBalance = (balance) => {
    return (dispatch, getState) => {
        dispatch(changeBalance(balance));
        const user = getState().settings.user;
        database.ref(`users/${user}/balance`).set(balance)
    }
}