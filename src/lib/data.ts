import { groceryCategories } from "./groceryData";

export const categories = [
  {
    id: 'grocery',
    name: 'Grocery',
    subcategories: [
      {
        id: 'fruits',
        name: 'Fresh Fruits',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80',
      },
      {
        id: 'vegetables',
        name: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&q=80',
      },
    ],
  },
  // ... rest of the categories remain the same
];

export const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Advanced smartwatch with health tracking features',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Designer Backpack',
    description: 'Stylish and functional backpack for everyday use',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical gaming keyboard with custom switches',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&q=80',
    category: 'Gaming'
  },
  {
    id: '5',
    name: 'Professional Camera',
    description: 'High-end DSLR camera for professional photography',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    category: 'Electronics'
  },
  {
    id: '6',
    name: 'Running Shoes',
    description: 'Lightweight and comfortable running shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    category: 'Sports'
  },
  {
    id: '7',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium sound',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&q=80',
    category: 'Electronics'
  },
  {
    id: '8',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    category: 'Accessories'
  },
  {
    id: '9',
    name: 'Wireless Mouse',
    description: 'Precision wireless mouse for productivity',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    category: 'Electronics'
  },
  {
    id: '10',
    name: 'Coffee Maker',
    description: 'Premium automatic coffee maker with timer',
    price: 149.99,
    image: "https://images.pexels.com/photos/19651262/pexels-photo-19651262/free-photo-of-coffee-machine-on-kitchen-counter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 'Home'
  }
];

export const kidsAccessories = [
  {
    id: 'acc-1',
    name: 'Superhero Backpack',
    description: 'Fun and spacious backpack for school',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'Accessories'
  },
  {
    id: 'acc-2',
    name: 'Character Watch Set',
    description: 'Digital watch with favorite characters',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80',
    category: 'Accessories'
  }
];

export const boysProducts = [
  {
    id: 'boys-1',
    name: 'Dinosaur T-Shirt Set',
    description: 'Fun printed cotton t-shirt with matching shorts',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80',
    category: 'Boys'
  },
  {
    id: 'boys-2',
    name: 'Sports Jersey Set',
    description: 'Comfortable athletic wear for active kids',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80',
    category: 'Boys'
  }
];

export const girlsProducts = [
  {
    id: 'girls-1',
    name: 'Butterfly Dress',
    description: 'Colorful summer dress with butterfly pattern',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80',
    category: 'Girls'
  },
  {
    id: 'girls-2',
    name: 'Unicorn T-Shirt Set',
    description: 'Magical unicorn print with matching skirt',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=500&q=80',
    category: 'Girls'
  }
];

export const infantProducts = [
  {
    id: 'infant-1',
    name: 'Baby Onesie Set',
    description: 'Soft cotton onesies with cute animal prints',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=80',
    category: 'Infants'
  },
  {
    id: 'infant-2',
    name: 'Sleep & Play Set',
    description: 'Cozy sleepwear for peaceful nights',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80',
    category: 'Infants'
  }
];

export const kidsShoes = [
  {
    id: 'shoes-1',
    name: 'Light-Up Sneakers',
    description: 'Fun sneakers with LED lights in the sole',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80',
    category: 'Shoes'
  },
  {
    id: 'shoes-2',
    name: 'Comfort School Shoes',
    description: 'Durable and comfortable school shoes',
    price: 39.99,
    image: 'https://s.alicdn.com/@sc04/kf/Hd6346371bf82440f9a490b9a936c577eG.jpg',
    category: 'Shoes'
  }
];

export const pants = [
  {
    id: 'pants-1',
    name: 'Slim Fit Chinos',
    description: 'Classic khaki chino pants',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80',
    category: 'Pants'
  },
  {
    id: 'pants-2',
    name: 'Straight Leg Jeans',
    description: 'Dark wash denim jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    category: 'Pants'
  },
  {
    id: 'pants-3',
    name: 'Cargo Pants',
    description: 'Relaxed fit cargo pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&q=80',
    category: 'Pants'
  }
];

