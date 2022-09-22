const form = document.getElementById('form-contatos');
const imgAdicionado = '<img src="./imagens/Ok.png" alt="Ok" />';
const contato = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaQuantContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (tel.includes(inputNumeroTelefone.value)) {
        alert(`O número de telefone ${inputNumeroTelefone.value} já está adicionado.`)
    } else {

    contato.push(inputNomeContato.value);
    tel.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value ? imgAdicionado : 'Erro'}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaQuantContatos() {
    const quantTotal = calculaTotal();

    document.getElementById('contador').innerHTML = quantTotal
}

function calculaTotal() {
    const somaContatos = contato.length

    return somaContatos;
}