import { API_BACK } from "@/config/index";
import axios from "axios";
export default async function items(req, res) {
  if (req.method === "POST") {
    try {
      const items = req.body;
      const strapi = await axios.post(`${API_BACK}/auth/local`, items);
      res.status(200).json({ dashboard: strapi.data.items });
    } catch (error) {
      res
        .status(error.response.data.statusCode)
        .json({ message: error.response.data.message[0].messages[0].message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Is Not Allowed` });
  }
}
