const srv = Bun.serve({
    port: 3000,
    routes: {
        "/test": {
            GET: (req) => {
                const url = new URL(req.url)
                const search = url.searchParams
                const nome = search.get("nome")
                console.log(nome)
                new Response("professor resenha_GET")
            },

            POST: async (req) => {
                const body = await req.body.text()
                console.log(body)
                return new Response("professor resenha_POST")
            },

            PUT: () => new Response("professor resenha_PUT"),
            DELETE: () => new Response("professor resenha_DELETE")
        }
    }
})

console.log(`Server running: ${srv.url}`)
