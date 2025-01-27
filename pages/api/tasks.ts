import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./libs/mongodb";
import { IItem } from "./models/taskSchema";
import Item from "./models/taskSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase(); // Connect to MongoDB

  const { method } = req;
  
  try {
    if (method === "GET") {
      // Fetch all items
      const items = await Item.find<IItem>({});
      return res.status(200).json({message: "Items fetched successfully",
        status: true,
        data: items,});
    }

    if (method === "POST") {
      // Create a new item
      const { title,color } = req.body;
      console.log(req.body)
      const newItem = await Item.create({ title,color  } );
      return res.status(201).json(newItem);
    }

    if (method === "PUT") {
      const {id,...updatedData } = req.body;
      console.log(id)
      if (!updatedData) return res.status(400).json({ error: "ID and name are required." });
   
      const updatedItem = await Item.findByIdAndUpdate(id,updatedData, {new:true});
      return res.status(200).json(updatedItem);
    }

    if (method === "DELETE") {
      // Delete an item
      const { id } = req.body;
      console.log("From Task API",id)
      if (!id) return res.status(400).json({ error: "ID is required." });
      await Item.findByIdAndDelete(id);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
