const {City} =require('../models/index');

 class CityRepository{

     // Creating new city By model City
    async createCity({name}){

     try{
       const city= await City.create({name});
       return city;
     }catch(error){
      console.log("Some error in creation");
          throw{error};
     }

    }
    // Deleting city By model City by where clause
    async deleteCity({cityId}){
    try{
        await City.destroy({
            where :{
                Cityid : cityId
            }
        });

        return true;
      }catch (error){
        console.log("Some error in deletion")
        throw{error};
      }

    }
   // updating existing city By model City
   async updateCity(cityId,data){
       
    try{
      const city= await City.update(data,{
        where :{
          id:cityId
        }
      });
      return city;
    }catch(error){
      console.log("Something error in update");
      throw{error};
    }

   }
    
    // get city by cityid using model City
   async getCity(cityId){
        try{
          const city=await City.findByPk(cityId);
          return city;
        }catch(error){
          console.log("Some error occured");
          throw{error};
        }
   }


 }

 module.exports=CityRepository;