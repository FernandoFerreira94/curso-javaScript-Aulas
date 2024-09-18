
var video = Array()
video[1] = []
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'


/* função try se houver um erro podemos verificar 
sem que o script pare */

function getVideo(video) {
    try { // possivel erro
        console.log(video[0]['nome']) // = erro
        
    } catch(error) { // erro acontecido
        console.log(error) // = erro escrito
    }
    
    finally { // tratativa do erro
        console.log('filme nao existe mais') // msg alternativa para continuar o script

    } 
    console.log(video)
}

getVideo(video)