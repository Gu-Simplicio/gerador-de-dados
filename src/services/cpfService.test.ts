import { describe, expect, it } from "vitest";
import gerarCPF from "./cpfService";

describe('cpfService', () => {
    it("Deve retornar um CPF no formato válido (000.000.000-00)", () => {
        // recebe o cpf gerado
        const cpf = gerarCPF();

        // regex para validação do formato
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        expect(cpf).toMatch(regexCPF); // checa o regex
        expect(cpf.length).toBe(14); // checa tamanho do cpf (considerando . e -)
    });

    it("Deve retornar CPF's aleatórios e diferentes", () => {
        const cpf1 = gerarCPF();
        const cpf2 = gerarCPF();

        expect(cpf1).not.toBe(cpf2);
    });
})