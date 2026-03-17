/*
    TEM QUE ARRUMAR, O TESTE TÁ RETORNANDO ERROS
*/

import { describe, expect, it, vi } from "vitest";
import getCards from "./appService";

describe('appService', () => {
    it("Deve retornar um array de cards formatados da maneira correta", async () => {
        // prepara uns dados falsos para teste
        const dadosMock = {
            data: [
                {
                    title: "Card 1",
                    text: "Texto 1",
                    btnUrl: "/pagina",
                    btnTxt: "Ir"
                },
                {
                    title: "Card 2",
                    text: "Texto 2",
                    btnUrl: "/pagina2",
                    btnTxt: "Ir2"
                }
            ]
        };

        // altera a função fetch() que será usada no getCards()
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(dadosMock)
            } as Response)
        );

        // recebe o resultado, com o fetch() alterado
        const resultado = await getCards();

        // checa o resultado
        expect(resultado).toEqual(dadosMock);

        //checa se o fetch foi chamado com o caminho certo
        expect(globalThis.fetch).toHaveBeenCalledWith('/cards.json', expect.any(Object));
    });

    it("Deve retornar um erro quando o fetch falhar", async () => {
        // altera a função fetch para retornar um erro
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                status: 404
            } as Response)
        );

        // checa o erro
        await expect(getCards()).rejects.toThrow("Erro HTTP: 404");
    });
});