module.exports = app => {
    const save = async (req, res) => {

        const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

        const resposta = { ...req.body }

        const respostasFromDB = await app.db('respostas')
        .where({ cpf: resposta.cpf }).first()

        // console.log(respostasFromDB)


        if (typeof respostasFromDB === undefined) {
            // console.log(resposta.id)
            // const respostasFromDB = await app.db('respostas')
            //     .where({ cpf: resposta.cpf }).first()
            // console.log(respostasFromDB)
        } else {
            resposta.id = respostasFromDB.id
            // console.log(resposta)
        }

        try {
            existsOrError(resposta.nome, 'Nome não informado')
            existsOrError(resposta.cpf, 'CPF não informado')
            existsOrError(resposta.idade, 'Idade não informado')
            existsOrError(resposta.convenio, 'Convênio não informado')
            existsOrError(resposta.renda, 'Renda não informado')
            existsOrError(resposta.motivo, 'Motivo não informado')
            existsOrError(resposta.criado_em, 'Data não informada')

            // if (!resposta.id) {
            //     notExistsOrError(respostasFromDB, 'Cpf já cadastrado')
            // }
        } catch (msg) {
            return res.status(400).send(msg)
        }
        if (resposta.id) {
            app.db('respostas')
                .update(resposta)
                .where({ id: resposta.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('respostas')
                .insert(resposta)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('respostas')
            .select('id', 'nome', 'cpf', 'idade', 'convenio', 'renda', 'motivo', 'criado_em')
            .then(respostas => res.json(respostas))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('respostas')
            .where({ id: req.params.id })
            .first()
            .select('id', 'nome', 'cpf', 'idade', 'convenio', 'renda', 'motivo', 'criado_em')            
            .then(resposta => res.json(resposta))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}