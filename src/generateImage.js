const puppeteer = require('puppeteer');
const path = require('path');

async function generateImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Carrega o arquivo HTML
  const htmlPath = path.resolve('pages/blackWallpaper/index.html');
  await page.goto(`file://${htmlPath}`);

  // Define o tamanho da visualização da página
  await page.setViewport({
    width: 1920, height: 1080
  });

  // Tira o print da página e salva como uma imagem
  await page.screenshot({ path: './output/wallpaper.png' });

  await browser.close();
  console.log('Imagem gerada com sucesso!');
}

generateImage();
