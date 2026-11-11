# Portfólio — Gabriel Reyes Boanova

Página única em **React + Vite + Tailwind CSS** (ícones: Lucide). Tema escuro por padrão, com opção de tema claro.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
```

Requer Node.js 18 ou superior.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, links, e-mail, currículo, linha do tempo | `src/data/profile.js` |
| Tecnologias (`uso` ou `estudo`) | `src/data/technologies.js` |
| Projetos, funcionalidades, link de demonstração | `src/data/projects.js` |
| Cores dos temas | `src/index.css` (variáveis no topo) |

E-mail, currículo e demonstrações ficam ocultos enquanto os campos estiverem vazios.

## Publicar no GitHub Pages

1. Crie o repositório no GitHub (pode ser `Gabriel-Reyes-Boanova.github.io` ou qualquer outro nome) e envie o código para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.
3. A cada `git push` na `main`, o workflow `.github/workflows/deploy.yml` publica o site.

O `vite.config.js` usa `base: './'`, então funciona em qualquer nome de repositório. Na **Vercel**, basta importar o repositório (o Vite é detectado sozinho).
