const express = require('express');
const rolService = require('../services/rolService');
const router = express.Router();

router.get('/', async(req, res) =>{
    const rols = await rolService.getAllUsers();
    res.json(rols);
})
router.get('/:id',async(req,res)=>{
    const rol = await userService.getUserById(req.params.id)
    if(user){
        res.json(rol);
    }
    else{
        res.status(404).json({message:'User not found'});
    }
})

router.post('/', async (req, res) => {
    const newRol = await rolService.createRol(req.body);
    res.status(201).json(newRol);
}); 

router.put('/:id', async (req, res) => {
    const updatedRol = await rolService.updateRol(req.params.id, req.body);
    if (updatedRol) {
      res.json(updatedRol);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    const deleted = await rolService.deleteRol(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  router.get('/roles/:rolId', async(req, res)=>{
    try{
        const result = await rolService.getUserByRole(req.params.rolId)
        res.json(result);
    }catch(error){
        if(error.message === 'Rol not found'){
            res.status(404).json({error: error.message})
        }else{
            res.status(500).json({erro: error.message})
        }
    }
  })
  module.exports=router;
  
module.exports = router;