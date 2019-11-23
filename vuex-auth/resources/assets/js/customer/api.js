export function getCustomerList () {
    // return new Promise ( (res, rej) => {
    return axios.get('/api/customers')
        .then((response) => {
            res(response.data);
        })
        .catch((err) =>{
            rej(err);
        })
    // });
}
export function addCustomer () {
    // return new Promise ( (res, rej) => {
    return axios.post('/api/customers/new', this.$data.customer)
            .then((response) => {
                res(response.data);
            }).catch ( (err) => {
                rej(err);
            });
    // })
}
export function getCustomer () {
    // return new Promise ( (res, rej) => {
        return axios.get(`/api/customers/${this.$route.params.id}`)
            .then((response) => {
                res( response.data );
            })
            .catch ( (err) => {
                rej( err );
            });
    // });
}