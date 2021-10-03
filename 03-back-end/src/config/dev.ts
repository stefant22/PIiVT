import Iconfig from "./Iconfig.interface";

const Config: Iconfig={
    server:{
        port:40080,
        static: {
            route:"./static",
            path:"./static/",
            cacheControl:false,
            dotfiles:"deny",
            etag:false,
            index:false,
            maxAge:360000,

        }
    }
}

export default Config;