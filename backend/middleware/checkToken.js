const checkToken = (req, res, next) => {
  const header = req.headers.cookie;

  if (typeof header !== "undefined") {
    const token = header.split('=')[1].replace('Bearer%20', '');
    req.token = token;
    next();
  } else {
    res.status(403).json({message:"Unauthorized! access denied!"});
  }
};
module.exports = checkToken;
