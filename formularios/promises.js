let ejemploPromesa = new Promise(function(resolve, reject) {
    resolve(
        console.log('Todo bien')
    ) 
    reject(
        console.log('Todo mal')

    )
})

ejemploPromesa
.then(resp => console.log(resp))
.catch(err => console.log(err))