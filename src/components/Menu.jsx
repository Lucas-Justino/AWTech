import Cupom from "./Cupom";
import ProdutosLista from "./ProdutosLista";

const Menu = () => {
  return (
    <div className="flex flex-row gap-0">
      <div className="w-[700px] h-[870px] border-2 mt-10 ml-10 flex-col">
        <div className="flex justify-center mt-4">
          <h1 className="font-semibold text-[24px]">Selecione seus produtos</h1>
        </div>
        <div>
          <ProdutosLista />
        </div>
      </div>
      <Cupom/>
    </div>
  );
};

export default Menu;
