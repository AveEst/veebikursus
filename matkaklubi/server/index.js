const http = require("http");
const host = 'localhost';
const port = 8080;



const matkadeAndmed={
    kogus: 5,
    labiviija:"Ave Arak",
    matkad:[
        {
            
            pealkiri:"Käsmu rahnude matk. ",
            labiviija: "Ave Arak",
            sisu: "lorem lalalalalalalala",
            pildiUrl: "https://loodusring.ee/sites/default/files/kasmu_2.jpeg",
            kestvus: "ca 4 tundi. ",
            pikkus: " 10-20 km .",
            kogunemiskoht: "Käsmu poe parklas. ",
            ryhma_suurus: "kuni 16 inimest ühe retkejuhi kohta. ",
            hind: "280.- eur / 1 rühm.",

        },
        {
            pealkiri:"Päikeseloojangumatk. ",
            kestvus:"2,5-3 tundi. ",
            sisu:"jsakdsjkladlksajdlksaj",
            pildiUrl:"../kasmu_2.peg",
            kogunemiskoht:"Eesti Kaevandusmuuseumi parklas. ",
            ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
            hind:  "240 € ühe rühma kohta. ",
        },
        {
            
            
            pealkiri:"Jalgsimatk filmi Viimse Reliikvia radadel. ",
            kestvus: "ca 3-4 tundi tundi. ",
            sisu:"ksalkdölsakdlaskdölsa",
            pildiUrl:"../kasmu_2.peg",
            pikkus: " 6 km .",
            kogunemiskoht: " Saesaare küla. ",
            ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
            hind:"12 €. ",
        },
        {
            
                pealkiri:"Päikeseloojangumatk. ",
                kestvus:"2,5-3 tundi. ",
                sisu:"jsakdsjkladlksajdlksaj",
                pildiUrl:"../kasmu_2.peg",
                kogunemiskoht:"Eesti Kaevandusmuuseumi parklas. ",
                ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
                hind:  "240 € ühe rühma kohta. ",},
                {
                    pealkiri:"Päikeseloojangumatk. ",
                    kestvus:"2,5-3 tundi. ",
                    sisu:"jsakdsjkladlksajdlksaj",
                    pildiUrl:"../kasmu_2.peg",
                    kogunemiskoht:"Eesti Kaevandusmuuseumi parklas. ",
                    ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
                    hind:  "240 € ühe rühma kohta. ",},
                    {
                        pealkiri:"Päikeseloojangumatk. ",
                        kestvus:"2,5-3 tundi. ",
                        sisu:"jsakdsjkladlksajdlksaj",
                        pildiUrl:"../kasmu_2.peg",
                        kogunemiskoht:"Eesti Kaevandusmuuseumi parklas. ",
                        ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
                        hind:  "240 € ühe rühma kohta. ",

        },
        {
            
            pealkiri:"Jalgsimatk filmi Viimse Reliikvia radadel. ",
            kestvus: "ca 3-4 tundi tundi. ",
            sisu:"ksalkdölsakdlaskdölsa",
            pildiUrl:"../kasmu_2.peg",
            pikkus: " 6 km .",
            kogunemiskoht: " Saesaare küla. ",
            ryhma_suurus:"kuni 16 inimest ühe retkejuhi kohta. ",
            hind:"12 €. ",
        },
    ]
};

const requestListener = function (req, res) {
        res.setHeader("Content-Type","application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.end(JSON.stringify(matkadeAndmed));
        
    };

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

//Node.js Web Server
//https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server



