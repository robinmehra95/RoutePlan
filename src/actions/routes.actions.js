export const setRoutes = (data = null) => {
        return function(dispatch) {
            dispatch({
                type: "SET_ROUTES_SUCCESS",
                data
            });
        };
};
