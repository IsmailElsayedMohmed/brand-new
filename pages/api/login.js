import { API_BACK } from "@/config/index";
import axios from "axios";
import cookie from "cookie";
export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const { identifier, password } = req.body;
      const strapi = await axios.post(`${API_BACK}/auth/local`, {
        identifier,
        password,
      });
      console.log(strapi);
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", strapi.data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ user: strapi.data.user });
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
