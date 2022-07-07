export {}

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal: number = 0

limparSaldo()

function somarAoSaldo(soma: number) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
}

function limparSaldo() {
        campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
