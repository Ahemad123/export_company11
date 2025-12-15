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
        { name: "Green Chilli G4", desc: "Premium export-quality green chillies for bulk supply." },
        { name: "Onion", desc: "High-quality onions suitable for international markets." },
        { name: "Garlic", desc: "Strong-flavor garlic with excellent shelf life." },
        { name: "Drumsticks", desc: "Fresh drumsticks ideal for food processing and retail." },
        { name: "Ginger", desc: "Export-grade ginger with strong aroma and quality." }
      ]
    },

    agriculture: {
      title: "Agriculture Products",
      description: "Premium agricultural commodities sourced directly from farms.",
      banner: "assets/images/banners/agriculture.png",
      products: [
        { name: "Rice", desc: "High-quality export rice available in multiple varieties." },
        { name: "Semi-Husked Coconut", desc: "Naturally processed semi-husked coconuts." },
        { name: "Dry Coconut", desc: "Sun-dried coconuts suitable for long-term storage." }
      ]
    },

    fruits: {
      title: "Fruits",
      description: "Fresh fruits exported with strict quality control.",
      banner: "assets/images/banners/fruits.png",
      products: [
        { name: "Banana G9", desc: "Export-grade G9 bananas with excellent shelf life." },
        { name: "Pomegranate", desc: "Juicy pomegranates with rich color and taste." },
        { name: "Apple", desc: "Premium apples sourced from trusted growers." }
      ]
    },

    seafood: {
      title: "Seafood",
      description: "Fresh and frozen seafood processed under strict hygiene standards.",
      banner: "assets/images/banners/seafood.png",
      products: [
        { name: "Ribbon Fish", desc: "High-quality frozen ribbon fish for export." },
        { name: "Big Mouth Croaker", desc: "Freshly processed croaker fish." },
        { name: "Dry Fish", desc: "Naturally dried fish for bulk export." },
        { name: "Bombay Duck", desc: "Premium Bombay Duck, fresh and dried options." },
        { name: "Prawns", desc: "Export-quality prawns in multiple grades." },
        { name: "Indian Mackerel", desc: "Frozen Indian mackerel with high nutrition value." }
      ]
    },

    scrap: {
      title: "Scrap Materials",
      description: "Industrial-grade recyclable scrap materials.",
      banner: "assets/images/banners/scrap.png",
      products: [
        { name: "Plastic Scrap", desc: "Sorted plastic scrap for recycling industries." },
        { name: "Copper Scrap", desc: "High-purity copper scrap for industrial use." },
        { name: "Aluminium Scrap", desc: "Processed aluminium scrap for manufacturing." }
      ]
    },

    textile: {
      title: "Textiles",
      description: "High-quality textile products for global markets.",
      banner: "assets/images/banners/textile.png",
      products: [
        { name: "Cotton Textiles", desc: "Premium cotton fabrics for garments and exports." },
        { name: "Silk Fabrics", desc: "Luxury silk fabrics with vibrant colors." }
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
