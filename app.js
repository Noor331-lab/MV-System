const express = require("express");
const path = require("path");


const app = express();


app.use(
    express.json()
);


app.use(
    "/public",
    express.static(
        path.join(__dirname,"public")
    )
);



app.get("/",(req,res)=>{

    res.sendFile(
        path.join(
            __dirname,
            "dashboard.html"
        )
    );

});



app.get("/api/stats",(req,res)=>{

    res.json({

        servers:125,
        members:48000,
        tickets:24,
        ping:18

    });

});



app.listen(3000,()=>{

    console.log(
        "Dashboard started"
    );

});
