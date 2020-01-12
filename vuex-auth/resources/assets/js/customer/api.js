export function getCustomerList (page) {
    // return new Promise ( (res, rej) => {
    return axios.get(`/api/customers?page=${page}`)
    .then(response => response)
    .catch(error => error);
    // });
}
export function addCustomer (customer) {
    // return new Promise ( (res, rej) => {
    return axios.post('/api/customers/new', customer)
        .then(response => response)
        .catch(error => error);
    // })
}
export function getCustomer (id) {
    return axios.get(`/api/customers/${id}`)
        .then(response => response)
        .catch(error => error);
}
export function editCustomer (id, customer) {
    return axios.put(`/api/customers/${id}`, customer)
        .then(response => response)
        .catch(error => error);
}
