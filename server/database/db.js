import mongoose from 'mongoose';
export const connection = async (USERNAME,PASSWORD) => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@giftstore-shard-00-00.taxve.mongodb.net:27017,giftstore-shard-00-01.taxve.mongodb.net:27017,giftstore-shard-00-02.taxve.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7a4m1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=GiftStore`

    try {

      await  mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        

      });
        console.log("Database connected Succesfully")
    } catch (error) {
        console.log(`Error while connecting to the database`, error.message)
    }

}

export default connection;