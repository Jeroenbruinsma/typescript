"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./pages/controller");
const port = process.env.PORT || 4000;
const app = routing_controllers_1.createKoaServer({
    controllers: [
        controller_1.default
    ]
});
app.listen(port, () => console.log(`Listening on port ${port}`));
console.log("hello world");
console.log("hello world");
console.log("hello world");
//# sourceMappingURL=index.js.map