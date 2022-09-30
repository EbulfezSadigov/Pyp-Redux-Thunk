export default function (state = [], action) {

    switch (action.type) {
        case 'GET_USERS':
            return [...action.payload]

        case 'DELETE_USER':
            return [...state.filter(q=>q.id !== action.payload)]

        default:
            return state
    }
}
