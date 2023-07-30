let s = 1;
function f1(n) {
    if (n === 0) return
    s = s * n;
    f1(n - 1);
}
f1(5);
console.log(s);

function f2(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s = s * i;
    }
    console.log(s);
}
f2(5);

let pos = 0;
// document.querySelector('.out').addEventListener('click', () => {
function rec() {
    pos += 5;
    if (pos > 500) return;
    document.querySelector('.out').style.left = pos + 'px';
    animation();
};

function animation() {
    setTimeout(rec, 50)
}
animation();

count = 0;
document.querySelector('.button-1').onclick = () => {
    document.querySelector('.button-2').textContent = count;
    function ttt() {
        count++;
        console.log(count);
    };
    ttt();

}