export const shirts = [
  {
    id: 'shirt-1',
    name: 'Oxford Button-Down',
    description: 'Classic oxford cotton shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80',
    category: 'Shirts'
  },
  {
    id: 'shirt-2',
    name: 'Casual Denim Shirt',
    description: 'Light wash denim shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=500&q=80',
    category: 'Shirts'
  },
  {
    id: 'shirt-3',
    name: 'Formal White Shirt',
    description: 'Slim fit dress shirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&q=80',
    category: 'Shirts'
  }
];


export const suits = [
  {
    id: 'suit-1',
    name: 'Classic Navy Suit',
    description: 'Two-piece wool blend suit',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',
    category: 'Suits'
  },
  {
    id: 'suit-2',
    name: 'Charcoal Grey Suit',
    description: 'Modern fit business suit',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80',
    category: 'Suits'
  },
  {
    id: 'suit-3',
    name: 'Black Tuxedo',
    description: 'Classic fit formal tuxedo',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=500&q=80',
    category: 'Suits'
  }
];

export const tshirts = [
  {
    id: 'tshirt-1',
    name: 'Classic White T-Shirt',
    description: 'Premium cotton crew neck t-shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    category: 'T-Shirts'
  },
  {
    id: 'tshirt-2',
    name: 'Striped Polo Shirt',
    description: 'Casual fit striped polo',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80',
    category: 'T-Shirts'
  },
  {
    id: 'tshirt-3',
    name: 'Graphic Print T-Shirt',
    description: 'Urban style graphic tee',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&q=80',
    category: 'T-Shirts'
  }
];

export const dresses = [
  {
    id: 'dress-1',
    name: 'Floral Maxi Dress',
    description: 'Elegant floral print maxi dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
    category: 'Dresses'
  },
  {
    id: 'dress-2',
    name: 'Little Black Dress',
    description: 'Classic cocktail dress',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80',
    category: 'Dresses'
  },
  {
    id: 'dress-3',
    name: 'Summer Wrap Dress',
    description: 'Light and breezy wrap dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&q=80',
    category: 'Dresses'
  }
];

export const skirts = [
  {
    id: 'skirt-1',
    name: 'Pleated Midi Skirt',
    description: 'Elegant pleated midi skirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80',
    category: 'Skirts'
  },
  {
    id: 'skirt-2',
    name: 'A-Line Mini Skirt',
    description: 'Classic A-line mini skirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=500&q=80',
    category: 'Skirts'
  },
  {
    id: 'skirt-3',
    name: 'Denim Skirt',
    description: 'Casual denim mini skirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&q=80',
    category: 'Skirts'
  }
];

export const tops = [
  {
    id: 'top-1',
    name: 'Silk Blouse',
    description: 'Elegant silk blend blouse',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500&q=80',
    category: 'Tops'
  },
  {
    id: 'top-2',
    name: 'Casual T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80',
    category: 'Tops'
  },
  {
    id: 'top-3',
    name: 'Knit Sweater',
    description: 'Cozy knit sweater',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80',
    category: 'Tops'
  }
];

export const kidsProducts = [
  {
    id: 'kids-1',
    name: 'Dinosaur T-Shirt',
    description: 'Fun printed cotton t-shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80',
    category: 'Boys'
  },
  {
    id: 'kids-2',
    name: 'Butterfly Dress',
    description: 'Colorful summer dress',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80',
    category: 'Girls'
  },
  {
    id: 'kids-3',
    name: 'Kids Sneakers',
    description: 'Comfortable casual sneakers',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80',
    category: 'Shoes'
  }
];
export const mensProducts = [
  {
    id: 'mens-1',
    name: 'Classic White Shirt',
    description: 'Premium cotton casual shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80',
    category: 'Shirts'
  },
  {
    id: 'mens-2',
    name: 'Slim Fit Jeans',
    description: 'Dark blue denim jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    category: 'Pants'
  },
  {
    id: 'mens-3',
    name: 'Navy Blazer',
    description: 'Classic fit wool blend blazer',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',
    category: 'Suits'
  }
];

