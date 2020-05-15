const coon = require("../database/conn")
module.exports = {
async Index(request,response) {
    var ong_id = request.headers.authorization;
    var ong_id = request.headers.authorization;
    var ong_id = request.headers.authorization;
    var ong_id = request.headers.authorization;
    const incidents = await coon("incidents").where("ong_id",ong_id).join('ongs','ongs.id', '=','incidents.ong_id').select("incidents.*",'ongs.name','ongs.whatsapp','ongs.email','ongs.city','ongs.uf');
    return response.json(incidents);
}
}