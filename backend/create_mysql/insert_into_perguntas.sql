-- Preenchendo a tabela perguntas!

INSERT INTO perguntas 
    (tipo, grupo, texto)
VALUES 
    ("pergunta", "idade", "Qual sua faixa de Idade:"),
    ("pergunta", "convenio", "Qual seu convênio:"),
    ("pergunta", "renda", "Qual sua faixa salarial:"),
    ("pergunta", "motivo", "Por que você realizou o empréstimo:"),
    ("resposta", "idade", "Até 30 Anos"),
    ("resposta", "idade", "De 30 a 50 anos"),
    ("resposta", "idade", "De 50 a 65 anos"),
    ("resposta", "idade", "Acima de 65 anos"),
    ("resposta", "convenio", "INSS"),
    ("resposta", "convenio", "SIAPE"),
    ("resposta", "convenio", "Forças Armadas"),
    ("resposta", "convenio", "Outros"),
    ("resposta", "renda", "Até 2 SM"),
    ("resposta", "renda", "De 2 a 4 SM"),
    ("resposta", "renda", "De 4 a 6 SM"),
    ("resposta", "renda", "Acima de 6 SM"),
    ("resposta", "motivo", "Pagar contas"),
    ("resposta", "motivo", "Reforma da Casa"),
    ("resposta", "motivo", "Compra de Carro"),
    ("resposta", "motivo", "Outras");
