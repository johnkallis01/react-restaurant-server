// router.get('/', async (req,res)=>{
//     console.log('GET MENUS');
//     try{
//         const menus = await Menu.find();
//         res.json(menus)
//     }catch(err){
//         res.status(500).json({error: err.message,message: "menus not found"}) 
//     }
// });
import { getMenus } from '../../../controllers/menu.controller.js';

export default async function handler(req, res) {
    if( req.method === 'GET'){
        await getMenus(req,res);
    } else{
        res.status(405).json({message: 'method not allowed'});
    }
}