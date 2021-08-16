import data from "../data.json";

export default async function prodcuts(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ user: data });
  } else {
    res.setHeader("Allow", [`GET`]);
    res.status(405).json({ message: `Method ${req.method} Is Not Allowed` });
  }
}
