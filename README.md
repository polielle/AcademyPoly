# Poly Academy — Projeto de Site

## Descrição
O Poly Academy é um site institucional responsivo que representa uma academia moderna, focada em bem-estar, saúde e qualidade de vida.
Desenvolvido com HTML5, CSS3 e JavaScript, o projeto aplica boas práticas de design responsivo, versionamento no GitHub, e deploy contínuo via Vercel.
O sistema também conta com uma integração real com Supabase (PostgreSQL em nuvem) para armazenamento das mensagens de contato, por meio de uma função serverless hospedada na Vercel.

## Objetivo do projeto
O objetivo do projeto é demonstrar domínio dos principais conceitos de desenvolvimento web, aplicando:
- Estruturação semântica com HTML5
- Estilização responsiva com CSS3
- Interatividade com JavaScript
- Boas práticas de versionamento no GitHub
- Integração com banco de dados remoto (Supabase)
- Deploy público e funcional no Vercel

## Estrutura do projeto
| Página             | Finalidade                                                             |
| ------------------ | ---------------------------------------------------------------------- |
| 🏠 `index.html`    | Página inicial com apresentação da academia e cards de destaques.      |
| 🙋‍♀️ `about.html` | Seção “Sobre”, com informações sobre a equipe (coach e nutricionista). |
| 💪 `aulas.html`    | Modalidades com acordeão de horários.                                  |
| 💰 `planos.html`   | Planos de treino e benefícios.                                         |
| 📞 `contato.html`  | Formulário funcional conectado ao banco Supabase.                      |
| 🔐 `login.html`    | Página de login com validação de acesso.                               |

## Design e Layout
- Cores principais: tons de roxo (#6a0dad) e cinza claro
- Layout fluido e harmônico, com foco em UX/UI
- Uso de flexbox e media queries para responsividade
- Transições e efeitos “hover”
- Padrão visual unificado em todas as páginas

## Funcionalidades Implementadas
| Nº | Funcionalidade        | Descrição                                |
| -- | --------------------- | ---------------------------------------- |
| 1  | Menu Responsivo       | Menu fixo, colapsável em telas menores.  |
| 2  | Cards Interativos     | Exibição visual com efeitos de destaque. |
| 3  | Acordeão de Aulas     | Exibe horários de modalidades ao clicar. |
| 4  | Página de Login       | Validação de usuário (simulada).         |
| 5  | Animações Suaves      | Efeitos `fade-in` em seções.             |
| 6  | Formulário de Contato | Envio de dados via API serverless.       |
| 7  | Integração com Banco  | Gravação de mensagens no Supabase.       |
| 8  | Responsividade Total  | Adaptação para mobile, tablet e desktop. |
| 9  | Validação de Campos   | Previne envios incorretos.               |
| 10 | Deploy Automático     | Vercel integrado ao GitHub.              |

## Tecnologias utilizadas
| Categoria          | Ferramentas                           |
| ------------------ | ------------------------------------- |
| **Frontend**       | HTML5, CSS3, JavaScript               |
| **Backend (API)**  | Node.js – Funções Serverless (Vercel) |
| **Banco de Dados** | Supabase (PostgreSQL)                 |
| **Hospedagem**     | Vercel                                |
| **Versionamento**  | Git e GitHub                          |
| **Editor**         | Visual Studio Code                    |

## Estrutura de pastas
AcademyPoly/
│
├── api/                # Funções serverless (Vercel)
│   └── submit.js
│
├── img/                # Imagens e ícones do site
│
├── pages/              # Páginas internas
│   ├── about.html
│   ├── aulas.html
│   ├── planos.html
│   ├── contato.html
│   └── login.html
│
├── style.css           # Estilos globais
├── script.js           # Scripts e animações
└── index.html          # Página inicial

## Banco de Dados – Supabase
| Campo        | Tipo        | Descrição                |
| ------------ | ----------- | ------------------------ |
| `id`         | BIGSERIAL   | Identificador automático |
| `name`       | TEXT        | Nome do usuário          |
| `email`      | TEXT        | E-mail do usuário        |
| `phone`      | TEXT        | Telefone (opcional)      |
| `message`    | TEXT        | Mensagem enviada         |
| `created_at` | TIMESTAMPTZ | Data/hora do envio       |

## Fluxo de Funcionamento (Mermaid)
flowchart TD
    A[Usuário acessa o site] --> B[Preenche formulário de contato]
    B --> C[Envio via fetch POST /api/submit]
    C --> D[Vercel Serverless Function]
    D --> E[Supabase - Tabela contacts]
    E --> F[Registro salvo com sucesso]
    F --> G[Mensagem de sucesso exibida ao usuário]

## Requisitos do Projeto – Checklist
| Critério               | Descrição                                  | Status |
| ---------------------- | ------------------------------------------ | ------ |
| [x] Estrutura do Site  | 6 páginas completas e interligadas         | ✅      |
| [x] Responsividade     | Totalmente adaptável a dispositivos móveis | ✅      |
| [x] Estilizações CSS   | Mais de 30 regras aplicadas                | ✅      |
| [x] Mídias             | Mais de 20 imagens e ícones                | ✅      |
| [x] Funcionalidades JS | 10 recursos interativos implementados      | ✅      |
| [x] Menu Interativo    | Navegação intuitiva e dinâmica             | ✅      |
| [x] Versionamento      | +30 commits realizados no GitHub           | ✅      |
| [x] README.md          | Documentação completa e formatada          | ✅      |
| [x] Deploy Público     | Publicado na Vercel com sucesso            | ✅      |
| [x] Banco de Dados     | Integração real com Supabase               | ✅      |

## Possíveis melhorias futuras
- Autenticação real via Supabase Auth
- Dashboard de alunos e treinos
- Agendamento de aulas online
- Aplicativo mobile com integração ao site

## Autoria
Desenvolvido por: Milena Poliele de Meira

## Licença
Este projeto foi desenvolvido para fins educacionais.
É livre o uso e modificação do código com os devidos créditos à autora.
