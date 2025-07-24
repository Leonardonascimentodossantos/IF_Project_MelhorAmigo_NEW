# 🚀 Instruções de Execução - Petshop Melhor Amigo

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Para funcionalidades avançadas: Node.js 14+ (opcional)

## 🖥️ Execução Básica (Apenas Frontend)

### Opção 1: Abrir diretamente no navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Servidor local simples
Se você tem Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

## 🔧 Execução Avançada (Com Backend)

### 1. Instalar Dependências
```bash
cd projeto
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 3. Executar em Desenvolvimento
```bash
npm run dev
```

### 4. Executar em Produção
```bash
npm start
```

## 🌐 Deploy para Produção

### Netlify (Recomendado para frontend)
1. Crie conta no [Netlify](https://netlify.com)
2. Conecte seu repositório Git
3. Configure build settings:
   - Build command: (deixe vazio)
   - Publish directory: `/`
4. Deploy automático a cada commit

### Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções

### Heroku (Para fullstack)
1. Crie conta no [Heroku](https://heroku.com)
2. Instale Heroku CLI
3. Execute:
```bash
heroku create petshop-melhor-amigo
git add .
git commit -m "Deploy inicial"
git push heroku main
```

### cPanel/Hospedagem Tradicional
1. Compacte todos os arquivos em ZIP
2. Faça upload via File Manager
3. Extraia na pasta public_html
4. Configure domínio se necessário

## 📱 Teste de Responsividade

### Dispositivos para Testar:
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024 (iPad)
- Mobile: 375x667 (iPhone), 360x640 (Android)

### Como Testar:
1. Chrome DevTools (F12)
2. Clique no ícone do device
3. Selecione diferentes resoluções
4. Teste todas as funcionalidades

## 🔍 Checklist de Qualidade

### ✅ Funcionalidades
- [ ] Menu de navegação funciona
- [ ] Menu mobile abre/fecha
- [ ] Formulário de contato valida campos
- [ ] Galeria filtra corretamente
- [ ] Modal de imagens abre/fecha
- [ ] Links internos funcionam
- [ ] Responsividade em todos os dispositivos

### ✅ Performance
- [ ] Imagens otimizadas
- [ ] CSS/JS minificados (produção)
- [ ] Lazy loading funcionando
- [ ] Tempo de carregamento < 3s

### ✅ SEO
- [ ] Meta tags preenchidas
- [ ] Títulos hierárquicos (H1, H2, H3)
- [ ] Atributos alt nas imagens
- [ ] URLs amigáveis
- [ ] Sitemap.xml (se necessário)

### ✅ Acessibilidade
- [ ] Navegação por teclado
- [ ] Contraste adequado
- [ ] Textos alternativos
- [ ] Foco visível
- [ ] ARIA labels onde necessário

## 🐛 Solução de Problemas

### Problema: Imagens não aparecem
**Solução:** Verifique se as imagens estão na pasta correta (`images/`)

### Problema: JavaScript não funciona
**Solução:** 
1. Abra F12 no navegador
2. Verifique erros no Console
3. Certifique-se que o arquivo `js/script.js` está carregando

### Problema: CSS não carrega
**Solução:**
1. Verifique se `css/style.css` existe
2. Confirme o caminho no HTML
3. Teste em modo incógnito

### Problema: Formulário não envia
**Solução:**
1. Para versão frontend: JavaScript simula envio
2. Para backend real: configure servidor de email
3. Verifique console para erros

## 📊 Monitoramento

### Google Analytics (Opcional)
```html
<!-- Adicione antes do </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Google Search Console
1. Verifique propriedade do site
2. Submeta sitemap
3. Monitore indexação

## 🔧 Personalizações

### Alterar Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-green: #2d8f2d;
    --light-green: #4caf50;
    /* ... outras cores */
}
```

### Adicionar Páginas
1. Crie novo arquivo HTML
2. Copie estrutura de página existente
3. Adicione link no menu de navegação
4. Atualize CSS se necessário

### Modificar Conteúdo
- Textos: Edite diretamente nos arquivos HTML
- Configurações: Modifique `js/config.js`
- Estilos: Ajuste `css/style.css`

## 📞 Suporte

Para dúvidas sobre implementação:
1. Consulte documentação nos arquivos
2. Verifique comentários no código
3. Teste em diferentes navegadores
4. Use ferramentas de debug do navegador

---

**🎉 Parabéns! Seu hotsite está pronto para uso!**
