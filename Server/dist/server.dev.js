"use strict";

var express = require("express");

var dotenv = require("dotenv");

dotenv.config({
  path: "./src/Configs/configs.env"
});

var connect = require("./src/Connetction/connection");

var _require = require("./src/Controller/controller"),
    registerUser = _require.registerUser,
    loginUser = _require.loginUser;

var app = express();
app.use(express.json());
app.post("/register", registerUser);
app.post("/login", loginUser); // connection..

app.listen(process.env.PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connect());

        case 3:
          console.log("Server Run At Port http://localhost:".concat(process.env.PORT));
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
//# sourceMappingURL=server.dev.js.map
