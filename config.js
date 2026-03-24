const config_local = {
    //ACR-ca0d47a3dd114fcca1e270c235adac68
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
}
const config_devel = {
    //ACR-018bca5d11c24affbabedb893f642574
    "db": {
        "server": "postgres://postgres:postgres@10.211.55.70",
        "database": "vulnerablenode"
    }
}
const config_docker = {
    //ACR-47948c539dbd4026b561aad00c7a250e
    "db": {
        "server": "postgres://postgres:postgres@postgres_db",
        "database": "vulnerablenode"
    }
}
//ACR-38ec9c19116d44769830b26faf93543b
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