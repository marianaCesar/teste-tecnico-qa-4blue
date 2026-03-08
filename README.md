# Teste Técnico - QA Tester - 4blue <br>

Este repositório contém a análise realizada no sistema disponibilizado no processo seletivo.<br>

## Sistema testado

https://qa-play-sim.lovable.app/

## Objetivo

Identificar bugs funcionais, inconsistências de experiência e possíveis falhas de validação.

## Estrutura do repositório

evidencias → vídeos e prints dos bugs  
automacao → testes automatizados

## Total de bugs encontrados: 14 <br>

Críticos: 2 <br> 
Altos: 2 <br>
Médios: 2 <br>
Baixos: 8 

## Bugs prioritários - Críticos <br>

### 1- Título: Login não valida campos obrigatórios <br>
Severidade: Crítico<br>
Prioridade: Alta<br>

Descrição: Validação de campos obrigatórios no Login<br>

**Dado** que o usuário acessou a tela de “Login”<br>
**Quando** o usuário deixa todos os campos vazios<br>
**E** clica no botão “Entrar”<br>
**Então** o sistema realiza o acesso mesmo com os campos vazios.<br>

Resultado atual:<br>
O sistema realiza o acesso mesmo com os campos vazios.<br>

Resultado esperado:<br>
O sistema deve impedir o acesso e exibir mensagem solicitando o preenchimento dos campos obrigatórios.<br>

Evidência:<br>
Vídeo demonstrando o comportamento.<br>

### Motivo: <br>
Este bug foi priorizado porque afeta diretamente o fluxo de autenticação do sistema. A ausência de validação permite que o usuário tente realizar acesso sem fornecer credenciais, o que pode indicar falha no controle básico de autenticação.


### 2- Título: Sistema permite cadastro com campos obrigatórios vazios<br>
Severidade: Crítico<br>
Prioridade: Alta<br>

Descrição: Validação de campos obrigatórios no cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário deixa todos os campos vazios<br>
E clica no botão “Criar conta”<br>
Então o sistema realiza o cadastro mesmo com os campos vazios.<br>

Resultado atual:<br>
O sistema realiza o cadastro mesmo com os campos vazios.<br>

Resultado esperado:<br>
O sistema deve impedir o cadastro e exibir mensagem solicitando o preenchimento dos campos obrigatórios.<br>

Evidência:<br>
Print demonstrando o comportamento do console com os campos em vazio.<br>

### Motivo: <br>
Este bug também foi priorizado por impactar diretamente a integridade dos dados do sistema. Permitir a criação de contas sem o preenchimento de informações essenciais pode gerar registros inválidos na base de dados, dificultando processos como autenticação, comunicação com usuários e manutenção das informações cadastrais.

---

## Demais Bugs Encontrados
### 3- Título: Sistema permite cadastro com formato de e-mail inválido<br>
Severidade: Alta<br>
Prioridade: Alta<br>

Descrição: Validação de formato de e-mail no cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário insere um e-mail em formato inválido como "teste@teste"<br>
E preenche os demais campos obrigatórios<br>
E clica no botão “Criar conta”<br>
Então o cadastro é realizado com sucesso mesmo com formato de e-mail inválido.<br>

Resultado atual:<br>
O cadastro é realizado com sucesso mesmo com e-mail inválido.<br>

Resultado esperado:<br>
O sistema deve exibir mensagem informando formato inválido de e-mail.<br>

Evidência:<br>
Print demonstrando o comportamento do console com o e-mail inválido.<br>

---

### 4- Título: Senha não respeita todas as políticas mínimas<br>
Severidade: Alta<br>
Prioridade: Alta<br>

Descrição: Validação de formato da senha no cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário insere uma senha inválida como "123456789" ou “123”<br>
E preenche os demais campos obrigatórios<br>
E clica no botão “Criar conta”<br>
Então realiza o cadastro com sucesso mesmo com a senha inválida.<br>

Resultado atual:<br>
O cadastro é realizado com sucesso mesmo com a senha inválida.<br>

Resultado esperado:<br>
O sistema deve exibir mensagem informando formato inválido de senha, contendo 1 caractere especial e 8 caracteres mínimos.<br>

Evidência:<br>
Print demonstrando o comportamento do console com as senhas inválidas.<br>

---

### 5- Título: Campo telefone aceita letras<br>
Severidade: Baixa<br>
Prioridade: Média<br>

Descrição: Validação de formato de Telefone no cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário insere um telefone inválido como "teste"<br>
E preenche os demais campos obrigatórios<br>
E clica no botão “Criar conta”<br>
Então o cadastro é realizado com sucesso mesmo com Telefone inválido.<br>

Resultado atual:<br>
O cadastro é realizado com sucesso mesmo com Telefone inválido.<br>

Resultado esperado:<br>
O sistema deve exibir mensagem informando formato inválido de Telefone.<br>

Evidência:<br>
Vídeo demonstrando o comportamento.<br>

---

### 6- Título: Campo Nome aceita +255 caracteres<br>
Severidade: Baixa<br>
Prioridade: Média<br>

Descrição: Validação de formato de Nome no cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário insere um nome contendo 256 caracteres ou mais<br>
E preenche os demais campos obrigatórios<br>
E clica no botão “Criar conta”<br>
Então O cadastro é realizado com sucesso<br>

Resultado atual:<br>
O cadastro é realizado com sucesso mesmo com Nome contendo mais de 255 caracteres.<br>

