import { describe, expect, it } from "vitest";
import gerarCNPJ from "./cnpjService";

describe('cnpjService', () => {
    it("Espera que seja gerado um CNPJ no formato válido (00.000.000/0001-00)", () => {
        // recebe o CNPJ gerado
        const cnpj = gerarCNPJ();
        // regex para validar o cnpj
        const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;
        
        // valida regex e tamanho do CNPJ
        expect(cnpj).toMatch(regexCNPJ);
        expect(cnpj.length).toBe(18)
    });

    it("Espera que sejam gerados CNPJ's aleatórios e diferentes", () => {
        const cnpj1 = gerarCNPJ();
        const cnpj2 = gerarCNPJ();

        expect(cnpj1).not.toBe(cnpj2);
    });
})