// requiring express
const express = require(`express`)
// initializing express
const app = express();

// (`/:file`) is a url parameter
// http://localholst:3000/home, http://localholst:3000/home, http://localholst:3000/home/about)
// must ALWAYS send a res.(response)
// responds with all the requested files!
app.get(`/:file`, (req, res) => {
    // res.end(req.params.file);
    res.sendFile(path.join(__dirname, `html`, `${req.params.file}.html`));
});

app.get(`/:file`, (req, res) => {
    if (req.params.file === `home` || req.params.file === `contact` || req.params.file === `about`) {
        res.sendFile(path.join(__dirname, `html`, `${req.params.file}.html`))
    } else {
        res.sendFile(path.join(__dirname,`html`, `404.html`))
    }
});

app.get(`/`, (req, res) => {
    // res.sendFile(path.join(__dirname, `html`, `home.html`))
    // res.redirect(`/home`);
    res.location(`/home`);
});

// pro level move, catches all other requests and sends the 404 page!
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `html`, `404.html` ))
})



// not sure what im doing wrong here 
app.get(`/:file`, (req, res) => {
        res.sendFile(path.join(__dirname, `html`, `${req.params.file}.html`), err => { 
        if (err) {
            res.sendFile(path.join(__dirname, `html`, `404.html`))
        })
        });
});

// http://localhost:3000
app.get(`/`, function(req, res) {
    res.sendFile(path.join(__dirname, `html`, `home.html`));
});

// http://localhost:3000
app.get(`/about`,)

// starting server
app.listen(3000, () => {
    console.log(`>>>server Started<<<`)
})

// app.get()
// `get is a   of app
// a method is just a function that belongs to method