Resultado esperado:<br>
O sistema deve exibir mensagem informando a quantidade máxima de 255 caracteres.<br>

Evidência:<br>
Vídeo demonstrando o comportamento.<br>

---

### 7- Título: Campo telefone sem máscara<br>
Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação de formato de Telefone no cadastro<br>

Dado que o usuário acessa a tela de “Criar conta”<br>
Quando o usuário insere um número no campo Telefone<br>
Então o número cadastrado é exibido sem a mascara “5199000000”<br>

Resultado atual:<br>
O número cadastrado no campo Telefone é exibido em extenso “5199000000”.<br>

Resultado esperado:<br>
O sistema deve exibir formato cadastro com máscara “(00) 00000-0000”.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 8- Título: Quebra de layout na tela de Cadastro<br>

Severidade: Média<br>
Prioridade: Média<br>

Descrição: Validação da tela de Cadastro<br>

Quando o usuário acessa a tela de “Criar conta”<br>
Então o sistema exibe quebra de layout<br>

Resultado atual:<br>
A tela Cadastro exibe quebra de layout e sem redimensionamento.<br>

Resultado esperado:<br>
O sistema deve exibir layout conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 9- Título: Campo E-mail label com erro de digitação - Login<br>

Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação da tela Login<br>

Quando o usuário acessa a tela de “Login”<br>
Então o campo E-mail apresenta label “Email”<br>

Resultado atual:<br>
A tela Login o campo E-mail apresenta label “Email”.<br>

Resultado esperado:<br>
O sistema deve exibir a label do campo E-mail sem erro de digitação e conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 10- Título: Campo E-mail label com erro de digitação - Cadastro<br>

Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação da tela Cadastro<br>

Quando o usuário acessa a tela de “Criar conta”<br>
Então o campo E-mail apresenta label “Email”<br>

Resultado atual:<br>
A tela Criar conta o campo E-mail apresenta label “Email”.<br>

Resultado esperado:<br>
O sistema deve exibir a label do campo E-mail sem erro de digitação e conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 11- Título: Campo Senha sem botão para alternar a visibilidade do texto digitado - Login<br>

Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação da tela Login<br>

Dado que o usuário acessou a tela de “Login”<br>
Quando o usuário insere uma senha no campo Senha<br>
Então o campo não exibe a visibilidade rápida de digitação<br>

Resultado atual:<br>
A tela Login o campo Senha não possibilita a visibilidade do texto digitado.<br>

Resultado esperado:<br>
O sistema deve exibir no campo Senha um ícone que possibilita alternar a visibilidade do texto digitado conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 12- Título: Campo Senha sem botão para alternar a visibilidade do texto digitado - Cadastro<br>

Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação da tela Cadastro<br>

Dado que o usuário acessou a tela de “Criar conta”<br>
Quando o usuário insere uma senha no campo Senha<br>
Então o campo não exibe a visibilidade rápida de digitação<br>

Resultado atual:<br>
A tela “Criar conta” no campo Senha não possibilita a visibilidade do texto digitado.<br>

Resultado esperado:<br>
O sistema deve exibir no campo Senha um ícone que possibilita alternar a visibilidade do texto digitado conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 13- Título: Mensagem de erro após login<br>

Severidade: Média<br>
Prioridade: Baixa<br>

Descrição: Validação de login<br>

Dado que o usuário acessou a tela de “Login”<br>
Quando o usuário preenche o campo E-mail com e-mail válido<br>
E preenche no campo Senha uma senha válida<br>
E clica em botão “Entrar”<br>
Então exibe a tela de “Login realizado com sucesso”<br>
E mensagem de “Erro inesperado” no canto inferior direito da tela<br>

Resultado atual:<br>
A tela “Login realizado com sucesso” exibe mensagem de “Erro inesperado” no canto inferior direito da tela (notificações toast).<br>

Resultado esperado:<br>
A tela “Login realizado com sucesso” não deve exibir mensagem de “Erro inesperado” conforme protótipo do UX.<br>

Evidência:<br>
Print demonstrando o comportamento.<br>

---

### 14- Título: Campo E-mail e Senha sem validação visual - Login<br>

Severidade: Baixa<br>
Prioridade: Baixa<br>

Descrição: Validação de login<br>

Dado que o usuário acessou a tela de “Login”<br>
Quando o usuário preenche o campo E-mail com “teste@teste”<br>
E preenche no campo Senha uma senha válida<br>
E clica em botão “Entrar”<br>
Então é exibida a mensagem “Conta não encontrada. Crie uma conta primeiro.”<br>
E o mesmo ocorre com E-mail correto e Senha inválida.<br>

Resultado atual:<br>
Na tela Login ao inserir um e-mail ou senha inválida é exibida a mensagem “Conta não encontrada. Crie uma conta primeiro.”.<br>

Resultado esperado:<br>
Na tela Login no campo E-mail e Senha deve exibir mensagem de “Campo inválido” conforme protótipo do UX.<br>

Evidência:<br>
Vídeo demonstrando o comportamento.<br>

---

## MELHORIAS:<br>

- Tela Login conter um link como “Esqueci minha senha”;<br>
- Tela Login e Criar conta no campo Senha exibir ícone que possibilita alternar a visibilidade do texto digitado;<br>
- Tela Criar conta apresentar asterisco em vermelho nos campos obrigatórios;<br>
