import jwt from "jsonwebtoken";

//verifica
export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, "shhhhh", function (err, decoded) {
      if (err) return res.status(403).send({ auth: false, message: "Tu no eres admin" });
      if (decoded.rol == "admin") {
        next();
      } else {
        res.status(403).json({
          message: "Tu no eres admin",
          auth: false
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
