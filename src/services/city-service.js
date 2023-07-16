const {CityRepository}= reuqire('../repository/index');

// when we will call city service , a new city repository will create
class CityService{
   
    constructor(){
         this.cityRepository = new CityRepository();
    }
  
    async createCity(data){
        try {
            const city= await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong");
             throw{error};
        }
    }


    async deleteCity(cityId){
        try {
          const response=await this.cityRepository.deleteCity(cityId);
          return response;
        } catch (error) {
            console.log("Something went wrong");
            throw{error};
        }
    }


    async updateCity(cityId,data){
        try {
           const city = await this.cityRepository.updateCity(cityId,data);
           return city;
        } catch (error) {
            console.log("Something went wrong");
            throw{error};
        }
    }


    async getCity(cityId){
        try {
           const city= await this.cityRepository.getCity(cityId);
        } catch (error) {
            console.log("Something went wrong");
            throw{error};
        }
    }


}