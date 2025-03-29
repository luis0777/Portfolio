# 🌐 Portfolio Pessoal

Este é um projeto de portfólio profissional desenvolvido com Next.js 15, utilizando as mais recentes tecnologias e boas práticas de desenvolvimento para criar uma experiência interativa e responsiva.

## 🚀 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Next-intl](https://next-intl-docs.vercel.app/) para internacionalização
- [Radix UI](https://www.radix-ui.com/) para componentes acessíveis
- [Lucide-react](https://lucide.dev/) para ícones modernos
- 📱 Layout responsivo
- ✨ Animações suaves e interativas

## 📋 Funcionalidades

- 🌍 Suporte a múltiplos idiomas (Português e Inglês)
- 🏆 Seções:
  - Sobre mim
  - Formação
  - Projetos
- 📱 Design responsivo para todos os dispositivos
- 🎨 Modo claro e escuro dinâmico
- 🚀 Desempenho otimizado com Next.js

### Estrutura do Projeto

```
├── src/
│   ├── app/              # Rotas e páginas
│   ├── components/       # Componentes React
│   ├── assets/          # Recursos estáticos
│   ├── lib/             # Utilitários e configurações
│   └── i18n/            # Configurações de internacionalização
├── public/              # Arquivos públicos
└── messages/            # Arquivos de tradução
```

### Internacionalização

O projeto suporta múltiplos idiomas através do next-intl. Os arquivos de tradução estão localizados em `messages/`.

Para adicionar um novo idioma:
1. Crie um novo arquivo JSON em `messages/`
2. Atualize as configurações em `src/i18n/`

## 📦 Deploy

O projeto está configurado para deploy na Vercel. Para fazer o deploy:

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório
3. Configure as variáveis de ambiente necessárias
4. Deploy!