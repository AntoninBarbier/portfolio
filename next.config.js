const config = require('./config/config')

module.exports = {
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
    },
    publicRuntimeConfig: config.APP_ENV[process.env.APP_ENV || 'dev'],
}