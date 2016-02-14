var calculator = {
    firstNum : 0,                                           // Первое число
    secondNum : 0,                                          // Второе число
    operac: false,                                          // Переключатель операций над числами
    idOperacBtn: null                                       // id Кнопки в дальнейшем для выполнения операцииы
};

$('.numBtn').click(function(){
    var number = $('#rez').val();
    if(calculator.operac === false) {
        $('#rez').val(this.value);
        calculator.operac = true;
    } else {
        $('#rez').val(number + this.value);
    }
});

$('.operac').click(function(){
    calculator.firstNum = Number($('#rez').val());
    calculator.idOperacBtn = this.id;
    switch(calculator.idOperacBtn) {
        case 'delen':
            calculator.operac = false;
            break;
        case 'ymnos':
            calculator.operac = false;
            break;
        case 'vichet':
            calculator.operac = false;
            break;
        case 'slosh':
            calculator.operac = false;
            break;
    }
});

$('#ravno').click(function(){
    calculator.secondNum = Number($('#rez').val());
    switch(calculator.idOperacBtn) {
        case 'delen':
            $('#rez').val(calculator.firstNum / calculator.secondNum);
            break;
        case 'ymnos':
            $('#rez').val(calculator.firstNum * calculator.secondNum);
            break;
        case 'vichet':
            $('#rez').val(calculator.firstNum - calculator.secondNum);
            break;
        case 'slosh':
            $('#rez').val(calculator.firstNum + calculator.secondNum);
            break;
    }
});

$('#clean').click(function(){
    calculator.firstNum = 0;
    calculator.secondNum = 0;
    calculator.operac = false;
    $('#rez').val(calculator.firstNum);
});

$('#dot').click(function(){
    var number = $('#rez').val();
    if(number >= 0){
        $('#rez').val(number + ".");
        calculator.operac = true;
    }
    if(number.indexOf(".") + 1){
        $('#rez').val(number);
    }
});

$('#zero').click(function(){
    var number = $('#rez').val();
    if(number == 0) {
        $('#rez').val(this.value);
        calculator.operac = false;
    }
});