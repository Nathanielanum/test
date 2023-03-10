const fs = require('fs');

const dir = '../../';

exports.handler = async (event) => {
    const { targetDir } = JSON.parse(event.body)
    let files = []

    if (fs.lstatSync(dir + targetDir).isDirectory()) {
        try {
            files = fs.readdirSync(dir + targetDir)
            console.log(files, 'All directory contents')
        } catch {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Failed to read directory" })
            }
        }
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify(fs.createReadStream(dir + targetDir))
        }
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify({ data: files })
    }
}