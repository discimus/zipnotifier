const notifier = require("node-notifier")

exports.notify = function (message, title = "Notification") {
    if (message == undefined || message === "") {
        throw "First param 'message' should not be empty or undefined."
    }

    const content = {
        title,
        message
    }

    notifier.notify(content)
}