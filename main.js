function AgenciaCarros(carro_placa, loja) {
    this.carro_placa = carro_placa;
    this.loja = loja;
}

function ODono(nome, documento, cidade) {
    this.nome = nome;
    this.documento = documento;
    this.cidade = cidade;
    this.placas = [];

this.adicionarPlaca = function(carro_placa) {
    if (!this.placas.includes(carro_placa)) {
        this.placas.push(carro_placa);
    }
}
}

function Carro(carro_placa, loja, marca, modelo, ano, valor, condicao, donoAnterior = null) {
    AgenciaCarros.call(this, carro_placa, loja);
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
    this.condicao = condicao;

    if (condicao === "Seminovo" && donoAnterior instanceof ODono) {
        this.donoAnterior = donoAnterior;
        donoAnterior.adicionarPlaca(carro_placa);
    }
}

function Cliente(carro_placa, loja, nome, idade, documento) {
    AgenciaCarros.call(this, carro_placa, loja);
    this.nome = nome;
    this.idade = idade;
    this.documento = documento;
}

function Vendedor(nomeF, documentoF, funcaoF) {
    this.nomeF = nomeF;
    this.documentoF = documentoF;
    this.funcaoF = funcaoF;
}

const dono1 = new ODono("Carlos Silva", "111.222.333-44", "Campinas");

const carro1 = new Carro("ABC-1234", "Loja Matriz", "Ford", "Ka", 2020, 35000, "Seminovo", dono1);

const cliente1 = new Cliente("ABC-1234", "Loja Matriz", "João", 45, "123456987-1");

const vendedor1 = new Vendedor("Douglas", "987654321-0", "Vendedor N1");

console.log("Carro:", carro1);
console.log("Cliente:", cliente1);
console.log("Vendedor:", vendedor1);
console.log("Histórico de placas do dono:", dono1.placas);
