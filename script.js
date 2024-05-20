let loop_num = 0;

document.getElementById("loop-number").innerText = loop_num;

function increase() {
    loop_num++;
    modifyValue();
}

function decrease() {
    loop_num--;
    modifyValue();
}

function reset() {
    loop_num = 0;
    modifyValue();
}

function modifyValue() {
    document.getElementById("loop-number").innerText = loop_num;
}
