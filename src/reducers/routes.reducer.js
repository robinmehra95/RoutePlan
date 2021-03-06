const initState = {
    loader: false,
    routes: [],
    modalRoutes: [],
    showInfo: false,
    stationsData: 0,
    markerIndex: 1
};

export default function common(state = initState, action) {
    switch (action.type) {
        case "SET_ROUTES_SUCCESS": {
            return {
                ...state,
                routes: action.data,
                showInfo: true,
            };
        }
        case "SET_MODAL_ROUTES_SUCCESS": {
            return {
                ...state,
                modalRoutes: action.data,
            };
        }
        case "SET_STATIONS_SUCCESS": {
            return {
                ...state,
                stationsData: action.data
            }
        }
        case "SET_MARKER_INDEX_SUCCESS": {
            return {
                ...state,
                markerIndex: action.data
            }
        }
        default:
            return state;
    }
}