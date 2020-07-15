const BtnClick=document.getElementById('BtnClick');
let arr=[];

//add EventListener
BtnClick.addEventListener('click',GeneratePassWord);

function GeneratePassWord(){
    const lowercase=lowerCase.checked;
    const Uppercase=UpperCase.checked;
    const number=Numbers.checked;
    const symbol=Symbols.checked;
    const passwordInput=document.getElementById('passwordInput');

    if(lowercase === true){
        for(var i=0;i<6;i++){
            const lowerABCD=Math.floor((Math.random() * (122 - 97)) + 97);
            const lChar=String.fromCharCode(lowerABCD);
            arr.push(lChar);
        }
    }
    if(number === true){
        for(var i=0;i<6;i++){
            const num=Math.floor((Math.random() * (57 - 48)) + 48);
            arr.push(num);
        }
    }
    if(Uppercase === true){
        for(var i=0;i<6;i++){
            const CapitalABCD=Math.floor((Math.random() * (90 - 65)) + 65);
            const cChar=String.fromCharCode(CapitalABCD);
            arr.push(cChar);
        }
    }
    if(symbol === true){
        for(var i=0;i<6;i++){
            const sym=Math.floor((Math.random() * (47 - 33)) + 33);
            const code=String.fromCharCode(sym);
            arr.push(code);
        }
    }
    const pass=arr.join('');
    passwordInput.value=pass;

}