import * as fs from 'fs';

const path = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(path, JSON.stringify(data))
}

const readDb = () => {
    if(!fs.existsSync(path)) return null;

    const info = fs.readFileSync(path, {encoding: 'utf-8'});
    return JSON.parse(info);

}


export {
    saveDB,
    readDb
}