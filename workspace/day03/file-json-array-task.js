// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 object에 담은 뒤 sum.json으로 출력한다.
let file = require("fs");

function Product(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
}

let products = [
    new Product('아메리카노', 3000, 3),
    new Product('카페라떼', 6000, 5),
    new Product('녹차라떼', 5000, 7)

];


// file.writeFile('shop.json', JSON.stringify(products), 'utf-8', function(error){});

file.readFile('shop.json', 'utf-8', function(error, content){
    let sumObject = {
        totalPrice: 0,
        totalCount: 0
    };
    products = JSON.parse(content);
    products.map(product => product.price * product.count).forEach(v => sumObject.totalPrice += v);
    products.map(v => v.count).forEach(v => sumObject.totalCount += v);

    file.writeFile('sum.json', JSON.stringify(sumObject), 'utf-8', function(e){});
});