import express from "express";
import mongoose from "mongoose";



interface App_Interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes():void;
}

export class App implements App_Interface{

    PORT:number;
    app:express.Application;

    constructor(){
        this.PORT = 4000;
        this.app = express();
        this.startServer();
        this.initializeRoutes();
        this.connectDatabase();
    }

    startServer():void{
        this.app.listen(this.PORT,()=>{
            console.log("Server Started");
        })
    }
    async connectDatabase(){
        try{
            await mongoose.connect("")
            console.log("Database Connected");
        }catch(err){
            console.log("URL Not Found");
        }
    }
    initializeRoutes():void{
        console.log("Routes Initialized")
    }

}