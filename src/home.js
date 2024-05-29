
import banner from './assets/homeBanner.jpg';
const Home = () => {
    const homeSection = document.createElement("section");
    const header = document.createElement("header");
    homeSection.style.display = "grid";
    homeSection.style.alignItems = "center";
    homeSection.style.justifyContent = "center";
    homeSection.style.gridTemplateRows = "0.5fr 2fr 0.8fr";
    homeSection.style.gap = "8px";
    header.style.gridTemplateColumns = "none";
    const heading = document.createElement("h1");
    heading.textContent = "Foot Cart";
    heading.style.fontSize = "2.3rem";
    heading.style.fontWeight = "400";
    heading.style.color = "white";
    heading.style.textAlign = "center"
    header.appendChild(heading);
    homeSection.appendChild(header);
    const homeImage = document.createElement("img");
    homeImage.src = banner;
    homeImage.style.width = "500px";
    homeImage.style.height = "400px";
    homeImage.style.borderRadius = "16px";
    homeSection.appendChild(homeImage);
    const footer = document.createElement("footer");
    footer.textContent = "© " + (new Date()).getFullYear() + " Food Cart. All rights reserved.";
    footer.style.fontSize = "1.2rem";
    footer.style.textAlign = "center"
    footer.style.color = "white";
    homeSection.appendChild(footer);
    return homeSection;
}

export {Home};