class User{
    static tableName ='users';

    constructor(id, nombre, email, idRol){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.idRol = idRol;
    }
}
module.exports= User;