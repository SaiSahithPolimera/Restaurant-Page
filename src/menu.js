const Menu = () => {
  const menuSection = document.createElement("div");
  menuSection.style.width = "auto";
  menuSection.style.height = "auto";
  menuSection.style.display = "grid";
  menuSection.style.gridTemplateColumns = "1fr 1fr 1fr";
  menuSection.style.gridTemplateRows = "1fr 1fr";
  menuSection.style.gap = "12px";
  menuSection.style.padding = "14px";
  const createCard = (path, name, content) => {
    const card = document.createElement("div");
    card.style.width = "auto";
    card.style.height = "auto";
    card.style.display = "flex";
    card.style.padding = "18px";
    card.style.alignItems = "center";
    card.style.flexDirection = "column";
    card.style.background = "rgb(255, 253, 253, 0.85)";
    card.style.gap = "8px";
    card.style.borderRadius = "25px";
    const image = document.createElement("img");
    image.src = path;
    image.style.width = "190px";
    image.style.height = "150px";
    image.style.borderRadius = "12px";
    const recipeName = document.createElement("b");
    recipeName.textContent = name;
    recipeName.style.fontWeight = "600";
    recipeName.style.textAlign = "center";
    recipeName.style.fontSize = "1.4rem";
    const details = document.createElement("p");
    details.textContent = content;
    details.fontSize = "1rem";
    card.appendChild(image);
    card.appendChild(recipeName);
    card.appendChild(details);
    return card;
  };

  const foodItems = [
    {
      path: "https://www.allrecipes.com/thmb/u_-VJwoQMTkoJCpe7oFz70BdcfI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8638178_Italian-Pinwheels_Pat-Bernitt_4x3-586beda044064f22877217707a4b084a.jpg",
      name: "Italian Pinwheels",
      content:
        "These Italian pinwheels are a finger food roll-up snack, a crowd-pleasing appetizer, or a light lunch that’s packed with all the flavors you love in an Italian sub sandwich.",
    },

    {
      path: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F49fa9f346c100d930cf5bd15200daa0e%2F1714263289148IMG_5833.webp&q=60&c=sc&poi=auto&orient=true&h=512",
      name: "Lazy Chicken Parmesan Grilled Cheese",
      content:
        "Want to eat a chicken Parmesan sub but didn't feel like spending the time cooking and breading chicken.",
    },
    {
      path: "https://www.allrecipes.com/thmb/Kgh-JtccxLMk04Kzbch_lIOvAcI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4433065-d3e6f9cb5dab49528665454b5c067ef2.jpg",
      name: "Vegetable Biryani (Tehri)",
      content: "Tehri was originally concocted by kings in northern India as a vegetarian equivalent to the Mughals' mutton or chicken biryani.",
    },
    {
      path: "https://www.allrecipes.com/thmb/HSJvIHzJ3z3E5yfoOZ82wjwljiY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM-12997-baked-potato-soup-ddmfs-3x4-2754-9c082a6703ef4a55bdcb9e6368f180e9.jpg",
      name: "Baked Potato Soup",
      content: "This baked potato soup is thick, creamy, and an excellent way to use leftover baked potatoes.",
    },
    {
      path: "https://www.allrecipes.com/thmb/auLuFHEZqXkoZxJPh9OqVzLcobs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5282057-the-denver-omelet-Chef-John-1x1-1-df0ea80163b94feda5b635f1a8308104.jpg",
      name: "The Denver Omelet",
      content: "The Denver omelet is a change of pace from a French omelet and is known for its firmer texture and caramelized flavor.",
    },
    {
      path: "https://www.allrecipes.com/thmb/fcg2csFiZvNIAox9hd2hSG_3Ncw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/221923-japanese-tamago-egg-F-D-4x3-7c337ae6d99f41258db7959eaff3ef4f.jpg",
      name: "Japanese Tamago Egg",
      content: "Tamago is a Japanese rolled omelet, also known as tamagoyaki. The omelet is sweet, has a light texture, and works well when served over sushi rice with soy and wasabi sauce for dipping.",
    },
  ];
  foodItems.map((item) => menuSection.append(createCard(item.path, item.name, item.content)));
  return menuSection;
};

export { Menu };
