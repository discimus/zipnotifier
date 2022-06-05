const notifier = require("node-notifier")

const thirdNodeNotifierUtil = require("./src/third/node-notifier.util")
const thirdAxiosEntityAddress = require("./src/third/axios.entity.address")

function searchAddressCallback(address) {
    const message = `You have searched by street '${address.getLogradouro()}' on district '${address.getBairro()}'.`
    thirdNodeNotifierUtil.notify(message)
}

function run() {
    try {
        thirdAxiosEntityAddress.searchAddress("01001-000", searchAddressCallback)
    } catch(e) {
        console.log(e)
    }
}

run()