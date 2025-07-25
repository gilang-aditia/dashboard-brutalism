export const dummyProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    description:
      "Premium quality wireless headphones with noise cancellation and 30-hour battery life",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    stock: 25,
    brand: "AudioTech",
  },
  {
    id: 2,
    title: "Ergonomic Office Chair",
    description:
      "Comfortable office chair with lumbar support and adjustable height",
    category: "Furniture",
    price: 299.99,
    rating: 4.8,
    stock: 12,
    brand: "ComfortZone",
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitoring and GPS",
    category: "Electronics",
    price: 199.99,
    rating: 4.2,
    stock: 0,
    brand: "FitTech",
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    description: "Soft and breathable organic cotton t-shirt in various colors",
    category: "Clothing",
    price: 24.99,
    rating: 4.6,
    stock: 50,
    brand: "EcoWear",
  },
  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    description: "Insulated water bottle that keeps drinks cold for 24 hours",
    category: "Lifestyle",
    price: 34.99,
    rating: 4.7,
    stock: 30,
    brand: "HydroFlow",
  },
  {
    id: 6,
    title: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with tactile switches",
    category: "Electronics",
    price: 149.99,
    rating: 4.4,
    stock: 18,
    brand: "GameTech",
  },
];

export type Product = (typeof dummyProducts)[0];
