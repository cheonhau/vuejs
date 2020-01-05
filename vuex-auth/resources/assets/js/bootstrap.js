
window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

// https://github.com/axios/axios

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
    response => response.data,
    error => {
        let error_current = error.response;
        // console.log(error_current);
        if (error_current.status === 500) {
            alert('something went wrong, please contact to managemant !');
            let loading_element = document.getElementById('container-loading');
            if (loading_element.style.display == 'block') {
                loading_element.style.display = "none";
            }
            console.log(error_current);
        } else if (error_current.status === 401) {
            // đoạn này sau này phải lấy được href trước khi logout rồi sau khi login redirect tới trang đó,
            // cần tạo một function logout riêng, không dính tới user vì cần sử dụng một vài nơi khác như ở đây
            localStorage.removeItem("user");
            window.location.href = '/login';
        } else if ( typeof error_current.data.errors !== 'undefined' ) {
            let message = "";
            if ( typeof error_current.data.errors.message !== 'undefined' ) {
                message = error_current.data.errors.message
            } else if ( typeof error_current.data.message !== 'undefined' ) {
                message = error_current.data.message
            }
            return {
                data : {},
                errors : message
            }
        }else {
            console.log(error.response)
        }
        // return Promise.reject(error);
   }
);
