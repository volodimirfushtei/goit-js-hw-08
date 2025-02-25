const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const gallery = document.querySelector("ul.gallery");
gallery.style.cssText = `display: flex;
  flex-wrap: wrap;
  gap: 24px 24px;
  flex-direction: row;`;

const fragment = document.createDocumentFragment();
images.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");
  const a = document.createElement("a");
  a.classList.add("gallery-link");
  const img = document.createElement("img");
  img.classList.add("gallery-image");
  img.src = image.preview;
  img.setAttribute("data-source", image.original);
  img.alt = image.description;
  img.style.width = `360px`;
  img.style.height = `200px`;
  img.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.04)";
  });
  img.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
  a.addEventListener("click", (event) => {
    event.preventDefault();
  });
  a.appendChild(li);
  li.appendChild(img);
  fragment.appendChild(a);
});
gallery.appendChild(fragment);

document.addEventListener("DOMContentLoaded", function () {
  gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") {
      return;
    }
    const largeImage = event.target.getAttribute("data-source");
    const modal = basicLightbox.create(
      `<img src="${largeImage}" alt="Image description">`
    );
    modal.show();
  });
});
