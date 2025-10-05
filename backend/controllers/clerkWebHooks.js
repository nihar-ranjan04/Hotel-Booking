import User from "../model/User.js";
import { Webhook } from "svix";

const clerkWebHooks = async (requestAnimationFrame, res) => {
    try {
        //create a svix instanse
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers = {
            "svix-id": req.headers["svix-id"];
            "svix-time": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };
        await whook.verify(JSON.stringify(req.body), headers)
        const { data, type } = req.body;
        const userData = {
            _id: data.id,
            emmail:data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }
        //switch case for different events
        switch(type){
            case "user.created":
                await User.create(userData);
                break;
            case "user.updated":
                await User.findByIdAndUpdate( data.id, userData);
                break;
            case "user.deleted":
                await User.findByIdAndDelete(data.id);
                break;
            default:
               break;
    
        }
        res.json({ success:true, message: "Webhook received successfully" })

    }
    catch (error) {
        console.log(`Error in clerkWebHooks : ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }

    export default clerkWebHooks;
}
