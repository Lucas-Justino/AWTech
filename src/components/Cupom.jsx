const Cupom = () => {
    return(
        <div className="w-56 h-72 bg-[#F5F5F5] mt-10 flex flex-col items-center p-4 gap-4">
            <h1 className="font-semibold text-lg">
                Resumo do Pedido
            </h1>
            <div className="flex flex-row justify-around w-full">
                <h1 className="font-semibold">
                    Item
                </h1>
                <h1 className="font-semibold">
                    Total 
                </h1>
            </div>
        </div>
    );
}

export default Cupom;