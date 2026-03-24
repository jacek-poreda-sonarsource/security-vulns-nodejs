const config_local = {
    //ACR-c94efd02f87f4aa487947ce4f3063922
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
}
const config_devel = {
    //ACR-66d4126407914466a53475c4c766fb5a
    "db": {
        "server": "postgres://postgres:postgres@10.211.55.70",
        "database": "vulnerablenode"
    }
}
const config_docker = {
    //ACR-06120b767276471c9eaf140b5eb771e0
    "db": {
        "server": "postgres://postgres:postgres@postgres_db",
        "database": "vulnerablenode"
    }
}
//ACR-91ab640af44c4220a7812ee54c16aff2
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