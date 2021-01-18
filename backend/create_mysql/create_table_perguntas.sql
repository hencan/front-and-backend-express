-- Criando a tabela perguntas!

CREATE TABLE IF NOT EXISTS perguntas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    tipo ENUM('pergunta', 'resposta') NOT NULL,
    grupo ENUM('idade', 'convenio', "renda", "motivo") NOT NULL,
    texto VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);