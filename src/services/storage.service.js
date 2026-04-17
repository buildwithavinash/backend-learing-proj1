const {ImageKit} = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: 'private_627TkXIvzB1GnEbzARSeZPHGkaQ='
})

async function uploadFile(buffer){

    console.log("buffer", buffer);
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })

    return result
}

module.exports = uploadFile