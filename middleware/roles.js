exports.hasPermission = function (operation) {
  return async (req, res, next) => {
    if (req.user.roles.operations.indexOf(operation) != -1) {
      next();
    } else {
      res.status(403).send("You do not have permission to this operation!");
    }
  };
};
