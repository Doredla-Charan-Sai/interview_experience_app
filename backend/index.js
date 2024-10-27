const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
let db = null;
const path = require('path');
const dbpath = path.join(__dirname, 'day3.db');
app.use(express.json());
app.use(cors());

const initializeBDandServer = async ()=>{
    try{
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        });
        app.listen(3000, ()=>{
            console.log("Server is listening at port number 3000");
        });
    }catch(e){
        console.log(`Getting error: ${e.message}`);
        process.exit(1);
    }
};
initializeBDandServer();

app.get('/items', async(request,response)=>{
    const allCompaniesQuery = `SELECT * FROM companies`;
    const allCompaniesList = await db.all(allCompaniesQuery);
    response.send(allCompaniesList);
});

app.post('/company', async (request, response) => {
    const { 
        companyName, role, CTC, shortlist, round1, round1Info, round2, 
        round3, round4, round5, codingAsked, codingQuestionsTopic, hr 
    } = request.body;

    const insertQuery = `
        INSERT INTO companies (
            companyName, role, ctc, shortlist, round1, round1Info, round2, 
            round3, round4, round5, codingAsked, codingTopics, hr
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        companyName,
        role,
        CTC,
        shortlist,
        round1,
        round1Info || null,       
        round2 || null,
        round3 || null,
        round4 || null,
        round5 || null,
        codingAsked ? 1 : 0,      
        codingAsked ? codingQuestionsTopic : null,
        hr
    ];

    const output = await db.run(insertQuery, values);
    response.status(201).send("Company added successfully!");
});
