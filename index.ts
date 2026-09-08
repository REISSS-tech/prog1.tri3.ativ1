const srv = Bun.serve({
    port: 3000,
    routes: {
        "/": {
            // CORREÇÃO: Tipando o parâmetro como Request
            GET: (a: Request): Response => {
                const url = new URL(a.url);
                const search = url.searchParams;
                const nome = search.get("nome");
                console.log(nome);
                return new Response("oi " + nome);
            }
        },

        "/test": {
            // CORREÇÃO: Tipando o parâmetro como Request
            GET: (req: Request): Response => {
                const url = new URL(req.url);
                const search = url.searchParams;
                const nome = search.get("nome");
                console.log(nome);
                return new Response("professor resenha_GET");
            },

            // CORREÇÃO: Tipando o parâmetro e o retorno da Promise
            POST: async (req: Request): Promise<Response> => {
                const body = await req.text();
                console.log(body);
                return new Response("professor resenha_POST");
            },

            PUT: (): Response => new Response("professor resenha_PUT"),
            DELETE: (): Response => new Response("professor resenha_DELETE")
        }
    }
})

console.log(`Server running: ${srv.url}`)
