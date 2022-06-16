export default function handler(req, res) {
  console.log(req.query);
  return res.send(200);
}
