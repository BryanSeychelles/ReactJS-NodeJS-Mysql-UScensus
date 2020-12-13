const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Jamspace',
    port: 8889
});

app.use(cors())
app.use(express.json())


app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * from census_learn_sql "
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/classofworker", (req,res) => {
    const sqlSelect = "SELECT COUNT(classofworker), classofworker, AVG(age) FROM census_learn_sql GROUP BY classofworker"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/education", (req,res) => {
    const sqlSelect = "SELECT COUNT(education), education, AVG(age) FROM census_learn_sql GROUP BY education"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/lasteducation", (req,res) => {
    const sqlSelect = "SELECT COUNT(lasteducation), lasteducation, AVG(age) FROM census_learn_sql GROUP BY lasteducation"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/maritalstatus", (req,res) => {
    const sqlSelect = "SELECT COUNT(maritalstatus), maritalstatus, AVG(age) FROM census_learn_sql GROUP BY maritalstatus"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/majorindustrycode", (req,res) => {
    const sqlSelect = "SELECT COUNT(majorindustrycode), majorindustrycode, AVG(age) FROM census_learn_sql GROUP BY majorindustrycode"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/mace", (req,res) => {
    const sqlSelect = "SELECT COUNT(mace), mace, AVG(age) FROM census_learn_sql GROUP BY mace"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/sex", (req,res) => {
    const sqlSelect = "SELECT COUNT(sex), sex, AVG(age) FROM census_learn_sql GROUP BY sex"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/birthcountry", (req,res) => {
    const sqlSelect = "SELECT COUNT(birthcountry), birthcountry, AVG(age) FROM census_learn_sql GROUP BY birthcountry"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get("/api/citizenship", (req,res) => {
    const sqlSelect = "SELECT COUNT(citizenship), citizenship, AVG(age) FROM census_learn_sql GROUP BY citizenship"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.listen (3001, () => {
    console.log('listen on port 3001');
})

