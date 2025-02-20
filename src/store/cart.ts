import { defineStore } from "pinia";
import { ref } from "vue";
import type { Products } from "../types";

export const useCartStore = defineStore("cart", () => {
  const products = ref<Products[]>([
    {
      id: 1,
      category: "waffle",
      name: "Waffle with Berries",
      price: 6.5,
      quantity: 0,
    },
    {
      id: 2,
      category: "Crème Brûlée",
      name: "Vanilla Bean Crème BrûléeBerries",
      price: 7.0,
      quantity: 0,
    },
    {
      id: 3,
      category: "macaron",
      name: "Macaron Mix of Five",
      price: 8.0,
      quantity: 0,
    },
    {
      id: 4,
      category: "tiramisu",
      name: "Classic Tiramisu",
      price: 5.5,
      quantity: 0,
    },
    {
      id: 5,
      category: "baklava",
      name: "Pistachio Baklava",
      price: 4.0,
      quantity: 0,
    },
    {
      id: 6,
      category: "pie",
      name: "Lemon Meringue Pie",
      price: 5.0,
      quantity: 0,
    },
    {
      id: 7,
      category: "cake",
      name: "Red Velvet Cake",
      price: 5.0,
      quantity: 0,
    },
    {
      id: 8,
      category: "brownie",
      name: "Salted Caramel Brownie",
      price: 5.5,
      quantity: 0,
    },
    {
      id: 9,
      category: "Panna Cotta",
      name: "Vanilla Panna Cotta",
      price: 6.5,
      quantity: 0,
    },
  ]);
  const cart = ref([] as Products[]);

  const addQuantity = (productId: number): void => {
    const product = products.value.filter((item) => item.id === productId);
    product[0].quantity++;
  };

  const addProductToCart = (productId: number): void => {
    const [product] = products.value.filter((item) => item.id === productId);
    if (cart.value.indexOf(product) === -1) {
      cart.value.push(product);
    }

    product.quantity++;
  };

  const subtractQuantity = (productId: number): void => {
    const [product] = products.value.filter((item) => item.id === productId);
    if (!product) return;
    product.quantity--;
  };

  const removeProductFromCart = (productId: number): void => {
    for (let i = 0; i < cart.value.length; i++) {
      const product = cart.value[i];
      if (product.id == productId) {
        if (product.quantity > 0) {
          product.quantity--;
        } else {
          cart.value.splice(i, 1);
        }
      }
    }
  };

  return {
    addQuantity,
    addProductToCart,
    subtractQuantity,
    removeProductFromCart,
    products,
    cart,
  };
});
