export function getCustomerList () {
    // return new Promise ( (res, rej) => {
    return axios.get('/api/customers')
    .then(response => response)
    .catch(error => error)
    // });
}
export function addCustomer () {
    // return new Promise ( (res, rej) => {
    return axios.post('/api/customers/new', this.$data.customer)
        .then(response => response)
        .catch(error => error)
    // })
}