function testTask() {
    let productName = document.querySelector('h1');
    console.log(`product name: ${productName.innerHTML}`);

    let priceWithDiscount = document.getElementsByClassName('product-price-discounted');
    console.log(`price with discount: ${priceWithDiscount[0].innerHTML}`);
    
    let priceOriginal = document.getElementsByClassName('product-prev-price');
    console.log(`price: ${priceOriginal[1].innerHTML}`);

    let picture = document.getElementsByClassName('img');
    console.log(picture)
    console.log(`pictures src: ${picture[2].src}`);
}

testTask()