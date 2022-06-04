const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

const entityAddress = require("../entity/address")
const utilRegex = require("../app/util.regex")

const BASE_URL = process.env.THIRD_AXIOS_VIACEP_BASE_URL

exports.searchAddress = function (rawzipcode, callback) {
    if (rawzipcode == undefined || rawzipcode === "") {
        throw "First parameter 'zipcode' should not be null or empty."
    }

    if (callback == undefined || typeof callback !== "function") {
        throw "Second parameter 'callback' should be an function."
    }

    const zipcode = utilRegex.parseOnlyIntegers(rawzipcode)

    const url = BASE_URL+"/ws/"+rawzipcode+"/json/"

    function handleSuccessResponse({data}) {
        try {
            const address = entityAddress.createAddress(data)
            callback(address)
        } catch(e) {
            console.log(e)
        }
    }

    function handleFailResponse() {
        console.log("Fail on search cep address", rawzipcode);
    }

    axios.get(url)
        .then(handleSuccessResponse)
        .catch(handleFailResponse)
}