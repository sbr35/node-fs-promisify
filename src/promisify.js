const fs = require('fs');

exports.readFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err){
                reject(err);
            }
            resolve({
                data: data,
                arrayBuffer: async () => {
                    return data.buffer
                }
            });
        })
    })
}

exports.chmod = async (path, mode) => {
    return new Promise((resolve, reject) => {
        fs.chmod(path, mode, (err) => {
            if(err) reject(err);
            resolve(true);
        })
    })
}