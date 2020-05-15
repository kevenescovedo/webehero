const conn = require("../database/conn")
const crypto = require("crypto")

module.exports = {
    async create(request,response) {
        var  {name,whatsapp, email, city, uf} = request.body
    
        const id = crypto.randomBytes(4).toString("HEX")
       await conn("ongs").insert({
            id,
            name,
            whatsapp,
            email,
            city,
            uf,
        })
      return  response.json({id})
    },
    async Index(request,response) {
        var ongs = await conn("ongs").select("*")
        return response.json(ongs);
    }

}