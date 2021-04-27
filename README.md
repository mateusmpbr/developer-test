# Developer Test
## Mateus Martins Pereia
### Como configurar
- Abrir o terminal na pasta raiz do projeto e executar: `docker-compose up -d`

### Como utilizar
-  A seguir a relação entre cada endpoint e sua função:
    - GET `http://localhost:3000/index`
        - Página inicial
    - GET `http://localhost:3000/messages`
        - Exibe em HTML estilizado as mensagens cadastradas
    - GET `http://localhost:3000/messages/json`
        - Exibe em JSON as mensagens cadastradas
    - GET `http://localhost:3000/messages/create`
        - Exibe em HTML estilizado a página para realizar o cadastro de uma mensagem
            - OBS: também é possível realizar o cadastro ao enviado um payload diretamente para a rota `http://localhost:3000/messages/store`
    - POST `http://localhost:3000/messages/store`
        - Recebe um payload com a seguinte configuração:
            - Content-Type: application/json
            - from
            - target_id
            - media
            - message
        - Após receber o payload, os dados são cadastrados num banco de dados MySQL