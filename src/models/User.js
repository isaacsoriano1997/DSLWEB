class User{
    static tableName ='users';

    constructor(id, nombre, email){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}
module.exports= User;