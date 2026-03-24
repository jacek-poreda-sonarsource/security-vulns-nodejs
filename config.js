const config_local = {
    //ACR-3c80c181e8cd4362b4147b21a817cddd
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
}
const config_devel = {
    //ACR-8826c71a29ab4aa2802ca1792a950cea
    "db": {
        "server": "postgres://postgres:postgres@10.211.55.70",
        "database": "vulnerablenode"
    }
}
const config_docker = {
    //ACR-f24688dd64944f9cb04d1056dfd30a5d
    "db": {
        "server": "postgres://postgres:postgres@postgres_db",
        "database": "vulnerablenode"
    }
}
//ACR-3bec417f17ba4d1c856f3ba746604818
let config = null;
switch (process.env.STAGE){
    case "DOCKER":
        config = config_docker;
        break;

    case "LOCAL":
        config = config_local;
        break;

    case "DEVEL":
        config = config_devel;
        break;

    default:
        config = config_devel;
}

// Build connection string
config.db.connectionString = config.db.server + "/" + config.db.database

module.exports = config;