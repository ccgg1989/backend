import { text } from 'express';
import Cookies from '../models/cookies.models'
import logger from "../logger";

export const createCookies = async (req, res) => {
    console.log(req.body)

    try{
        await Cookies.find().sort({$natural:-1}).limit(1).then((results)=>{
            const Data = results;
            if(Data.length === 0){
                const { user, mac, action, isLogged, datetime, location, idP} = req.body;
                const idcookies = 1;
                const newCookies = new Cookies({ 
                idcookies, user, mac, action, isLogged, datetime,location, idP
                })
                const savedCookies =  newCookies.save()
                logger.info(savedCookies);
                res.json('Saved The Number One Cookies!!')
            }else{
                const { user, mac, action, isLogged, datetime, location, idP} = req.body;
                const value = results[0].idcookies;
                const idcookies = value + 1;
                const newCookies = new Cookies({ 
                idcookies, user, mac, action, isLogged, datetime,
                })
                const savedCookies =  newCookies.save()
                logger.info(savedCookies);
                res.json('Saved New Cookies!!')

            }
        })
    }catch(error){
        logger.debug(error);
    }
}

export const getAllCookies = async (req, res) => {
 await Cookies.find({}).then((results)=>{
    logger.info(results);
    res.json(results)
    })
    .catch((error)=>{
        logger.info(error)
        res.status(400).json({message:`${error}`})
     })
}

export const getCookiesById = async (req, res) => {
    const name = req.params.idcookies
    logger.info("get cookies by id: ", name)
    await Cookies.find({idcookies: name })
    .then((results)=>{
        logger.info(results);
        res.json(results)
    })
    .catch((error)=>{
        logger.info(error);
        res.status(400).json({message:`${error}`})
    })
}

export const putCookiesById = async (req, res) => {
    try{
        const updatecookies = await Cookies.findOneAndUpdate({idcookies: req.params.idcookies}, req.body, {
            new: true
        })
        logger.info(updatecookies);
        res.status(200).json(updatecookies);

    }catch(error){
        logger.debug(error);
    }
}

export const deleteCookiesById = async (req, res) => {
    const name = req.params.idcookies
    logger.info("delete cookies by id", name)
    await Cookies.find({idcookies: name}).remove()
    .then((results)=>{
        logger.info(`The Cookie ${name} has been removed`)
        res.json(`The Cookie ${name} has been removed`)
    })
    .catch((error)=>{
        logger.debug(error)
        res.status(400).json({message:`${error}`})
    })
}

export const deleteAllCookies = async (req, res) => {
    await Cookies.deleteMany({}).remove()
    .then((results)=>{
        logger.info(`All the cookies has been removed`)
        res.json(`The cookies has been removed`)
    })
    .catch((error)=>{
        logger.debug(error)
        res.status(400).json({message:`${error}`})
    })
}
