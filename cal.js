
function sum() {
    var n1, n2, n3, sol = 0;
    n1 = parseInt(document.getElementById("num1").value);
    n2 = parseInt(document.getElementById("num2").value);
    n3 = document.getElementById('operators').value;
    if (n3 == '+')
        sol = n1 + n2;
    else if (n3 == '-')
        sol = n1 - n2;
    else if (n3 === '*')
        sol = n1 * n2;
    else if (n3 === '/')
        sol = n1 / n2;
    document.getElementById("answer").value = sol;
    console.log('the first number', n1);
    console.log('the second number', n2);
    console.log('the operator is ', n3);
    console.log('the result is', sol);


}