export const womensProducts = [
  {
    id: 'womens-1',
    name: 'Floral Summer Dress',
    description: 'Light and breezy floral print dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
    category: 'Dresses'
  },
  {
    id: 'womens-2',
    name: 'Classic Blouse',
    description: 'Elegant silk blend blouse',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500&q=80',
    category: 'Tops'
  },
  {
    id: 'womens-3',
    name: 'Pleated Skirt',
    description: 'Mid-length pleated skirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80',
    category: 'Skirts'
  }
];

export const discountedProducts = [
  {
    id: 'discount-1',
    name: 'Premium Headphones',
    description: 'Noise cancelling wireless headphones',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics',
    discount: 33
  },
  {
    id: 'discount-2',
    name: 'Smart Watch Pro',
    description: 'Latest generation smartwatch',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    category: 'Electronics',
    discount: 25
  },
  {
    id: 'discount-3',
    name: 'Designer Handbag',
    description: 'Luxury leather handbag',
    price: 149.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
    category: 'Accessories',
    discount: 40
  },
  {
    id: 'discount-4',
    name: 'Running Shoes',
    description: 'Professional running shoes',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    category: 'Sports',
    discount: 30
  }
];

export const furnitureProducts = [
  {
    id: 'furniture-1',
    name: 'Modern Sofa Set',
    description: 'Comfortable 3-seater with premium fabric',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
    category: 'Furniture'
  },
  {
    id: 'furniture-2',
    name: 'Dining Table Set',
    description: '6-seater wooden dining set',
    price: 899.99,
    image: 'https://i.pinimg.com/564x/48/d1/37/48d1370ba7605687c364615cd5a32cda.jpg',
    category: 'Furniture'
  },
  {
    id: 'furniture-3',
    name: 'Queen Size Bed',
    description: 'Modern platform bed with storage',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80',
    category: 'Furniture'
  }
];

export const applianceProducts = [
  {
    id: 'appliance-1',
    name: 'Smart Refrigerator',
    description: 'Double-door smart fridge with water dispenser',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=80',
    category: 'Appliances'
  },
  {
    id: 'appliance-2',
    name: 'Washing Machine',
    description: 'Front-loading automatic washer',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80',
    category: 'Appliances'
  },
  {
    id: 'appliance-3',
    name: 'Microwave Oven',
    description: 'Digital microwave with grill function',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500&q=80',
    category: 'Appliances'
  }
];

export const mobileProducts = [
  {
    id: 'mobile-1',
    name: 'iPhone 16 Pro Max',
    description: 'Latest iPhone with pro camera system',
    price: 999.99,
    image: 'https://i.ytimg.com/vi/zCk4WBVU5cc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_OHIhgJmHXu1nlCySrPYw0zrTLw',
    category: 'Mobile'
  },
  {
    id: 'mobile-2',
    name: 'Samsung Galaxy S21',
    description: '5G enabled flagship smartphone',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80',
    category: 'Mobile'
  },
  {
    id: 'mobile-3',
    name: 'Google Pixel 6',
    description: 'Advanced AI camera features',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    category: 'Mobile'
  }
];

const groceryProducts = groceryCategories.flatMap(category => 
  category.products.map(product => ({
    ...product,
    category: category.name
  }))
);

export const allProducts = [
  ...products,
  ...kidsAccessories,
  ...boysProducts,
  ...girlsProducts,
  ...infantProducts,
  ...kidsShoes,
  ...pants,
  ...shirts,
  ...suits,
  ...tshirts,
  ...dresses,
  ...skirts,
  ...tops,
  ...kidsProducts,
  ...mensProducts,
  ...womensProducts,
  ...discountedProducts,
  ...furnitureProducts,
  ...applianceProducts,
  ...mobileProducts,
  ...groceryProducts
];