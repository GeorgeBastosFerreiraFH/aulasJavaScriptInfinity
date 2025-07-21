const listaProdutos = []

function adicionarProduto(numero, nome, preco, categoria) {
    numero = prompt('Digite quantas produtos quer adicionar')
    for (let index = 0; index < numero; index++) {
        nome = prompt('Digite o nome do produto').toLowerCase()
        preco = prompt('Digite o preço do produto').toLowerCase()
        categoria = prompt('Digite a categoria do produto').toLowerCase()
        const produto = [nome, preco, categoria]
        listaProdutos.push(produto)
        alert(`Produto ${produto[0]} cadastrado com sucesso`)
    }      
}
function listarProdutos() {
    listaProdutos.forEach((produto) => {
        console.log(`
            Nome: ${produto[0]}
            Preço: ${produto[1]}
            Categoria: ${produto[2]}
            `);
    })
}

function buscarProduto() {
    const buscarCategoria = prompt('Digite a categoria que quer encontrar').toLowerCase();
    let encontrou = false;

    listaProdutos.forEach((produto) => {
        if (buscarCategoria === produto[2]) {
            console.log(`Produto encontrado: ${produto[0]}, Preço: ${produto[1]}, Categoria: ${produto[2]}`);
            encontrou = true;
        }
    });

    if (!encontrou) {
        alert(`Nenhum produto encontrado na categoria: ${buscarCategoria}`);
    }
}





adicionarProduto()
listarProdutos()
buscarProduto()
