import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const MAX_RETRY = 5

/**
 * Wait
 * @param {Number} time Time in ms
 */
function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

/**
 * Make an API call
 * @param {String} url
 * @returns {Object}
 */
const Api = async (url) => {
    let data = null,
        i = 0
    do {
        try {
            data = await (await fetch(url, publicRuntimeConfig.wsHeaders)).json()
        }
        catch(e) {
            await wait(Math.random() * 500 + 750 * (1 + i))
            data = null
        }
    } while(i++ < MAX_RETRY && data === null)

    if(data) {
        return data
    }
    else {
        throw new Error('Failed to get API '+url)
    }
}

export default Api