// Production
const isProduction = process.env.NODE_ENV === 'production'

const config = {
    isProduction,
}

const APP_ENV = {
    dev: {
        baseUrl: 'http://localhost:3000/',
        ws: 'http://localhost:3000/locales/',
    },
    prod: {
        baseUrl: 'https://antoninbarbier.com/',
        ws: 'https://antoninbarbier.com/locales/',
    },
}

config.APP_ENV = APP_ENV

module.exports = config