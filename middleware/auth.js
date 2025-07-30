import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).redirect("/login");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "ppppppppp");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};
