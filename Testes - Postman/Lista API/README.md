# Lista API

## Exercício 1:

### Instalação das Dependências:

Instalar dependências do projeto:

```powershell
npm install
```

## Executando os Testes e gerando um Relatório.
Para rodar os testes e gerar o relatório, use o comando:

```powershell
npx newman run '.\AwesomeAPI - Economia.postman_collection.json' -e '.\AwesomeAPI - Economia.postman_environment.json' -r htmlextra
```

## Exercício 2:

1. Os testes desenvolvidos são manuais ou automatizados?

 - Resposta: Os scripts configurados na aba Tests do Postman são executados automaticamente após cada requisição, permitindo repetir os testes de forma consistente e eficiente. Isso elimina a necessidade de checagem manual, garantindo maior precisão.

2. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?
   
 - Resposta: Os testes se limitam a verificar o comportamento da API em diferentes cenários, como retorno de dados válidos ou mensagens de erro. Testes End-To-End envolvem simular o fluxo completo de um sistema, abrangendo desde a interação do usuário (frontend) até o backend e os dados no banco.

3. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
 - Resposta: Para que os testes desenvolvidos funcionem em modo de regressão, é necessário integrá-los em um pipeline de integração contínua (CI/CD), permitindo sua execução automática sempre que houver alterações no código ou na API.