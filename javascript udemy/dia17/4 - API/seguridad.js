const bcrypt = require('bcrypt');// se instala en la terminal asi: npm install bcrypt
const crypto = require('crypto');//se instala en la terminal asi: npm install crypto

function miHash(clave) {
    const ciclos = 10;//cantidad de hash o ciclos mientras mas ciclos mas seguro
    const salt = bcrypt.genSaltSync(ciclos);

    const claveConHash = bcrypt.hashSync(clave, salt);

    return claveConHash;
}

function miEncriptado(dato) {
    const algoritmo = 'aes-128-gcm';
    const clave = 'pass 16 caracter';
    const vi = crypto.randomBytes(16);

    const cifrado = crypto.createCipheriv(algoritmo, clave, vi);

    let encriptado = cifrado.update(dato, 'utf8', 'hex');

    encriptado += cifrado.final('hex');

    return encriptado;
}

module.exports = {miHash, miEncriptado};