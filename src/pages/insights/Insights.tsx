function Insights() {
  return (
    <div>
      <div className="bg-white">
        <div className="bg-amber-200 flex justify-center gap-8 p-4 ">
          <div className="bg-(--secondary) rounded-2xl text-center py-3.5 px-5 text-white">
            <p className="text-4xl"> 100</p>
            <p className="text-sm"> Quantidade de pedidos por mês</p>
          </div>
          <div>
            <p>R$</p> <p>Lucro liquido por mês</p>
          </div>
          <div>
            <p> estrela </p> <p>Avaliacao Geral</p>
          </div>
          <div>
            <p> % </p> <p>Indice de fidelidade do cliente</p>
          </div>
          <div>
            <p> R$ </p>
            <p>Gasto médio com fornecedores por mês</p>
          </div>
        </div>
        <div className="bg-amber-300 flex justify-center gap-8">
          <div>grafico</div>
          <div>sabor mais pedido</div>
          <div>sabor menos pedido</div>
        </div>
        <div className="bg-amber-400 flex justify-center gap-8">
          <div>ultimos pedidos</div>
          <div>outros itens</div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
