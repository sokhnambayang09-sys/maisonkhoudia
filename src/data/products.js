export const products = [
  // ── Produits originaux ──────────────────────────────────────────
  { id: 1,  name: "Robe Élégance Dorée",          price: 6500,  category: "femme",       subcategory: "robes",      colors: ["rose","beige","noir"],                        sizes: ["XS","S","M","L","XL"],         new: true,  bestseller: false, gradient: "img-placeholder-pink",  image: "/products/p10.jpg"     },
  { id: 2,  name: "Abaya Prestige",                price: 6500,  category: "femme",       subcategory: "abayas",     colors: ["noir","bordeaux","marine"],                   sizes: ["S","M","L","XL","XXL"],        new: true,  bestseller: true,  gradient: "img-placeholder-dark",  image: "/products/p7.jpg"      },
  { id: 3,  name: "Ensemble Blazer Femme",         price: 6500,  category: "femme",       subcategory: "ensembles",  colors: ["noir","camel","gris"],                        sizes: ["XS","S","M","L","XL"],         new: false, bestseller: true,  gradient: "img-placeholder-beige", image: "/products/p1.jpg"      },
  { id: 13, name: "Lacoste",                       price: 2000,  category: "femme",       subcategory: "ensembles",  colors: ["rouge","blanc","noir","marron","chocolat"],   sizes: ["S","M","L","XL","XXL"],        new: true,  bestseller: false, gradient: "img-placeholder-beige", image: "/products/p6.jpg"      },
  { id: 4,  name: "Costume Homme Prestige",        price: 145000, category: "homme",      subcategory: "costumes",   colors: ["noir","marine","gris"],                       sizes: ["46","48","50","52","54"],       new: true,  bestseller: false, gradient: "img-placeholder-navy",  image: "/homme.jpg"            },
  { id: 5,  name: "Chemise Élégance",              price: 34900, category: "homme",       subcategory: "chemises",   colors: ["blanc","bleu","gris"],                        sizes: ["S","M","L","XL","XXL"],        new: false, bestseller: true,  gradient: "img-placeholder-beige", image: "/homme.jpg"            },
  { id: 6,  name: "Robe Princesse Fille",          price: 45000, category: "enfants",     subcategory: "fille",      colors: ["rose","violet","blanc"],                      sizes: ["2-3ans","4-5ans","6-7ans","8-9ans","10-11ans"], new: true, bestseller: true,  gradient: "img-placeholder-rose",  image: "/enfants.jpg"          },
  { id: 7,  name: "Ensemble Garçon Smart",         price: 39900, category: "enfants",     subcategory: "garcon",     colors: ["marine","gris","bordeaux"],                   sizes: ["2-3ans","4-5ans","6-7ans","8-9ans"], new: true, bestseller: false, gradient: "img-placeholder-navy",  image: "/enfants.jpg"          },
  { id: 8,  name: "Sac à Main Luxe",               price: 65000, category: "accessoires", subcategory: "sacs",       colors: ["beige","noir","camel"],                       sizes: ["unique"],                      new: false, bestseller: true,  gradient: "img-placeholder-beige", image: "/sac-versse.jpg"       },
  { id: 9,  name: "Escarpins Dorés",               price: 55000, category: "accessoires", subcategory: "chaussures", colors: ["or","argent","noir"],                         sizes: ["36","37","38","39","40","41"], new: true,  bestseller: false, gradient: "img-placeholder-gold",  image: "/sac-versse.jpg"       },
  { id: 10, name: "Collier Élégance",              price: 28000, category: "accessoires", subcategory: "bijoux",     colors: ["or","argent"],                                sizes: ["unique"],                      new: false, bestseller: true,  gradient: "img-placeholder-gold",  image: "/sac-versse.jpg"       },
  { id: 11, name: "Jupe Longue Femme",             price: 49000, category: "femme",       subcategory: "jupes",      colors: ["fuschia","rose","noir"],                      sizes: ["XS","S","M","L","XL"],         new: true,  bestseller: true,  gradient: "img-placeholder-mauve", image: "/products/p11.jpg"     },
  { id: 12, name: "Kaftan Royal",                  price: 185000, category: "femme",      subcategory: "kaftans",    colors: ["or","bordeaux","vert"],                       sizes: ["S","M","L","XL"],              new: false, bestseller: false, gradient: "img-placeholder-gold",  image: "/products/p12.jpg"     },

  // ── Nouveaux produits avec photos réelles ──────────────────────
  { id: 14, name: "Ensemble Blazer Croisé",        price: 10000, category: "femme",       subcategory: "ensembles",  colors: ["rouge","blanc","beige"],                     sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: true,  gradient: "img-placeholder-dark",  image: "/products/p1.jpg"      },
  { id: 15, name: "Ensemble Jupe Évasée",          price: 6000,  category: "femme",       subcategory: "ensembles",  colors: ["marron","blanc","noir","rose","gris"],        sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: false, gradient: "img-placeholder-beige", image: "/products/p2.jpg"      },
  { id: 16, name: "Ensemble Corset Bicolore",      price: 6000,  category: "femme",       subcategory: "ensembles",  colors: ["rose","gris","beige","noir","bleu"],          sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: true,  gradient: "img-placeholder-rose",  image: "/products/p3.jpg"      },
  { id: 17, name: "Ensemble Blazer Luxe",          price: 10000, category: "femme",       subcategory: "ensembles",  colors: ["marron","blanc","noir","gris","bleu"],        sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: false, gradient: "img-placeholder-dark",  image: "/products/p4.jpg"      },
  { id: 18, name: "Robe Rayée Prestige",           price: 8000,  category: "femme",       subcategory: "robes",      colors: ["rose","blanc","noir","bleu","vert"],          sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: true,  gradient: "img-placeholder-pink",  image: "/products/p5.jpg"      },
  { id: 19, name: "Ensemble Casual Lin",           price: 6500,  category: "femme",       subcategory: "ensembles",  colors: ["moutarde","blanc","noir","rose","gris","bleu"], sizes: ["XS","S","M","L","XL","XXL"], new: false, bestseller: true,  gradient: "img-placeholder-gold",  image: "/products/p6.jpg"      },
  { id: 20, name: "Boubou Prestige",               price: 6500,  category: "femme",       subcategory: "abayas",     colors: ["noir","or","bordeaux","bleu","rose"],         sizes: ["S","M","L","XL","XXL"],        new: true,  bestseller: false, gradient: "img-placeholder-dark",  image: "/products/p7.jpg"      },
  { id: 21, name: "Ensemble Polo Sport",           price: 8000,  category: "femme",       subcategory: "ensembles",  colors: ["fuschia","blanc","noir","bleu","rose","vert"], sizes: ["XS","S","M","L","XL","XXL"],  new: true,  bestseller: true,  gradient: "img-placeholder-pink",  image: "/products/p8.jpg"      },
  { id: 22, name: "Robe Sirène Élégance",          price: 8500,  category: "femme",       subcategory: "robes",      colors: ["blanc","noir","rose","bleu","bordeaux"],      sizes: ["XS","S","M","L","XL"],         new: true,  bestseller: true,  gradient: "img-placeholder-beige", image: "/products/p9.jpg"      },
  { id: 23, name: "Robe Gala Prestige",            price: 8000,  category: "femme",       subcategory: "robes",      colors: ["rose","blanc","noir","bordeaux","vert"],      sizes: ["XS","S","M","L","XL"],         new: true,  bestseller: false, gradient: "img-placeholder-pink",  image: "/products/p10.jpg"     },
  { id: 24, name: "Ensemble Rayé Élégant",         price: 7000,  category: "femme",       subcategory: "ensembles",  colors: ["rose","blanc","noir","bleu","vert"],          sizes: ["XS","S","M","L","XL","XXL"],   new: false, bestseller: true,  gradient: "img-placeholder-rose",  image: "/products/p11.jpg"     },
  { id: 25, name: "Ensemble Kimono Prestige",      price: 7000,  category: "femme",       subcategory: "ensembles",  colors: ["marron","beige","noir","rose","bleu"],        sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: false, gradient: "img-placeholder-beige", image: "/products/p12.jpg"     },
  { id: 26, name: "Ensemble Blazer Sahel",         price: 10000, category: "femme",       subcategory: "ensembles",  colors: ["kaki","beige","noir","blanc","gris"],         sizes: ["XS","S","M","L","XL","XXL"],   new: true,  bestseller: true,  gradient: "img-placeholder-beige", image: "/products/p13.jpg"     },
];

