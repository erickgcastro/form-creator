# Plataforma para a Criação e Gestão de Formulários

Esta é uma plataforma que permite aos usuários criar formulários personalizados e compartilhá-los facilmente com outros participantes. Ideal para a realização de pesquisas, avaliações ou questionários diversos, a plataforma proporciona uma experiência intuitiva e eficiente na criação e administração de formulários. Simplificando o processo, os usuários podem personalizar suas perguntas, ajustar opções de resposta e distribuir os formulários de maneira conveniente, tornando a coleta de informações mais acessível e organizada.
## Executando o Projeto Localmente

Para executar o projeto localmente em sua máquina, siga as etapas abaixo:

### Pré-requisitos

- Ter o Docker em sua máquina antes de prosseguir.
- Certifique-se de ter as portas 3000 e 5000 livres em sua máquina antes de prosseguir.

### Passos

1. Clone o repositório do projeto para o seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/erickgcastro/form-creator.git
   ```

2. Navegue até o diretório raiz do projeto;

3. Inicie o projeto usando o Docker Compose:

   ```bash
   docker compose up
   ```

   Isso iniciará os contêineres necessários para executar o frontend e o backend da plataforma;

4. Após o processo de inicialização ser concluído, você poderá acessar a plataforma em seu navegador web através do seguinte endereço:

   ```bash
   http://localhost:3000
   ```

## Funcionalidades

A plataforma de formulários oferece as seguintes funcionalidades:

- Criação de formulários: Os usuários podem criar formulários personalizados com perguntas e opções de resposta.
- Compartilhamento de formulários: Os formulários criados podem ser compartilhados com outras pessoas através de um link único.
- Resposta aos formulários: Os usuários podem responder aos formulários compartilhados e enviar suas respostas.
- Avaliação de respostas: No caso de formulários como provas, os usuários podem avaliar as respostas enviadas e atribuir pontos às respostas corretas.
- Resultados e estatísticas: Os usuários podem visualizar os resultados dos formulários, incluindo estatísticas e gráficos com base nas respostas recebidas.
