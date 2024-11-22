const Card = ({ produto, adicionarCarrinho }) => {
  return (
    <div className="w-48 h-56 border-2 flex justify-center flex-col gap-3" onClick={() => adicionarCarrinho(produto)}>
      <div className="flex justify-center">
        <img src={produto.photo} alt={produto.name} className="w-32 h-32" />
      </div>
      <div className="flex justify-center flex-col items-center">
        <span>R$ {produto.price.toFixed(2)}</span>
        <h1 className="font-semibold">{produto.name}</h1>
        <span>Quantidade: {produto.quantity}</span>
      </div>
    </div>
  );
};

export default Card;
