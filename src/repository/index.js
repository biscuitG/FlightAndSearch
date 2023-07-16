// reason for this index.js as in service repo i have call all repoone by one ,so  just export from index once and then just call whichever we want , this is for clean code

module.exports={
    CityRepository : require('./city-repository')
}

