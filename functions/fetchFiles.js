const fs = require('fs');

const dir = './';

exports.handler = async (event) => {
    const { targetDir } = JSON.parse(event.body)
    let files = []
    try {
        files = fs.readdirSync(dir + targetDir)
    } catch {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Failed to read directory" })
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ data: files })
    }
}