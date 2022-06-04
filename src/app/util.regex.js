exports.parseOnlyIntegers = function (value) {
    const FIRST_INDEX = 0

    const response = /\d+/g.exec(value)

    if (response == undefined || response[FIRST_INDEX] == undefined || response.length == 0) {
        throw `Fail to apply regex in '${value}'`
    }

    return response
}