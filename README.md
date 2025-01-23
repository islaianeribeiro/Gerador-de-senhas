# Documentação do Projeto: Login - Gerador de Senhas

## **Descrição do Projeto**

Este é um projeto web que oferece uma interface de login interativa e responsiva, com um gerador de senhas embutido. O objetivo principal do projeto é facilitar a criação e o gerenciamento de senhas seguras para os usuários. O projeto inclui recursos modernos de design em CSS para garantir uma experiência agradável e intuitiva.
[Link do projeto](https://gerador-de-senhas-islaianeribeiro.netlify.app/)

---

## **Funcionalidades**

### **1. Gerador de Senhas**

-   Gera senhas seguras automaticamente.
-   Inclui letras maiúsculas, minúsculas, números e símbolos.
-   Permite copiar a senha gerada para a área de transferência com um único clique.

### **2. Interface Responsiva**

-   Adapta-se a diferentes tamanhos de tela (desktop, tablet e dispositivos móveis).
-   Garantia de uma experiência visual consistente em todos os dispositivos.

### **3. Notificação de Confirmação**

-   Exibe uma mensagem visual ao copiar a senha para a área de transferência.
-   Notificação temporária desaparece automaticamente após 3 segundos.

### **4. Formulário de Registro**

-   Campos para inserção de nome, e-mail, senha e confirmação de senha.
-   Placeholder descritivo para orientar os usuários.
-   Integração com o gerador de senhas para facilitar a criação de credenciais seguras.

---

## **Estrutura do Projeto**

### **1. HTML**

-   Estrutura base da página, contendo:
    -   Banner de boas-vindas com mensagem e créditos ao designer.
    -   Formulário de registro com campos essenciais e botões interativos.
    -   Elementos dedicados ao gerador de senhas, como botões de ação e notificações.

### **2. CSS**

-   Estilo moderno e minimalista:
    -   Utiliza a fonte "Montserrat" para uma estética limpa e legível.
    -   Aplicação de gradientes, sombras e transições suaves para uma experiência visual agradável.
    -   Design responsivo com media queries, garantindo adaptação a diferentes dispositivos.
    -   Botões interativos com efeitos de hover que destacam as ações do usuário.

### **3. JavaScript**

-   Funcionalidades dinâmicas:
    -   Geração de senhas seguras.
    -   Manipulação do DOM para exibir resultados.
    -   Cópia para a área de transferência com a API `navigator.clipboard`.

---

## **Como Executar o Projeto**

1. **Pré-requisitos:**

    - Navegador moderno com suporte a ES6+ e API `navigator.clipboard`.

2. **Passos:**
    - Faça o download ou clone o repositório do projeto.
    - Certifique-se de que os arquivos `index.html`, `./css/slyle.css` e `./js/scripts.js` estão na mesma estrutura de diretórios.
    - Abra o arquivo `index.html` diretamente no navegador.
    - Interaja com a interface para gerar e copiar senhas seguras.

---

## **Futuras Melhorias**

1. **Configurações Avançadas de Geração de Senha:**

    - Permitir que o usuário escolha o comprimento e os tipos de caracteres incluídos na senha.

2. **Animações Adicionais:**

    - Aplicar efeitos visuais ao exibir notificações ou ao interagir com o formulário.

3. **Integração com Back-End:**

    - Armazenar senhas geradas de forma segura.
    - Suporte a autenticação de usuários.

4. **Validação de Formulário:**
    - Garantir que o campo de confirmação de senha corresponda ao campo de senha.
    - Adicionar validação em tempo real para entradas inválidas.

---

## **Conclusão**

Combinando uma interface elegante, funcionalidade robusta e design responsivo, este projeto oferece uma solução prática e visualmente atraente para a geração e o gerenciamento de senhas seguras. É uma base sólida para expansão futura e integração com sistemas maiores.
