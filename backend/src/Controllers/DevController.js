const axios = require('axios')
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

// index(MOSTRAR LISTA), show(APENAS UM), store(CRIAR), update(ALTERAR), destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find()

        return response.json(devs)

    },

    async store(request, response)  {
    
        const {github_username, techs, latitude, longitude} = request.body;
       
        let dev = await Dev.findOne({ github_username })
       
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const {name = login, avatar_url, bio } = apiResponse.data;
            
            const techsArray = parseStringAsArray(techs) 
            
            const location = {
                type: 'Point',
                coordinates: [latitude, longitude]
            }
        
            const dev = await Dev.create( {
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        
       
       
        return response.json(dev);
    
    }
}