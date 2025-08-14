const lista = document.querySelector("ul");
const botaoMostrarTudo = document.querySelector(".mostrar-tudo");
const botaoMap = document.querySelector(".map");
const botaoSomarTudo = document.querySelector(".somar-tudo");
const botaoFiltrar = document.querySelector(".filtrar");

function formatar(valor){
    const novoValor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return novoValor;
}

function mostrarTudo(arrayProdutos) {
    let li = "";

    arrayProdutos.forEach(produto => {
        li += `       
        <li>
            <img src="${produto.src}" alt="bacon-egg">
            <p>${produto.nome}</p>
            <p class="item-preco">${formatar(produto.preco)}</p>
        </li> 
            `
    });
    lista.innerHTML = li
}

function desconto10Porcento() {
    const novosPrecos = menuOpcoes.map(produtos => ({
        ...produtos,
        preco: produtos.preco * 0.9,
    }));
    mostrarTudo(novosPrecos);
}

function somarTodosItens() {
    const valorTotal = menuOpcoes.reduce((acumulador, preco) => acumulador + preco.preco, 0);

    lista.innerHTML = `       
        <li>
            <p class="item-preco"> O valor total dos itens é: ${formatar(valorTotal)} </p>
        </li> 
    `
}

function filtrarTodosItens() {
    const produtosVeganos = menuOpcoes.filter(produto => produto.vegan);
    mostrarTudo(produtosVeganos);
}

botaoMostrarTudo.addEventListener("click", () => mostrarTudo(menuOpcoes));
botaoMap.addEventListener("click", desconto10Porcento);
botaoSomarTudo.addEventListener("click", somarTodosItens);
botaoFiltrar.addEventListener("click", filtrarTodosItens);





