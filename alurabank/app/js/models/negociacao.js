class Negociacao {
    /*     bloco 1
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){

        if (!data){
            //exemplo de retorno de exceção
            throw new Error('Data deve ser preenchida.');
        }

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        //Usando-se esta sintaxe consegue-se o mesmo resultado do "bloco 1" de uma forma menos verbosa, com exceção da execução do throw
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
