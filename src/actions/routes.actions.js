export const setRoutes = (data = null) => {
        return function(dispatch) {
            dispatch({
                type: "SET_ROUTES_SUCCESS",
                data
            });
        };
};

export const setModalRoutesData = (data = null) => {
    return function(dispatch) {
        dispatch({
            type: "SET_MODAL_ROUTES_SUCCESS",
            data
        });
    };
};

export const setStations = (data = null) => {
    return function(dispatch) {
        dispatch({
            type: "SET_STATIONS_SUCCESS",
            data
        });
    };
};