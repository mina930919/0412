let button1, button2, button3, button4;
let img1, img2, img3, img4;
let currentImage = null; // 當前顯示的圖片
let frameWidth = 0, frameHeight = 0, frameCountPerImage = 0;

function preload() {
  // 預載圖片
  img1 = loadImage("連續動作1.png");
  img2 = loadImage("連續動作2.png");
  img3 = loadImage("連續動作3.png");
  img4 = loadImage("連續動作4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 按鈕1: 作品集
  button1 = createButton("作品集");
  button1.position(150, 50);
  button1.size(80, 40);
  button1.style("font-size", "16px");
  button1.mouseOver(() => setAnimation(img1, 36, 36, 6));
  button1.mouseOut(() => currentImage = null);
  button1.mousePressed(() => embedIframe("https://mina930919.github.io/0330/"));

  // 按鈕2: 自我介紹
  button2 = createButton("自我介紹");
  button2.position(250, 50);
  button2.size(80, 40);
  button2.style("font-size", "16px");
  button2.mouseOver(() => setAnimation(img2, 42, 42, 4));
  button2.mouseOut(() => currentImage = null);
  button2.mousePressed(() => embedIframe("https://mina930919.github.io/0303/"));

  // 按鈕3: 筆記說明
  button3 = createButton("筆記說明");
  button3.position(350, 50);
  button3.size(80, 40);
  button3.style("font-size", "16px");
  button3.mouseOver(() => setAnimation(img3, 38, 34, 6));
  button3.mouseOut(() => currentImage = null);
  button3.mousePressed(() => embedIframe("https://hackmd.io/@mina0919/HJWckvvAkl"));

  // 按鈕4: 測驗卷
  button4 = createButton("測驗卷");
  button4.position(450, 50);
  button4.size(80, 40);
  button4.style("font-size", "16px");
  button4.mouseOver(() => setAnimation(img4, 28, 38, 6));
  button4.mouseOut(() => currentImage = null);
  button4.mousePressed(() => embedIframe("https://mina930919.github.io/0329/"));
}

function draw() {
  background("#F5EBE0");

  if (currentImage) {
    displayAnimation(currentImage, frameWidth, frameHeight, frameCountPerImage);
  }
}

// 設定動畫參數
function setAnimation(img, width, height, count) {
  currentImage = img;
  frameWidth = width;
  frameHeight = height;
  frameCountPerImage = count;
}

// 顯示動畫的函式
function displayAnimation(img, frameWidth, frameHeight, frameCountPerImage) {
  let x = 50;
  let y = 50;
  let index = Math.floor(frameCount / 6) % frameCountPerImage; // 計算當前幀數
  let sx = index * frameWidth;
  let sy = 0;
  image(img, x, y, frameWidth, frameHeight, sx, sy, frameWidth, frameHeight); // 顯示圖片
}

// 嵌入 iframe 的函式
function embedIframe(url) {
  let iframe = createElement("iframe");
  iframe.attribute("src", url);
  iframe.attribute("width", windowWidth * 0.8); // 寬度為視窗寬度的 80%
  iframe.attribute("height", windowHeight * 0.6); // 高度為視窗高度的 60%
  iframe.position((windowWidth - windowWidth * 0.8) / 2, (windowHeight - windowHeight * 0.6) / 2); // 顯示在視窗的中間
}
