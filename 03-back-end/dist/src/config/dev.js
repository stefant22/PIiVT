"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = {
    server: {
        port: 40080,
        static: {
            route: "./static",
            path: "./static/",
            cacheControl: false,
            dotfiles: "deny",
            etag: false,
            index: false,
            maxAge: 360000,
        }
    },
    database: {
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'root',
        databse: "vodic",
        charset: 'utf8',
        timezone: "+01:00"
    }
};
exports.default = Config;
//# sourceMappingURL=dev.js.map