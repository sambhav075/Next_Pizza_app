import db from "@/utils/db";
import PizzaData from "@/models/PizzaData";

export default async function handler(req, res) {
   
       
      if(req.method === "POST")
        {
          await db.connect();
  
          let data = await PizzaData.findById(req.body.item);
           res.status(200).json({data});
        }

        db.disconnect();
    }