const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//                 TOP PAGE CONTENT

//      NAV

//  Services
const nav1 = document.querySelector("a:nth-of-type(1)");
nav1.textContent = siteContent.nav["nav-item-1"];
nav1.style.color = "green";

//  Products
const nav2 = document.querySelector("a:nth-of-type(2)");
nav2.textContent = siteContent.nav["nav-item-2"];
nav2.style.color = "green";

//  Vision
const nav3 = document.querySelector("a:nth-of-type(3)");
nav3.textContent = siteContent.nav["nav-item-3"];
nav3.style.color = "green";

//  Features
const nav4 = document.querySelector("a:nth-of-type(4)");
nav4.textContent = siteContent.nav["nav-item-4"];
nav4.style.color = "green";

//  About
const nav5 = document.querySelector("a:nth-of-type(5)");
nav5.textContent = siteContent.nav["nav-item-5"];
nav5.style.color = "green";

//  Contact
const nav6 = document.querySelector("a:nth-of-type(6)");
nav6.textContent = siteContent.nav["nav-item-6"];
nav6.style.color = "green";


//  "Add two new items to the navigation system.""
const newNavButton1 = document.createElement("a");
newNavButton1.textContent = "New Item 1";
const newNavButton2 = document.createElement("a");
newNavButton2.textContent = "New Item 2";
const parentElement = document.querySelector("nav");
newNavButton1.href = "";
newNavButton2.href = "";
parentElement.prepend(newNavButton1);
parentElement.append(newNavButton2);

const allNav = document.querySelectorAll("a");
allNav.forEach(element => {
  element.style.color = "green";
})

//  Header
const mainHead = document.querySelector("h1");
mainHead.textContent = siteContent.cta["h1"];
mainHead.style.textAlign = "center";
document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1.split(" ").join("<br> ");


//  Main Image
const mainImg = document.querySelector(".cta img");
mainImg.src = siteContent.cta["img-src"];

//  Get Started Button
const startButton = document.querySelector("button");
startButton.textContent = siteContent.cta["button"];



//                 MIDPAGE CONTENT

//  Features
const feat = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
feat.textContent = siteContent["main-content"]["features-h4"];
const featText = document.querySelector(".top-content .text-content:nth-of-type(1) p");
featText.textContent = siteContent["main-content"]["features-content"];


//  About
const about = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"];
const aboutText = document.querySelector(".top-content .text-content:nth-of-type(2) p");
aboutText.textContent = siteContent["main-content"]["about-content"];


//  Middle Image
const midImg = document.querySelector(".middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];


//  Services
const serv = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
serv.textContent = siteContent["main-content"]["services-h4"];
const servText = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servText.textContent = siteContent["main-content"]["services-content"];

//  Product
 const prod = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
 prod.textContent = siteContent["main-content"]["product-h4"];
 const prodText = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
 prodText.textContent = siteContent["main-content"]["product-content"];

//  Vision
 const vis = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
 vis.textContent = siteContent["main-content"]["vision-h4"];
 const visText = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
 visText.textContent = siteContent["main-content"]["vision-content"];



 //                BOTTOM PAGE CONTENT

 const cont = document.querySelector(".contact h4");
 cont.textContent = siteContent.contact["contact-h4"];

 const addr = document.querySelector(".contact p:nth-of-type(1)");
 addr.textContent = siteContent.contact["address"];
 addr.style.width = "20%";

 const pN = document.querySelector(".contact p:nth-of-type(2)");
 pN.textContent = siteContent.contact["phone"];

 const mail = document.querySelector(".contact p:nth-of-type(3)");
 mail.textContent = siteContent.contact["email"];

 const foot = document.querySelector("footer");
 foot.textContent = siteContent.footer["copyright"];