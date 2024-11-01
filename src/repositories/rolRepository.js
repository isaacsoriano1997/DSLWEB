const CrudRepository= require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository{
    constructor(){
        super(Rol);
    }
    async findUserByIdRol(rolId){
        const [rows] = await this.pool.query(`SELECT * FROM rol r inner join users u on r.id=u.idRol WHERE r.id=?`,[rolId]);
        return rows;
    }
}
module.exports= new RolRepository();