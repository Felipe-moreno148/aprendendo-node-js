async function exemplo(request, response) {
    const segredo = process.env.SEGREDO;
    const dynamicDate = new Date();

    const exemplo1 = await fetch(`informação sensível${segredo}`)
    const exemplo1Json = await exemplo1.json();
    const exemplo2 = exemplo1Json.info;

    response.json({
        date: dynamicDate.toGMTString()
    },
    {
        ex2: exemplo2.toGMTString()
    },
);
}

export default exemplo;