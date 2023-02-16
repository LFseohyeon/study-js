/* floor는 뒤에 소수점을 버린다. */
console.log(Math.floor(3.23213));
/* ceil 은 숫자를 올려준다. */
console.log(Math.ceil(0.3));
/* random은 곱셈을 했을 때 소수점은 버린다. */
// Math.floor(Math.random()*n) : 0 ~ n-1의 난수
for (let i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random()*7));
}