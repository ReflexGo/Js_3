function plus(){
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    document.getElementById("out").textContent = parseInt(elem1) + parseInt(elem2);
}
    // parseInt - конвертация типа в число
    //getElementById - обращение к элементу по айди
    //innerHTML – самый простой способ считать или изменить HTML-содержимое элемента.
    //textContent позволяет считывать или задавать текстовое содержимое элемента.

function btnClick(){
    let txt1 = "";
    let txt2 = "";

    txt1.document.test.bt.value;
    txt2.document.test.bt.name;

    document.getElementById("ex1").innerHTML = "<HR>" + "Ви натиснули кнопку:" + txt1.bold() + "з ім'ям: " + txt2.bold() + "<HR>";
}

function swapContent() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}