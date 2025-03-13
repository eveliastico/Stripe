// import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/';
const dbName = 'stripe';

class dbClient{

    constructor(){
        this.conectarBD();
    } 

    async conectarBD(){
        try{
            this.options = {};
            await mongoose.connect(url+dbName, this.options);
            console.log('Coneccion exitosa a la base de datos...');
        }catch(error){
            console.error('Error al conectar a la base de datos...'+ error);
        }
    }

    async desconectarBD(){
        try{
            await mongoose.disconnect();
            console.log('Desconexion exitosa...');
        }catch(error){
            console.error('Error al desconectar de la base de datos...'+ error);
        }
    }
        
}

export default new dbClient();