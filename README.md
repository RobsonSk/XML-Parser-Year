# XML-Parser-Year
Este repositório contém um script Node.js para processar arquivos XML, separando-os em pastas de acordo com o ano de emissão contido nos arquivos XML.

## Funcionalidades
- **Lê arquivos XML de um diretório especificado.**
- **Analisa cada arquivo XML para determinar o ano de emissão.**
- **Move o arquivo para a pasta correspondente ao ano de emissão.**

## Requisitos
```sh
Node.js
npm
```
## Configuração
Clone este repositório para sua máquina local.

```sh
git clone https://github.com/seuusuario/XML-Parser-Year.git
```
Navegue até o diretório do repositório.

```sh
cd XML-Parser-Year
```

Instale as dependências necessárias.
```sh
npm install
```

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo, ajustando os caminhos conforme necessário:

```sh
PASTA_XML=./caminho/para/diretorio/xml
XML_2015_FOLDER=./caminho/para/diretorio/2015
XML_2016_FOLDER=./caminho/para/diretorio/2016
XML_2017_FOLDER=./caminho/para/diretorio/2017
XML_2018_FOLDER=./caminho/para/diretorio/2018
XML_2019_FOLDER=./caminho/para/diretorio/2019
XML_2020_FOLDER=./caminho/para/diretorio/2020
XML_2021_FOLDER=./caminho/para/diretorio/2021
XML_2022_FOLDER=./caminho/para/diretorio/2022
XML_2023_FOLDER=./caminho/para/diretorio/2023
```

## Utilização
Para executar o script, use o seguinte comando:

```sh
node app.js
```

## Tratamento de Erros
Se um arquivo não for encontrado ou não puder ser lido, o erro é registrado no console.
Se o ano de emissão não for válido, o arquivo é ignorado e uma mensagem é registrada no console.

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## Contato
Para qualquer pergunta ou sugestão, entre em contato com [Robson Scartezini](mailto:robsonshk@gmail.com).