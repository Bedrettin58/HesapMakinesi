var expr = "";  //işlemi tutar
var step = 0;   //işlem aşamalarının sırasıyla olması için
var num1, num2, result;
var opr;    //işlem operatörü
var ind;    //ara değişken
var numOfdigit = 0; //maksimum girilecek sayıyı tutar

//sayı tuslarına basılırsa
$('.numbers div').click(function (event) {
    //null tusu
    if (event.target.id == 10) return;

    if (step == 4) {
        step = 0;
        numOfdigit = 0;
        expr = "";
        $('#sat1').text("");
        $('#sat2').text("0");
    }
    if(numOfdigit == 16){return;}
    var tusSayi = '#' + event.target.id;
    expr += $(tusSayi).text();
    $('#sat2').text(expr);
    if (step == 0) step = 1;
    else if (step == 2) step = 3;
    numOfdigit++;
});

//operatore basılırsa
$('.operators div').click(function (event) {
    //num1 girilmediyse geri dön
    if (step != 1) return;
    var tusOpr = '#' + event.target.id;
    //alert(event.target.id);
    expr += $(tusOpr).text();
    opr = $(tusOpr).text();
    $('#sat2').text(expr);
    num1 = expr.substr(0, expr.length - 1);
    step = 2;
    //alert(num1);
    ind = expr.length;
    numOfdigit = 0;
});

//hesaplama aşaması
$('#calc').click(function (event) {
    //nuber operator number sırasında geldiyse
    if (step == 3) {
        var tusOpr = '#' + event.target.id;
        num2 = expr.substr(ind, expr.length);

        expr += $(tusOpr).text();
        $('#sat1').text(expr);

        switch (opr) {
            case '+':
                result = Number(num1) + Number(num2);
                break;
            case '-':
                result = Number(num1) - Number(num2);
                break;
            case 'x':
                result = Number(num1) * Number(num2);
                break;
            case '/':
                result = Number(num1) / Number(num2);
                break;
            case '%':

                break;

            default:
                break;
        }
        $('#sat2').text(result);
        step = 4;
    }
});
//% hesaplama 
$('#percentage').click(function () {
    if(opr !="x") return; //çarpma değilse geri dön
    //nuber operator number sırasında geldiyse
    if (step == 3) {
        var tusOpr = '#' + event.target.id;
        num2 = expr.substr(ind, expr.length);
        result = Number(num1) * Number(num2) / 100.;
        expr += $(tusOpr).text();
        $('#sat1').text(expr + "=");
        $('#sat2').text(result);
        step = 4;
    }
});
//C clear tuşuna basılırsa
$('#clear').click(function () {
    step = 0;
    expr = "";
    $('#sat1').text("");
    $('#sat2').text("0");
});

//backspace tusuna basılırsa
$('#back').click(function () {
    //son girilen tusu siler
    expr = expr.substr(0, expr.length - 1);
    $('#sat2').text(expr);
});

