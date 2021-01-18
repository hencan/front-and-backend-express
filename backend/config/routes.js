module.exports = app => {
    app.route('/respostas')
        .post(app.api.respostas.save)
        .get(app.api.respostas.get)

    app.route('/respostas/:id')
        .get(app.api.respostas.getById)

    app.route('/perguntas')
        .get(app.api.perguntas.get)
}