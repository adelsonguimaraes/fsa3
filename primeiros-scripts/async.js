console.log('inicio');
setTimeout(() => {
   console.log('Olá!') 
}, 1000);
console.log('fim');

const fs = require('fs')

const lerArquivo = arquivo => {
    return new Promise((resolve, reject) => {
        fs.readFile(arquivo, (err, conteudo) => {
            if (err) {
                reject(err);
            }else{
                resolve(conteudo);
            }
        })
    })
}

const executa = async() => {
    try {
        const conteudo = await lerArquivo('01.js')
        console.log('legal');
        console.log(conteudo)
    }catch (e) {
        console.log(e);
    }
}
executa().then(()=> console.log('terminou')) 

/* lerArquivo('01.js')
    .then(conteudo => {
        console.log(conteudo)
    })
    .catch(e => console.log(e))
 */

// async / wait

// callback hell
/*fs.readFile('01.js', (err, conteudo) => {
    if (err) { // truthy falsy
        console.log('nao foi possivel ler o arquivo');
    }else{
        setTimeout(() => {
            console.log('Olá!');
        }, 100);
        console.log(String(conteudo));
    }
})*/