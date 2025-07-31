
//netflix
var video = []

video[1] = []
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {

    try {
        //lógica
        //http
        console.log(video[0]['nome'])
    } catch (erro) {
        tratarErro(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')
    }

    finally {
        console.log('Sempre passa por aqui (try / catch)')
    }

    console.log('A aplicação não morreu')
}

function tratarErro(erro) {
    //logica para registrar o erro no servidor
    console.log(erro)
}

getVideo(video)