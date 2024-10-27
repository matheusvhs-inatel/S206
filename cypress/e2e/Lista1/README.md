# Lista de Exercícios 1 


## Instalação das Dependências 

Instalar dependências do projeto:

```powershell
npm install
```

## Executando os Testes e gerando um Relatório.
Para rodar os testes e gerar o relatório, use o comando:

```powershell
npx npx cypress run --spec ".\cypress\e2e\Lista1\le1.cy.js" --reporter mochawesome
```

Os testes serão armazenados em um arquivo HTML dentro de uma pasta chamada mochawesome-reports na raíz do diretório.