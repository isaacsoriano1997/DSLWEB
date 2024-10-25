const userRepository = require('../repositories/userRepository');
const UserRepository = require('../repositories/userRepository');
class UserService{
    getAllUsers(){
        return userRepository.findAll();
    }
    getUserById(id){
        return userRepository.findById();
    }
    createUser(userData){
        return userRepository.create(userData);
    }
    updateUser(id,userData){
        return userRepository.update(id,userData);
    }
    deleteUser(id){
        return userRepository.delete(id);
    }
}
module.exports= new UserService();