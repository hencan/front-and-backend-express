-- Criando a tabela respostas!

create table if not exists respostas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    idade ENUM("Até 30 Anos", "De 30 a 50 anos", "De 50 a 65 anos", "Acima de 65 anos") NOT NULL,
    convenio ENUM("INSS", "SIAPE", "Forças Armadas", "Outros") NOT NULL,
    renda ENUM("Até 2 SM", "De 2 a 4 SM", "De 4 a 6 SM", "Acima de 6 SM") NOT NULL,
    motivo ENUM("Pagar contas", "Reforma da Casa", "Compra de Carro", "Outras") NOT NULL,
    criado_em VARCHAR(11) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (cpf)
);