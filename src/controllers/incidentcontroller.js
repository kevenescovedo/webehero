const conn = require("../database/conn")

module.exports = {
    async Index(request,response) {
        const {page} = request.query
        // como que eu sei que isto retorna varios eu so preciso pegar ainformcação no começo array por isso pego [´count] mais pode ser count[0]
        var  [count] = await conn("incidents").count()
        response.header("X-total_count",count['count(*)'])
        //limite irá limitar a quantidade de registros e ofsset irei mostrar em 5 registros
        var incidents = await conn("incidents").join("ongs","ongs.id","=","incidents.ong_id").limit(5).offset((page -1) * 5).select(['incidents.*','ongs.name','ongs.uf','ongs.city','ongs.email','ongs.whatsapp']);
        return response.json(incidents);
    },
    async Create(request,response) {
  var {title, description,value} = request.body
  //informações como qual usuario está logado, sobre empresa e idioma e localização vem através do cabeçalho da requisição 
  //request.headers
  var ong_id = request.headers.authorization
  var [id] = await conn("incidents").insert({
       title,
       description,
       value,
       ong_id
   })
   return response.json({id})
    },
    
    async Delete(request,response) {
       var {id} = request.params
      var ong_id = request.headers.authorization
      var incient =  await conn("incidents").where("id",id).select('ong_id').first()
      if(incient.ong_id != ong_id) {
          // mudar estado code 401 usuario não tem autorização para alterar ou exlcuir
          return response.status(401).json({error :"Operação não permitida"})
      }
       else {
        await conn("incidents").where("id",id).delete()
           // mudar estado code 204 resposta para requisição sem conteudo
        return  response.status(204).send()
    
       }

    }

}