const initState = {
    loader: false,
    routes: []
};

export default function common(state = initState, action) {
    switch (action.type) {
        case "SET_ROUTES_SUCCESS": {
            let routes = [...state.routes];
            routes.push(action.data);
            return {
                ...state,
                routes: routes,
            };
        }
        default:
            return state;
    }
}