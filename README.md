# Developer Test
## Mateus Martins Pereira
### Como configurar
- Abrir o terminal na pasta raiz do projeto e executar:
    - `npm install`
    - `docker-compose up -d`
        - Esse comando irá:
            - Baixar e configurar uma imagem MySQL
            - Baixar e configurar uma imagem MongoDB
            - Baixar e configurar uma imagem Node.js
            - Criar duas coleções no MongoDB: `messages`e `medias`
            - Criar uma tabela no MySQL: `Message`
            - Cadastrar cinco documentos em cada um das duas coleções do MongoDB
            - Cadastrar cinco registros na tabela do  MySQL
### Como utilizar
-  A seguir há a relação entre cada endpoint e a ação executada por ele:
    - GET `http://localhost:3000`
        - Exibe a página inicial
    - GET `http://localhost:3000/messages`
        - Exibe num arquivo .marko estilizado as mensagens cadastradas 
    - GET `http://localhost:3000/messages/json`
        - Exibe um JSON com as mensagens cadastradas
    - GET `http://localhost:3000/messages/create`
        - Exibe num arquivo .marko estilizado uma página para realizar o cadastro de uma mensagem
        - OBS: também é possível realizar o cadastro da mensagem ao enviar um payload diretamente para o endpoint abaixo
    - POST `http://localhost:3000/messages`
        - Recebe um payload com a seguinte configuração:
            - Content-Type
                - application/json
            - body
                - from
                - target_id
                - media
                - message
        - Após receber o payload, o endpoint redireciona a requisição para um controlador que cadastra os dados num banco de dados MySQL
        - Caso o payload não contenha nenhuma mensagem, é cadastrada uma mensagem escolhida aleatoriamente de um MongoDB
        - Após o recebimento e processamentos dos dados, é retornado um JSON contendo as informações recebidas e o status de recebimento
        - As mensagens cadastradas serão exibidas em GET `http://localhost:3000/messages` e GET `http://localhost:3000/messages/json`