

let onRefArray = [];
let copiedArray = [];
let selected = [];

onRefreshGenerateNumbers();
function onRefreshGenerateNumbers() {
    let numbers = ""
    let index = -1;
    for (let i = 0; i < 10; i++) {
        index++;
        let number = Math.round(Math.random() * 100)
        onRefArray.push(number);

        let div = document.createElement('div');
        div.classList.add('main-div');


        let leftSpan = document.createElement('span');
        leftSpan.classList.add('left-span')
        leftSpan.appendChild(document.createTextNode(number));
        div.appendChild(leftSpan);


        let rightDiv = document.createElement('label');
        rightDiv.setAttribute('id', 'lbl' + index);

        let input = document.createElement('INPUT');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', index);
        input.setAttribute("onclick", "doWithThisElement(this)");
        input.classList.add('right-side-input');
        rightDiv.appendChild(input);
        div.appendChild(rightDiv);

        document.getElementById("data-output").appendChild(div)
    }
}

function doWithThisElement(element) {
    selected.push(element.id);
    console.log(element.id)
    let dd = 'lbl' + element.id;
    console.log(document.getElementById(dd).classList.contains('chkd'))
    if (document.getElementById(dd).classList.contains('chkd')) {
        document.getElementById(dd).classList.remove('chkd');
    } else {
        document.getElementById(dd).classList.add('chkd');
    }
}

function copyElements() {

    let Placeholder = document.getElementById("#data-output1");
    (selected).forEach(e => copiedArray.push(onRefArray[e])); // changes use forEach

    //console.log((selected).forEach(e => onRefArray.splice(onRefArray[e])));
    //console.log(copiedArray)
    for (let i of copiedArray) {
        let div = document.createElement('div');
        div.classList.add('main-div');

        let leftSpan = document.createElement('span');
        leftSpan.classList.add('left-span')
        leftSpan.appendChild(document.createTextNode(i));
        div.appendChild(leftSpan);

        let rightDiv = document.createElement('label');
        let input = document.createElement('INPUT');
        input.setAttribute('type', 'checkbox');
        input.setAttribute("onclick", "doWithThisElement(this)");
        input.classList.add('right-side-input');
        rightDiv.appendChild(input);
        div.appendChild(rightDiv);

        document.getElementById("#data-output1").appendChild(div)

    }
}

