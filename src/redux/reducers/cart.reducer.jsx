export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload]

        case "REMOVE_CART":
            return [...state.filter(q => q.id !== action.payload.id)]

        default:
            return state;
    }

}