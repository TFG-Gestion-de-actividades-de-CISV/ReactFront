const config = {
    development: {
        apiUrl: "http://localhost:8000",
    },
    production: {
        apiUrl: "http://15.237.251.169",
    },
};

const env = "development";

export default config[env];