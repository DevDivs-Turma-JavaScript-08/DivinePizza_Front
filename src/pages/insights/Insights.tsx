function Insights() {
  return (
    <div>
      <div className="flex flex-col rounded-2xl bg-[#E77F7350] m-10" >
        <div className=" flex justify-center gap-8 p-4  ">
          <div className="bg-(--secondary) rounded-2xl text-center py-3.5 px-8 text-white">
            <p className="text-4xl"> 100</p>
            <p className="text-sm"> Quantidade de pedidos <br/> por mês</p>
          </div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-3.5 px-8 text-white ">
            <p className="text-4xl"> </p>
            <p>R$</p> <p>Lucro Liquido por Mês</p>
          </div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-3.5 px-13 text-white">
            <p className="text-4xl"></p>
            <p> ★ </p> <p>Avaliaçao Geral</p>
          </div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-3.5 px-9 text-white">
            <p> % </p> <p>Índice de Fidelidade <br/> do Cliente</p>
          </div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-3.5 px-6 text-white">
            <p className="text-4xl"> </p>
            <p> R$ </p>
            <p>Gasto Médio com <br/>Fornecedores por Mês</p>
          </div>
        </div>
        <div className=" flex justify-center gap-8 p-4">
          <div className ="bg-(--secondary) rounded-2xl text-center py-25.5 px-64 text-white">Grafico</div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-25.5 px-16 text-white">
            <div className="bg-white rounded-full w-35 h-35 "></div>
            Sabor mais pedido</div>
          <div className ="bg-(--secondary) rounded-2xl text-center py-25.5 px-16 text-white">
            <div className="bg-white rounded-full w-35 h-35 "></div>
            Sabor menos pedido</div>
        </div>
        <div className=" flex justify-center gap-8 p-4">
          <div className ="bg-(--secondary) rounded-2xl text-center py-25.5 px-56 text-white">
            Ultimos pedidos 
            
            </div>
          
          
          <div className ="bg-(--secondary) rounded-2xl text-center py-25.5 px-60 text-white">
            Outros itens
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
