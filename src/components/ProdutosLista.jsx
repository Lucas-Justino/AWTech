import { useState } from "react";
import Card from "./Card";
import produtos from './produtos';

const ProdutosLista = () => {

    const [carrinho, setCarrinho] = useState([]);

    const adicionarCarrinho = (produto) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto])
        console.log(carrinho);
    }

  return (
    <div className="grid grid-cols-3 px-12 py-4 gap-12">
      {produtos.map((produto, index) => (
        <Card key={index} produto={produto} adicionarCarrinho={adicionarCarrinho} />
      ))}
    </div>
  );
};  
 
export default ProdutosLista;
