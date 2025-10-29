# 🛍️ Vide T-shirts - Landing Page

> Landing page moderna e responsiva para marca de moda feminina, desenvolvida com Vue.js 3 e deploy automatizado.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Sobre o Projeto

Este projeto nasceu como uma surpresa para meu irmão, que gerenciava sua marca de roupas femininas apenas pelo Instagram. O objetivo era criar uma vitrine digital profissional, com gestão de conteúdo simplificada e zero custos operacionais.

### ✨ Funcionalidades

- 🎨 **Interface moderna e responsiva** - Design adaptável para todos os dispositivos
- 📸 **Galeria de produtos dinâmica** - Atualização via Google Sheets + Cloudinary
- 🌓 **Tema claro/escuro** - Persistência da preferência do usuário
- 💬 **Integração WhatsApp** - Botão flutuante para contato direto
- 📊 **Analytics integrado** - Rastreamento de métricas com Google Analytics
- 🚀 **Deploy automático** - CI/CD via Netlify

## 🛠️ Tecnologias

### Frontend
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[DaisyUI](https://daisyui.com/)** - Biblioteca de componentes para Tailwind

### Infraestrutura & DevOps
- **[Netlify](https://www.netlify.com/)** - Hospedagem serverless com CI/CD
- **[Cloudinary](https://cloudinary.com/)** - CDN para gerenciamento de imagens
- **[Google Sheets API](https://developers.google.com/sheets/api)** - CMS simplificado
- **[Google Analytics](https://analytics.google.com/)** - Rastreamento de métricas

## 🚀 Começando

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Conta no Cloudinary (gratuita)
- Google Sheets público com as colunas necessárias

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/KaiqueIvo04/vide-tshirts.git
cd vide-tshirts
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:
```env
VITE_URL_CARROSEL=<URL_DA_ABA_DA_PLANILHA>
VITE_URL_COLECAO1=<URL_DA_ABA_DA_PLANILHA>
VITE_URL_COLECAO2=<URL_DA_ABA_DA_PLANILHA>
```

4. **Execute em desenvolvimento**
```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Preview do Build
```bash
npm run preview
```

## 📊 Gestão de Conteúdo (CMS)

### Google Sheets como CMS

A planilha deve ter uma aba para cada seção, sendo a primeira para o carrossel e as outras para as coleções (Atualmente o template suporte 2 coleções):

Exemplo para o carrossel

| carrossel                      |
|--------------------------------|
| https://res.cloudinary.com/... |
| https://res.cloudinary.com/... |

Exemplo para uma coleção

| coleção 1                      | nome/descrição do produto |
|--------------------------------|---------------------------|
| https://res.cloudinary.com/... | REF 102 - T-shirt Básica  |
| https://res.cloudinary.com/... | REF 102 - T-shirt Básica  |

### Como Atualizar Produtos

1. **Upload da imagem no Cloudinary**
   - Acesse [cloudinary.com](https://cloudinary.com)
   - Faça upload da foto do produto
   - Copie a URL pública

2. **Adicione na planilha**
   - Abra o Google Sheets
   - Adicione uma nova linha com os dados
   - Salve (atualização automática)

3. **Aguarde alguns segundos**
   - O site busca os dados automaticamente
   - Produto aparece na coleção!

## 🎨 Personalização

### Temas DaisyUI

O projeto usa temas customizados definidos via CSS Variables no arquivo `src/style.css`:

#### Tema Claro (mytheme)
```css
:root:has(input.theme-controller[value=mytheme]:checked),
[data-theme="mytheme"] {
  color-scheme: light;
  --color-base-100: #FDA5D5;     /* Cor de fundo principal */
  --color-base-200: #FDD9EE;     /* Cor de fundo secundária */
  --color-base-300: #C23C8A;     /* Cor de fundo terciária */
  --color-primary: #ffffff;       /* Cor primária (botões, links) */
  --color-info: #364153;          /* Cor de informação */
  --color-secondary-content: #ffffff; /* Cor do texto em elementos secundários */
}
```

#### Tema Escuro
```css
:root:has(input.theme-controller[value=dark]:checked),
[data-theme="dark"] {
  color-scheme: dark;
  --color-base-100: #6d2d51;     /* Cor de fundo principal */
  --color-base-200: #3f3e3e;     /* Cor de fundo secundária */
  --color-primary: #8a83ac;       /* Cor primária */
  --color-secondary-content: #4A5565; /* Cor do texto secundário */
}
```

#### Como Personalizar

Para alterar as cores da marca, edite as CSS variables em `src/style.css`:
```css
/* Exemplo: Mudando para tons de azul */
:root:has(input.theme-controller[value=mytheme]:checked),
[data-theme="mytheme"] {
  color-scheme: light;
  --color-base-100: #E3F2FD;     /* Azul claro */
  --color-base-200: #BBDEFB;     /* Azul médio */
  --color-base-300: #2196F3;     /* Azul escuro */
  --color-primary: #1976D2;       /* Azul primário */
  --color-info: #0D47A1;          /* Azul info */
  --color-secondary-content: #ffffff;
}
```

#### Variáveis Disponíveis

DaisyUI suporta diversas CSS variables:
```css
--color-primary          /* Cor primária */
--color-secondary        /* Cor secundária */
--color-accent          /* Cor de destaque */
--color-neutral         /* Cor neutra */
--color-base-100        /* Cor de fundo 1 */
--color-base-200        /* Cor de fundo 2 */
--color-base-300        /* Cor de fundo 3 */
--color-info            /* Cor de informação */
--color-success         /* Cor de sucesso */
--color-warning         /* Cor de aviso */
--color-error           /* Cor de erro */
```

Veja todas as variáveis em: [DaisyUI Theme Generator](https://daisyui.com/theme-generator/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🐛 Issues Conhecidos

Nenhum no momento! 🎉

Encontrou algum bug? [Abra uma issue](https://github.com/seu-usuario/vide-tshirts/issues)

## 👤 Autor

**Kaique Ivo**

- GitHub: [@KaiqueIvo04](https://github.com/KaiqueIvo04)
- LinkedIn: [Kaique Ivo](https://www.linkedin.com/in/kaique-ivo-9707421a8)
- Email: kaiqueivo1011@gmail.com

## 🙏 Agradecimentos

- [Vue.js Team](https://github.com/vuejs) - Framework incrível
- [Netlify](https://netlify.com) - Hospedagem gratuita
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS
- [DaisyUI](https://daisyui.com) - Componentes lindos
- Meu irmão - Por inspirar este projeto 

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

