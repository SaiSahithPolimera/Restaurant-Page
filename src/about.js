const About = () => {
  const aboutSection = document.createElement("section");
  aboutSection.style.display = "flex";
  aboutSection.style.flexDirection = "column";
  aboutSection.style.alignItems = "center";
  aboutSection.style.gap = "16px";
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "Food Cart";
  heading.style.fontWeight = "500";
  heading.style.color = "white";
  heading.style.textAlign = "center";
  header.style.gridTemplateColumns = "none";
  heading.style.fontSize = "2.4rem";
  header.appendChild(heading);
  const aboutContent = document.createElement("p");
  aboutContent.textContent = `
    Welcome to Food Cart, where culinary innovation meets the comfort of street food! At Food Cart, we blend the vibrant flavors of international street cuisine with a touch of gourmet sophistication, creating a unique dining experience that delights the senses.

Our Story
Food Cart was born from a love for diverse, flavorful street food enjoyed around the world. From the bustling markets of Bangkok to the vibrant food trucks of Los Angeles, our founders, seasoned chefs with a passion for travel and culinary exploration, envisioned a place where these diverse flavors could come together under one roof. Since opening our doors, we have been committed to bringing authentic, high-quality street food to our community.

Our Mission
Our mission at Food Cart is to deliver a dynamic and memorable dining experience by offering a curated selection of street food favorites from various cultures, prepared with the freshest ingredients and the utmost care. We believe that food is not just a necessity, but a way to explore and celebrate the world's rich tapestry of flavors.`;
  aboutContent.style.fontSize = "1rem";
  aboutContent.style.color = "white";
  const offerings = document.createElement("p");
  offerings.textContent = `What We Offer
Global Street Food: From savory tacos and sizzling kebabs to sweet churros and tangy pad thai, our menu is a journey through the world’s most beloved street food stalls.
Fresh Ingredients: We pride ourselves on using only the freshest ingredients, sourced locally whenever possible, to ensure every dish is bursting with flavor.
Creative Specials: Our chefs are always experimenting, bringing you creative specials that fuse traditional street food with innovative culinary techniques.
Warm Atmosphere: Enjoy your meal in a cozy, welcoming environment that reflects the vibrant and eclectic spirit of street markets.`;
  offerings.style.fontSize = "1rem";
  offerings.style.color = "white";
aboutSection.appendChild(header);
aboutSection.appendChild(aboutContent);
aboutSection.appendChild(offerings);
  return aboutSection;
};

export { About };
