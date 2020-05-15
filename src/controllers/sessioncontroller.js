const coon = require("../database/conn")

module.exports = {
    async Entry(request,response) {
        const {id} = request.body
        const name_ong = await coon("ongs").where("id",id).select("name").first();
        if(!name_ong) {
            return response.status(400).json({error:"No ong found with this ID"})
        }
        else {
            return response.json({name_ong});
        }
    }
    
}