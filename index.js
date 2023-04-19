import express from 'express';

const app = express();


const students=[
    {
        id:1,
        name:"ali",
        city:"alex"
    },
    {
        id:2,
        name:"ashraf",
        city:"ciro"
    },
    {
        id:3,
        name:"sami",
        city:"tanta"
    },
    {
        id:4,
        name:"nader",
        city:"tanta"
    },
    {
        id:5,
        name:"yossef",
        city:"tanta"
    },
    {
        id:6,
        name:"medhat",
        city:"tanta"
    }

];

const studentsFun= (request , response ) =>{
    let output='<ul>'
    
    for(let i=0 ; i<students.length;i++){
        const student = students[i];
        output+="<li>" + student.name + "</li>";
    }
    
    output+='</ul>'
    response.send(output);
    };

    app.get('/students', studentsFun)
    app.listen(3000);
