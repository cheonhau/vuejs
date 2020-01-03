export function getCustomerList () {
    // return new Promise ( (res, rej) => {
    return axios.get('/api/customers')
    .then(response => response)
    .catch(error => error)
    // });
}
export function addCustomer (customer) {
    // return new Promise ( (res, rej) => {
    return axios.post('/api/customers/new', customer)
        .then(response => response)
        .catch(error => {
            console.log(error)
            return error;
        })
    // })
}
export function getCustomer (id) {
    return axios.get(`/api/customers/${id}`)
        .then(response => response)
        .catch(error => error)
}