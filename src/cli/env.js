const parseEnv = () => {
    let env=process.env;
    for (let prop in env) {
        if (prop.slice(0, 4)==='RSS_') {
            console.log(`${prop}=${env[prop]}`)
        }
    }
};
parseEnv();