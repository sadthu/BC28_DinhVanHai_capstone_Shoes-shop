function getProduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })
    promise.then(function(result){
        console.log('result',result.data);
        renderProduct(result.data.content)
    })
    promise.catch(function(err){

    })
}
window.onload = function () {
    getProduct();
}
function renderProduct(arrProduct){
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var product = arrProduct[i];
        html += `
            <div class="col-4">
                <div class="product__wrap">
                    <div class="product-infor">
                        <div class="img__product">
                        <img src=${product.image} alt="">
                        </div>
                        <h4>${product.name}</h4>
                        <p>${product.shortDescription}</p>
                    </div>
                    <div class="price">
                        <button>Buy Now</button>
                        <div>${product.price}$</div>
                    </div>
                </div>
            </div> 

        `
    }
    document.querySelector('.row').innerHTML = html;
}