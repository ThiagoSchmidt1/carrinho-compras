function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
//calcular o preço e nosso subtotal
    let preco = quantidade.value * valorUnitario;
    alert(preco);
//adicionar no carrinho
//atualizar o valor total

}

function limpar() {
    
}