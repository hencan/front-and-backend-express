module.exports = app => {

    const get = (req, res) => {
        app.db('perguntas')
            .select('id', 'tipo', 'grupo', 'texto')
            .then(respostas => res.json(respostas))
            .catch(err => { res.status(500).send(err) })
    }

    return { get }
}