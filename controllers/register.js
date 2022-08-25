document.querySelector('#btnSubmit').onclick = function () {
    var pr = new Product();
    pr.email = document.querySelector('#email').value;
    pr.password = document.querySelector('#password').value;
    pr.name = document.querySelector('#name').value;
    pr.phone = document.querySelector('#phone').value;
    var genders = document.querySelectorAll('form > input');
    for (var i = 0; i < genders.length; i++){
        if (genders[i].checked === true){
            pr.gender = genders[i].value;
        }
    }
    console.log('product', pr)
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: pr
    })
    
    promise.then(function(result) {
        console.log('result',result.data);
    });


    promise.catch(function (error) {
        console.log('error',error.response.data);
    })
}