export const categories = [
  { id: "femme",       name: "Femme",       description: "Élégance et raffinement pour la femme moderne",          gradient: "img-placeholder-pink",  image: "/products/p13.jpg", href: "/boutique/femme",       count: products.filter(p => p.category === "femme").length },
  { id: "homme",       name: "Homme",       description: "Style et prestance pour l'homme distingué",             gradient: "img-placeholder-navy",  image: "/products/p8.jpg",  href: "/boutique/homme",       count: products.filter(p => p.category === "homme").length },
  { id: "enfants",     name: "Enfants",     description: "Tenues adorables pour nos petits princes et princesses", gradient: "img-placeholder-rose",  image: "/enfants.jpg",      href: "/boutique/enfants",     count: products.filter(p => p.category === "enfants").length },
  { id: "accessoires", name: "Accessoires", description: "Les détails qui font toute la différence",              gradient: "img-placeholder-gold",  image: "/sac-versse.jpg",   href: "/boutique/accessoires", count: products.filter(p => p.category === "accessoires").length },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}
export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}
export const colorMap = {
  rose:'#F4A7B9', beige:'#E8D5B5', noir:'#1A1A1A', bordeaux:'#722F37',
  marine:'#1B3A5C', camel:'#C19A6B', gris:'#808080', blanc:'#FFFFFF',
  bleu:'#4A7AB5', violet:'#8B4B8B', fuschia:'#FF1694', or:'#D4AF37',
  argent:'#C0C0C0', vert:'#3D7D4A', rouge:'#CC2929', marron:'#6B3A2A',
  chocolat:'#3D1A0F', moutarde:'#C9960A', kaki:'#8B8B4B',
};
