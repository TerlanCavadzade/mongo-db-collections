let express = require('express')
let app = express()
let path = require('path')
let fs = require('fs')
let methodOverride = require('method-override')

let mines = require("./model/mines")
let aboutMines = require("./model/aboutMines")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demirfiliz', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })
mongoose.set('useFindAndModify', false);


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});



app.listen(3000, '192.168.1.105', async () => {
    console.log("listening on 3000")
})

// list of all mines
app.get("/mines", async (req, res) => {
    let mineList = await mines.find()
    return res.status(200).json(mineList)
})

// About specific mine
app.get("/mines/:name", async (req, res) => {
    const {
        name
    } = req.params
    let aboutMine = await aboutMines.find({
        mine: name
    })
    return res.status(200).json(aboutMine[0])
})

// Add new mine
app.post("/new", async (req, res) => {
    const {
        mine,
        aboutMineShort,
        aboutMine,
        aboutCollar
    } = req.body

    let collars = Object.keys(aboutCollar)

    let excistingMine = await mines.find({
        mine
    })


    if (excistingMine[0]) {
        return res.status(400).json({
            error: "Bu Meden Bazada movcuddur."
        })
    }

    if (!mine && !aboutMineShort && !aboutMine && !aboutCollar) {
        return res.status(400).json({
            error: "Formu Tam doldurun"
        })
    }
    if (mine && aboutMineShort && aboutMine && aboutCollar) {
        let newMine = new mines({
            mine,
            collars,
            about: aboutMineShort
        })
        await newMine.save()

        let newAboutMine = new aboutMines({
            mine,
            aboutMine: aboutMine,
            aboutCollars: aboutCollar
        })
        await newAboutMine.save()
        return res.status(200).json("added succesfully")
    }
})

// Delete Mine

app.delete("/delete/:id", async (req, res) => {
    const {
        id
    } = req.params


    let found = await mines.findById(id)
    await aboutMines.findOneAndDelete({
        mine: found.mine
    })
    await mines.findByIdAndDelete(id)

    let mineList = await mines.find()
    return res.status(200).json({
        message: "Silindi",
        mineList
    })
})