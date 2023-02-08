const fs = require('fs');

const dir = '~/';

exports.handler = async (event) => {
    const { targetDir } = JSON.parse(event.body)
    let files = []

    if (fs.lstatSync(dir + targetDir).isDirectory()) {
        try {
            files = fs.readdirSync(dir + targetDir)
        } catch {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Failed to read directory" })
            }
        }
    } else {
        // return {
        //     statusCode: 200,
        //     body: require(dir + targetDir)
        // }
        console.log("This is a file")
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify({ data: files })
    }
}