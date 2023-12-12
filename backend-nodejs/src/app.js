"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get('/api/liveness', function (req, res) {
    res.status(200).json({ message: 'OK' });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=app.js.map