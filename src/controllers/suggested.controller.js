import { text } from 'express';
import Suggested from '../models/suggested.models';
import  Xlsx  from 'xlsx';
import logger from '../logger';
//var workbook = Xlsx.readFile('/src/controllers/test.xlsx');
//var sheet_name_list = workbook.SheetNames;

export const createSuggested = async (req, res) => {

    await Suggested.find().sort({$natural:-1}).limit(1)
    .then((results)=>{
        const Data = results;
        if(Data.length === 0){
            const { namesuggested , descriptions, price, discount, provider, expiration_Data, stock, image, tags} = req.body;
            const idsuggested = 1;
            const newSuggested = new Suggested({ 
                idsuggested,
                namesuggested , 
                price,
                descriptions, 
                discount, 
                provider, 
                expiration_Data, 
                stock,
                image, 
                tags,
                        })
            const savedSuggested =  newSuggested.save()
            logger.info(savedSuggested)
            res.json('Saved The Number One Suggested')


        }else {
                const { namesuggested, descriptions, price, discount, provider, expiration_Data, stock, image, tags} = req.body;
                const value = results[0].idsuggested;
                const idsuggested = value + 1;
                const newSuggested = new Suggested({ 
                    idsuggested,
                    namesuggested, 
                    price,
                    descriptions,  
                    discount, 
                    provider, 
                    expiration_Data, 
                    stock,
                    image, 
                    tags,
                            })
                const savedSuggested =  newSuggested.save()
                logger.info(savedSuggested)
                res.json('Saved New Suggested')
        }

    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}
export const getAllSuggested = async (req, res) => {
    await Suggested.find({})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const getSuggestedDiscount = async (req, res) => {
    await Suggested.find({discount: {$ne: null}})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const getSuggestedByName = async (req, res) => {
    const name = req.params.namesuggested
    logger.info(name)
    await Suggested.find({namesuggested: {'$regex': name}})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const getSuggestById = async (req, res) => {
    const name = req.params.idsuggested
    logger.info(name)
    await Products.find({idproducts: name})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const putSuggestedById = async (req, res) => {
    try{
        const updatesuggested = await Suggested.findOneAndUpdate({idsuggested: req.params.idsuggested}, req.body, {
            new: true
        })
        logger.info(updatesuggested);
        res.status(200).json(updatesuggested);
    }catch(error){
        logger.debug(error);
    }
}


export const deleteSuggestedById = async (req, res) => {
    const name = req.params.idsuggested
    logger.info(name)
    await Suggested.find({idsuggested: name}).remove()
    .then((results)=>{  
        logger.info(`The suggested ${name} has been removed`)
        res.json(`The suggested ${name} has been removed`)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const deleteAllSuggested = async (req, res) => {
    await Suggested.deleteMany({}).remove()
    .then((results)=>{
        logger.info(`The suggested has been removed`)
        res.json(`The suggested has been removed`)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}



export const insertExcelSuggested = async (req, res) => {

    try{
            var xlData = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            for (let i = 0; i < xlData.length; i++) { 
                const Data = xlData[i];
                const new_Data = Object.values(Data)
                logger.info(new_Data);
                const namesuggested = new_Data[4]; 
                const idsuggested = new_Data[0];
                const descriptions = new_Data[5];
                const price = new_Data[3]; 
                const discount = new_Data[2];
                const provider = new_Data[6]; 
                const expiration_Data = new_Data[7];
                const stock = new_Data[1];
                const image = new_Data[8];
                const tags = new_Data[9];

                const newSuggested = new Suggested({ 
                    idsuggested,
                    namesuggested , 
                    price,
                    descriptions, 
                    discount, 
                    provider, 
                    expiration_Data, 
                    stock,
                    image, 
                    tags,
                            })
                const savedSuggested =  newSuggested.save()
                logger.info(savedSuggested);
            
            }
    }catch(error){
        logger.debug(error);
    }
}