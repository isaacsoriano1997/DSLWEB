const rolRepository = require('../repositories/rolRepository');

class RolService{
    getAllUsers(){
        return rolRepository.findAll();
    }
    getUserById(id){
        return rolRepository.findById(id);
    }
    createRol(userData){
        return rolRepository.create(userData);
    }
    updateRol(id,userData){
        return rolRepository.update(id,userData);
    }
    deleteRol(id){
        return rolRepository.delete(id);
    }
    async getUserByRole(rolId){
        const rol = await rolRepository.findById(rolId);
        if(!rol){
            throw new Error('Rol not found');
            //console.log('Rol not found');
        }
        const users = await rolRepository.findUserByIdRol(rolId);
        const userbyrol = {
            data: {
                ...rol,
                usuarios: users
            }
        }
        return userbyrol;
    }
}
module.exports= new RolService();