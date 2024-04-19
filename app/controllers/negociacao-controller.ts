import { Negociacao } from "../models/negociacao.js";

export class NegociacaoContoller {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement; 
    private inputValor: HTMLInputElement;;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');
    }

    adiciona() {  
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }

    criaNegociacao () {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);  
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}