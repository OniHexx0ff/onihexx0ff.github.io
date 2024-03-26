---
title: 'Vue 3 + Astro'
description: 'Como eu fiz esse site usando Vue, Astro e GH pages'
pubDate: 'Mar 26 2024'
heroImage: '/blog-placeholder-3.jpg'
---

Esse site foi feito usando Vue 3 e Astro . A ideia é ter um site facil de manter, rápido e com um bom SEO.
Vou falar um pouco de como foi o processo de criação, utilização e integração dessas partes.


## Astro

Astro é um novo framework para construir sites estáticos. Por padrão, ele entrega 0 javascript, o que deixa o site muito rápido.
Ele é muito rápido e fácil de usar(apesar de eu achar a sintaxe um pouco estranha). 

Ademais, você pode escrever em markdown, mdx, além de poder escrever em Vue, React e Svelte, dentre outros.


## Astro + Vue

Bom, para usar o Vue no Astro, é muito simples, é só rodar

```
 npx astro add vue 
```

E pronto, você já pode usar o Vue no seu site Astro.

---
Contudo, quando você usa componentes Vue no Astro, você tem que ativar o javasript, então o site não é mais 0
javascript, e pode ser um pouquinho mais lento.

Crair um componente Vue é muito fácil, é literalmente só criar um arquivo .vue na pasta de componentes, e
pronto só usar ele normalmente como você usaria no Vue ou no Nuxt


```vue
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import MainSection from '../components/MainSection.vue'
import HomePageContent from '../components/HomePageContent.vue'

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
---

<!doctype html>
<html lang="en">
<head>
    <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
</head>
<body>
    <Header />
    
    # Aqui eu uso o componente Vue
    <MainSection transition:animate="slide"  >
        <HomePageContent client:load />
    </MainSection>
    
    
    <Footer />
</body>
</html>

```

**MainSection** e **HomePageConten** são componentes Vue.
Note que eu uso o atributo **client:load** no HomePageContent, 
isso faz com que javascript seja incluido. Sem isso, o componente terá seu html e css, mas não o javascript.