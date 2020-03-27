const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create(request, response){
    
        const {name,email,whatsapp,city,uf} = request.body;//params está recebendo uma parametro do tipo query
        //console.log(data);
    
    const id = crypto.randomBytes(4).toString('HEX');//criando quatro bytes aleatorios e convertendo em hexadecimal

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({ id });
}
};