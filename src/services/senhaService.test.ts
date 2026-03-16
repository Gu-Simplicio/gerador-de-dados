import { describe, expect, it } from "vitest";
import gerarSenha from "./senhaService";

describe('senhaService', () => {
    it("Deve gerar uma senha com o tamanho solicitado", () => {
        const tamanho = 15;
        const senha = gerarSenha(tamanho, false, false);

        expect(senha.length).toBe(tamanho);
    });

    it("Deve conter um símbolo especial", () => {
        const senha = gerarSenha(25, true, false);

        const simbolos = ["!", "@", "#", "$", "&", "_", "-", "/", "?"];

        // verifica se pelo menos um dos caracteres da senha é um símbolo
        const temSimbolo = senha.split('').some(char => simbolos.includes(char));

        expect(temSimbolo).toBe(true);
    });

    it("Deve conter números", () => {
        const senha = gerarSenha(25, false, true);

        // regex que checa se é número
        const temNumero = /\d/.test(senha);
    
        expect(temNumero).toBe(true);
    });
});