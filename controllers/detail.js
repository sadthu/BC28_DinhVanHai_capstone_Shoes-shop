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
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('param',myParam);
    getProduct();
    getProductCarousel(myParam);
}
function getProductCarousel(param) {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + param,
        method: 'GET'
    })
    promise.then(function(result){
        console.log('param',result.data.content)
        renderCarousel(result.data.content);
    })
    promise.catch(function(err){

    })
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
                        <a href="./detail.html?productid=${product.id}">Buy Now</a>
                        <div>${product.price}$</div>
                    </div>
                </div>
            </div> 

        `
    }
    document.querySelector('.row').innerHTML = html;
}
function renderCarousel(arrProduct){
    console.log('size',arrProduct.size)
    var html = '';
    var content = '';
    for (var i = 0; i < arrProduct.size.length; i++) {
        var productSize = arrProduct.size[i];
        content += `<div>${productSize}</div>`
    }
    html = `
        <div class="container">
            <div class="img">
                <img src=${arrProduct.image} alt="" >
            </div>
            <div class="infor">
                <h2 class="pro__name">${arrProduct.name}</h2>
                <p class="pro__inf">${arrProduct.description}</p>
                <h3>Available size</h3>
                <div class="product__size">
                    ${content}
                </div>
                <p class="pro__price">${arrProduct.price}$</p>
                <div class="amount">
                    <button class="btn btn-primary">+</button>
                    <span>1</span>
                    <button class="btn btn-primary">-</button>
                </div>
                <button class="add__pro">Add to cart</button>
            </div>
        </div>
    
    `
    document.querySelector('.product__detail').innerHTML = html;
}