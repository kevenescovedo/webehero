const express = require("express")

const conn = require("./database/conn")
const ongcontroller = require("./controllers/ongController")
const incidentcontroller = require("./controllers/incidentcontroller")
const profilecontroller = require("./controllers/profillecontroller") 
const sessioncontroller = require("./controllers/sessioncontroller") 
const routes = express.Router();

routes.get("/", (require,response) => {
    //return  response.send("hello word");
    return response.json({
        name: "Mysterhero",
        C_level : "CEO"
    })

    
})
//

// pegando parametro do tipo query
//http://localhost:3333/users?name=keven
routes.get("/users", (require,response) => {
    const params = require.query
    console.log(params);
    return response.json({
        name: "keven",
        email: "kevenescovedo1916@gmail.com"
    })
})
//http://localhost:3333/users/1
routes.get("/users/:id", (require,response) => {
    const params = require.params
    console.log(params);
    return  response.send("hello word");
})
//http://localhost:3333/users
routes.post("/users", (require,response) => {
    const body = require.body
    console.log(body);
    return  response.json(body);
})
routes.get("/ongs",ongcontroller.Index)
routes.post("/ongs", ongcontroller.create)
routes.get("/incidents",incidentcontroller.Index)
routes.post("/incidents",incidentcontroller.Create)
routes.delete("/incidents/:id",incidentcontroller.Delete)
routes.post("/sessions",sessioncontroller.Entry)
routes.post("/profile",profilecontroller.Index)

module.exports = routes