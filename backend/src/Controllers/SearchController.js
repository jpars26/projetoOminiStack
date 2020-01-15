const Dev = require('../models/dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

 async index(request, response){
     //busca todos os dev em um raio de 10 km
     //Filtrar por tecnologias
const {latitude, longitude, techs} = request.query;

const techsArray = parseStringAsArray(techs);

const devs = await Dev.find({
    techs: {
        $in: techsArray,
    },
    location: {
        $near:{
            $geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],
            },

            $maxDistance: 10000,
        },
    },
})

return response.json({ devs })
 }

}