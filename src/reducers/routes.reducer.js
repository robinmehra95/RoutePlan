const initState = {
    loader: false,
    routes: [],
    modalRoutes: []
};

export default function common(state = initState, action) {
    switch (action.type) {
        case "SET_ROUTES_SUCCESS": {
            return {
                ...state,
                routes: action.data,
            };
        }
        case "SET_MODAL_ROUTES_SUCCESS": {
            return {
                ...state,
                modalRoutes: action.data,
            };
        }
        default:
            return state;
    }
}