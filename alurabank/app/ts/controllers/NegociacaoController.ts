class NegociacaoController{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor(){
        //Exemplo de casting de um tipo mais genérico no caso "Element" para o tipo "input" usando <HTMLInputElement>
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            //transforma o formato aaaa-mm-dd para aaaa,mm,dd para o construtor da classe Date
            new Date(this._inputData.value.replace(/-/g,',')),

            //transforma para int o conteúdo de _inputQuantidade
            parseInt(this._inputQuantidade.value),

            //transforma para float o conteúdo de _inputValor
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
        

    }
}