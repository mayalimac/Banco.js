//Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
//- buscar saldo deve retornar o valor atual do saldo;
//- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
//- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
//- o número da conta deve retornar o número da conta.


const banco = {
    conta: 123456,
    saldo: 1000.00,
    tipoConta: "corrente"
    agencia: 1594,

    function buscarSaldo () {
        return this.saldo;
        console.log(" Seu saldo atual é: " + saldo);
    }

    function deposito(valorDeposito) {
        this.saldo += valorDeposito
        return this.saldo;
        console.log(" Seu saldo após desposito é: "valorDeposito + saldo);

    }

    function saque(valorSaque) {
        this.saldo -= valorSaque
        return this.saldo;
        console.log(" Seu saldo após saque é: " valorSaque - saldo);
    }

    function numeroConta() {
        return this.conta;
    }
}