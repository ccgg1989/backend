import { text } from 'express';
import Products from '../models/products.models'
import  Xlsx  from 'xlsx';
import logger from '../logger';
//var workbook = Xlsx.readFile('/src/controllers/test.xlsx');
//var sheet_name_list = workbook.SheetNames;


export const createProducts = async (req, res) => {

    await Products.find().sort({$natural:-1}).limit(1)
    .then((results)=>{
        const Data = results;
        if(Data.length === 0){
            const { nameproducts, descriptions, price, discount, provider, expiration_Data, stock, image, tags} = req.body;
            const idproducts = 1;
            const newProducts = new Products({ 
                idproducts,
                nameproducts, 
                price,
                descriptions, 
                discount, 
                provider, 
                expiration_Data, 
                stock, 
                image,
                tags,
                        })
            const savedProducts =  newProducts.save()
            logger.info(savedProducts)
            res.json('Saved The Number One Product')


        }else {
                const { nameproducts, descriptions, price, discount, provider, expiration_Data, stock, image, tags} = req.body;
                const value = results[0].idproducts;
                const idproducts = value + 1;
                const newProducts = new Products({ 
                    idproducts,
                    nameproducts, 
                    price,
                    descriptions,  
                    discount, 
                    provider, 
                    expiration_Data, 
                    stock,
                    image, 
                    tags,
                            })
                const savedProducts =  newProducts.save()
                logger.info(savedProducts)
                res.json('Saved New Products')
        }

    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}
export const getAllProducts = async (req, res) => {
    await Products.find({}).limit(100)
    .then((results)=>{
        logger.info('ok');
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}
export const getProductsByName = async (req, res) => {
    const name = req.params.nameproducts
    logger.info(name)
    await Products.find({nameproducts: {'$regex': name}})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const getProductsById = async (req, res) => {
    const name = req.params.idproducts
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

export const getProductsByDiscount = async (req, res) => {
    await Products.find({discount: {$ne: null}})
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`})
    })
}

export const putProductsById = async (req, res) => {
    try{
        const updateproduct = await Products.findOneAndUpdate({idproducts: req.params.idproducts}, req.body, {
            new: true
        })
        logger.info(updateproduct);
        res.status(200).json(updateproduct);
    }catch(error){
        logger.debug(error);
    }
}


export const deleteProductsById = async (req, res) => {
    const name = req.params.idproducts
    logger.info(name)
    await Products.find({idproducts: name}).remove()
    .then((results)=>{  
        logger.info(`The product ${name} has been removed`);
        res.json(`The product ${name} has been removed`);
    })
    .catch((error)=>{
        logger.debug(error);
        res.status(400).json({message:`${error}`});
    })
}

export const deleteAllProducts = async (req, res) => {
    await Products.deleteMany({}).remove()
    .then((results)=>{
        logger.info(`The products has been removed`)
        res.json(`The products has been removed`)
    })
    .catch((error)=>{
        logger.debug(error)
        res.status(400).json({message:`${error}`})
    })
}

export const insertExcelProducts = async (req, res) => {

    try{
            var xlData = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            for (let i = 0; i < xlData.length; i++) { 
                const Data = xlData[i];
                const new_Data = Object.values(Data)
                logger.info(new_Data);
                const nameproducts = new_Data[4]; 
                const idproducts = new_Data[0];
                const descriptions = new_Data[5];
                const price = new_Data[3]; 
                const discount = new_Data[2];
                const provider = new_Data[6]; 
                const expiration_Data = new_Data[7];
                const stock = new_Data[1];
                const image = new_Data[8];
                const tags = new_Data[9];

                const newProducts = new Products({ 
                    idproducts,
                    nameproducts, 
                    price,
                    descriptions, 
                    discount, 
                    provider, 
                    expiration_Data, 
                    stock, 
                    image,
                    tags,
                            })
                const savedProducts =  newProducts.save()
                logger.info(savedProducts);
                //res.json('Saved with excel');
            
            }
        }catch(error){
            logger.debug(error);
        }
}