

//creacion de usuarios, contraseñas y saldos
const accounts = [
    { name: "Martha", balance: 500, password: 'M1234' },
    { name: "David", balance: 260, password: 'D1234' },
    { name: "Juan", balance: 168, password: 'Juan' },
];

//bloque para  desaparecer  la  validacion de correo
document.getElementById("balance").style.display = "none";
document.getElementById("incorrect_user").style.display = "none";
document.getElementById("correct_user").style.display = "none";
document.getElementById("info").style.display = "none";

function enter() {

    const user = document.getElementById("usuario").value;
    const password = document.getElementById('password').value;

    valideUserLogin(user, password);
}

function valideUserLogin(user, contra) {
    let userValidate = false;
    for (let x in accounts) {
        if (user === accounts[x].name && contra === accounts[x].password) {
            userValidate = true;
            document.getElementById("login").style.display = "none"
            showMenuHTML(x)
            state = x;
            return
        }
    }
    //const incorretUser....
    if (!userValidate) {
        document.getElementById("incorrect_user").style.display = "block";      
        document.getElementById("incorrect_user").style.color = "white";
    }
}

//Esta funcion me permite que aparezca el bloque principal  y desaparezca el bloque de validacion 
function showMenuHTML(state) {

    document.getElementById("balance").style.display = "block";
    document.getElementById("info").style.display = "block";
    document.getElementById("nombre-usuario").innerText = accounts[state].name;
    document.getElementById("consultar").addEventListener('click', function () {
        document.getElementById("info").innerText = `${accounts[state].name} tu saldo actual es de  ${accounts[state].balance}`;
    });
}

//funcion para retirar
function withdraw() {
    const withdrawmoneys = document.getElementById("withdrawmoneys").value;
    const total1 = accounts[state].balance - withdrawmoneys;
    if (total1 < 10) {
        document.getElementById("info").innerText = 'El valor a retirar es superior al monto permitido, recuerde que su  saldo no puede ser inferior a  $ 10';
    } else {
        document.getElementById("info").innerText = `${accounts[state].name} Tu saldo actual es de $ ${total1} descontando el retiro de $ ${withdrawmoneys}`;
    }
}

//funcion para consignar
function deposit() {
    const depositmoneys = document.getElementById("depositmoneys").value;
    const total2 = Number(accounts[state].balance) + Number(depositmoneys);
    if (total2 > 990) {
        document.getElementById("info").innerText = 'Ingresa un valor nuevamente , recuerde que su saldo total no debe superar los $ 990  ';
    } else {
        document.getElementById("info").innerText = `${accounts[state].name} Tu saldo actual es de $ ${total2} mas las consignacion de  $ ${depositmoneys}`;
    }
}