const ProfessorModel = require("../models/professor.models")

let professores = [
    {id:0, nome:"Iury de Oliveira", curso:"SI", titulacao:"GRAD" , ai:{es:true, al:false, ds:false, mc:false}},
    {id:1, nome:"Aluisio", curso:"RC", titulacao:"GRAD", ai:{es:false, al:false, ds:true, mc:false}},
    {id:2, nome:"Peaga", curso:"ES", titulacao:"GRAD", ai:{es:false, al:true, ds:false, mc:false}},
    {id:3, nome:"Douglas Holanda", curso:"DD", titulacao:"MEST", ai:{es:false, al:true, ds:false, mc:false}},
    {id:4, nome:"Jefferson Carvalho", curso:"EC", titulacao:"DOUT", ai:{es:true, al:false, ds:true, mc:false}}
]

let id = 5

class ProfessorService {
    static list() {
        return professores
    }

    static register(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai
        )
        professores.push(professor)
        return professor
    }

    static update(id, data){
        for(let professor of professores){
            if(professor.id == id){
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.ai = data.ai
                return professor
            }
        }
        return null
    }

    static delete(id) {
        for(let i = 0; i < professores.length; i++) {
            if(professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    } 

    static retrieve(id) {
        for(let i = 0; i < professores.length; i++) {
            if(professores[i].id == id) {
                return professores[i]
            }
        }
        return {}
    }
}

module.exports = ProfessorService