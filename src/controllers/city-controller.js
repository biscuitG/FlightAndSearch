const {CityService} = require('../services/index');

// use request->middleware1->middelware2->..->controller->services->repository->databases

const cityService =new CityService();

// Method type->POST
// data come from ->req.body
const create=async (req,res)=>{
  
    try {

        // it create city with incoming data by req.body
        const city= await cityService.createCity(req.body);
       
        // we need to send json file
        return res.status(201).json({
            data :city,
            success:true,
             message:"Successfully created a city",
            err :{}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success:false,
            messgae: "Not able to create a city",
            err:error
        });
    }

}

// DELETE type request
// url to be deleted , eg-> /city/:id
const destroy= async (req,res)=>{
     
    try {
        
        const response= await cityService.deleteCity(req.params.id);
       
        // we need to send json file
        return res.status(200).json({
            data :response,
            success:true,
             message:"Successfully deleted a city",
            err :{}
        });



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success:false,
            messgae: "Not able to delete a city",
            err:error
        });
    }

}

// request->PATCH
// URL-/city/:id -> this gives route of city you want update
// we have data as req.body
const update= async (req,res)=>{
    
    try {
        const response= await cityService.updateCity(req.params.id,req.body);
       
        // we need to send json f ile
        return res.status(200).json({
            data :response,
            success:true,
             message:"Successfully updated a city",
            err :{}
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success:false,
            messgae: "Not able to update the city",
            err:error
        });
    }
     
}


// re type-> GET 
// url is -> /city/:id
const get= async (req,res)=>{

    try {
        const response= await cityService.getCity(req.params.id);
       
        // we need to send json file
        return res.status(200).json({
            data :response,
            success:true,
             message:"Successfully fethced a city",
            err :{}
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success:false,
            messgae: "Not able to get the city",
            err:error
        });
    }
}

module.exports-{
    create,
    destroy,
    update,
    get
}