document.addEventListener("DOMContentLoaded", () => {

  const bannerImages = {
  vegetables: "assets/images/banners/vegetables.png",
  agriculture: "assets/images/banners/agriculture.jpg",
  fruits: "assets/images/banners/fruits.jpg",
  seafood: "assets/images/banners/seafood.jpg",
  scrap: "assets/images/banners/scrap.jpg",
  textile: "assets/images/banners/textile.jpg"
};

  const categories = {
    vegetables: {
      title: "Vegetables",
      description: "Fresh export-quality vegetables sourced from trusted farms.",
      banner: "assets/images/banners/vegetables.png",
      products: [
        { name: "Green Chilli G4", desc: "Premium export-quality green chillies for bulk supply.", image: "assets/images/subcategories/vegetables/chilli.png" },
        { name: "Onion", desc: "High-quality onions suitable for international markets.", image: "assets/images/subcategories/vegetables/onion.png" },
        { name: "Garlic", desc: "Strong-flavor garlic with excellent shelf life.", image: "assets/images/subcategories/vegetables/garlic.png" },
       // { name: "Drumsticks", desc: "Fresh drumsticks ideal for food processing and retail." },
        { name: "Ginger", desc: "Export-grade ginger with strong aroma and quality.", image: "assets/images/subcategories/vegetables/ginger.png" }
      ]
    },

    agriculture: {
      title: "Agriculture Products",
      description: "Premium agricultural commodities sourced directly from farms.",
      banner: "assets/images/banners/agriculture.png",
      products: [
        { name: "Rice", desc: "High-quality export rice available in multiple varieties.", image: "assets/images/subcategories/agriculture/rice.png" },
        { name: "Semi-Husked Coconut", desc: "Naturally processed semi-husked coconuts.", image: "assets/images/subcategories/agriculture/coconuts.png" },
        { name: "Copra", desc: "Premium copra for oil extraction and export.", image: "assets/images/subcategories/agriculture/copra.png"},
        { name: "Spices", desc: "A variety of spices including pepper, cardamom, and more.", image: "assets/images/subcategories/agriculture/spices.png" }
      ]
    },

    fruits: {
      title: "Fruits",
      description: "Fresh fruits exported with strict quality control.",
      banner: "assets/images/banners/fruits.png",
      products: [
        { name: "Banana G9", desc: "Export-grade G9 bananas with excellent shelf life.", image: "assets/images/subcategories/fruits/banana.png" },
        { name: "Pomegranate", desc: "Juicy pomegranates with rich color and taste.", image: "assets/images/subcategories/fruits/pomegranate.png" },
        { name: "Apple", desc: "Premium apples sourced from trusted growers.", image: "assets/images/subcategories/fruits/apple.png" },
      ]
    },

    seafood: {
      title: "Seafood",
      description: "Fresh and frozen seafood processed under strict hygiene standards.",
      banner: "assets/images/banners/seafood.png",
      products: [
        { name: "King Fish", desc: "Top-quality frozen king fish for international markets.", image: "assets/images/subcategories/seafood/king.png" },
        { name: "Ribbon Fish", desc: "High-quality frozen ribbon fish for export.", image: "assets/images/subcategories/seafood/ribbon.png" },
        { name: "Promfret Fish", desc: "Freshly frozen promfret fish with premium quality.", image: "assets/images/subcategories/seafood/promfret.png" },
        { name: "Big Mouth Croaker", desc: "Freshly processed croaker fish.", image: "assets/images/subcategories/seafood/bmc.png" },
        { name: "Dry Fish", desc: "Naturally dried fish for bulk export.", image: "assets/images/subcategories/seafood/dry.png" },
        { name: "Bombay Duck", desc: "Premium Bombay Duck, fresh and dried options.", image: "assets/images/subcategories/seafood/bduck.png" },
        { name: "Prawns", desc: "Export-quality prawns in multiple grades.", image: "assets/images/subcategories/seafood/prawns.png" },
        { name: "Indian Mackerel", desc: "Frozen Indian mackerel with high nutrition value.", image: "assets/images/subcategories/seafood/mackerel.png" }
      ]
    },

    scrap: {
      title: "Scrap Materials",
      description: "Industrial-grade recyclable scrap materials.",
      banner: "assets/images/banners/scrap.png",
      products: [
        { name: "Plastic Scrap", desc: "Sorted plastic scrap for recycling industries.", image: "assets/images/subcategories/scrap/plastic.png" },
        { name: "Copper Scrap", desc: "High-purity copper scrap for industrial use.", image: "assets/images/subcategories/scrap/copper.png" },
        { name: "Aluminium Scrap", desc: "Processed aluminium scrap for manufacturing.", image: "assets/images/subcategories/scrap/aluminium.png" },
      ]
    },

    textile: {
      title: "Textiles",
      description: "High-quality textile products for global markets.",
      banner: "assets/images/banners/textile.png",
      products: [
        { name: "Cotton Textiles", desc: "Premium cotton fabrics for garments and exports.", image: "assets/images/subcategories/textile/textiles.png" },
        { name: "Silk Fabrics", desc: "Luxury silk fabrics with vibrant colors.", image: "assets/images/subcategories/textile/silk.png" },
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const categoryKey = params.get("category")?.toLowerCase();

  const titleEl = document.getElementById("category-title");
  const descEl = document.getElementById("category-desc");
  const gridEl = document.getElementById("category-products");
  

  if (!categories[categoryKey]) {
    titleEl.innerText = "Category Not Found";
    descEl.innerText = "The requested category does not exist.";
    return;
  }

  const category = categories[categoryKey];

  const hero = document.querySelector(".category-hero");

if (bannerImages[categoryKey]) {
  hero.style.backgroundImage = `url('${bannerImages[categoryKey]}')`;
}

  // 🔹 SET BANNER IMAGE (STEP 3 GOES HERE)
const heroSection = document.querySelector(".category-hero");

if (heroSection && category.banner) {
  heroSection.style.backgroundImage = `url(${category.banner})`;
}

  titleEl.innerText = category.title;
  descEl.innerText = category.description;

  category.products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" 
         alt="${product.name}" 
         class="product-img">

    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>

      <a href="rfq.html?product=${encodeURIComponent(product.name)}"
         class="btn btn-secondary" style="width:100%;">
        Request Quote
      </a>
    </div>
  `;

  gridEl.appendChild(card);
});


});
