import axios from "axios"

export const getCustomers = () => {
    return async (dispatch) => {
        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                dispatch({
                    type: 'GET_USERS',
                    payload: res.data
                })
            })
    }
}
export const removeCustomer = (id) => {
    axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
    return (
        {
            type: 'DELETE_USER',
            payload: id
        }
    )
}