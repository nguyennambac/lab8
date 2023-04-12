$(document).ready(function () {
    var num = 1;
    $('.cong').click(
        function () {
            num++;
            if (num < 0) {
                $('.number').text(0);
            } else {
                $('.number').text(num);
            }
        })
    $('.tru').click(
        function () {
            num--;
            if (num < 0) {
                $('.number').text(0);
            } else {
                $('.number').text(num);
            }
        })

    var num1 = 1;
    $('.cong1').click(
        function () {
            num1++;
            if (num1 < 0) {
                $('.number1').text(0);
            } else {
                $('.number1').text(num1);
            }
        })
    $('.tru1').click(
        function () {
            num1--;
            if (num1 < 0) {
                $('.number1').text(0);
            } else {
                $('.number1').text(num1);
            }
        })

    var num3 = 1;
    $('.cong2').click(
        function () {
            num3++;
            if (num3 < 0) {
                $('.number2').text(0);
            } else {
                $('.number2').text(num3);
            }
        })
    $('.tru2').click(
        function () {
            num3--;
            if (num3 < 0) {
                $('.number2').text(0);
            } else {
                $('.number2').text(num3);
            }
        })

    $('.delete').click(
        function () {
            alert('HIỆN TẠI KHÔNG THỂ XÓA NÊN MUA ĐI!')
        })
})