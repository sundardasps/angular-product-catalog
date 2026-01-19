import { computed, inject } from '@angular/core';
import { Product } from './models/products';
import { produce } from 'immer';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Toaster } from './service/toaster';
import { cartItem } from './models/cart';

export type EcommerceState = {
  products: Product[];
  categories: string[];
  wishlistItems: Product[];
  cartItems: cartItem[];
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: [
      {
        id: 'p1',
        name: 'Wireless Headphones',
        price: 2999,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg', // headphones
        description: 'High-quality wireless headphones with noise cancellation.',
        category: 'Electronics',
        rating: 4.5,
        reviewCount: 120,
        inStock: true,
      },
      {
        id: 'p2',
        name: 'Smart Watch',
        price: 4999,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_1280.jpg', // smartwatch style
        description: 'Smart watch with fitness tracking and notifications.',
        category: 'Electronics',
        rating: 4.2,
        reviewCount: 95,
        inStock: true,
      },
      {
        id: 'p3',
        name: 'Bluetooth Speaker',
        price: 1999,
        imageUrl: 'https://cdn.pixabay.com/photo/2020/08/09/17/07/speaker-5476085_1280.jpg', // speaker style
        description: 'Portable Bluetooth speaker with deep bass.',
        category: 'Electronics',
        rating: 4.3,
        reviewCount: 78,
        inStock: true,
      },
      {
        id: 'p4',
        name: 'Gaming Mouse',
        price: 1499,
        imageUrl: 'https://cdn.pixabay.com/photo/2022/08/14/16/39/mouse-7386247_1280.jpg', // mouse :contentReference[oaicite:1]{index=1}
        description: 'Ergonomic gaming mouse with RGB lighting.',
        category: 'Accessories',
        rating: 4.6,
        reviewCount: 210,
        inStock: true,
      },
      {
        id: 'p5',
        name: 'Mechanical Keyboard',
        price: 3499,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/08/31/14/16/keyboard-915520_1280.jpg', // mechanical keyboard style
        description: 'Mechanical keyboard with tactile switches.',
        category: 'Accessories',
        rating: 4.7,
        reviewCount: 165,
        inStock: true,
      },
      {
        id: 'p6',
        name: 'Laptop Stand',
        price: 999,
        imageUrl: 'https://cdn.pixabay.com/photo/2021/06/13/08/29/laptop-6332600_1280.jpg', // laptop on desk with stand
        description: 'Adjustable aluminum laptop stand.',
        category: 'Office',
        rating: 4.1,
        reviewCount: 54,
        inStock: true,
      },
      {
        id: 'p7',
        name: 'USB-C Hub',
        price: 1799,
        imageUrl: 'https://cdn.pixabay.com/photo/2019/09/23/14/32/cable-4498743_1280.jpg', // USB hub
        description: 'Multi-port USB-C hub for laptops.',
        category: 'Accessories',
        rating: 4.4,
        reviewCount: 88,
        inStock: true,
      },
      {
        id: 'p8',
        name: 'Wireless Charger',
        price: 1299,
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/06/14/01/19/wireless-charger-8062082_1280.jpg', // wireless charger
        description: 'Fast wireless charging pad.',
        category: 'Electronics',
        rating: 4.0,
        reviewCount: 60,
        inStock: true,
      },
      {
        id: 'p9',
        name: 'Power Bank',
        price: 2199,
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/03/27/14/44/promotional-products-694794_1280.jpg', // power bank style
        description: '10000mAh power bank with fast charging.',
        category: 'Electronics',
        rating: 4.3,
        reviewCount: 140,
        inStock: true,
      },
      {
        id: 'p10',
        name: 'Noise Cancelling Earbuds',
        price: 3999,
        imageUrl: 'https://cdn.pixabay.com/photo/2020/05/14/09/54/earphones-5193970_1280.jpg', // earbuds
        description: 'Compact earbuds with active noise cancellation.',
        category: 'Electronics',
        rating: 4.6,
        reviewCount: 190,
        inStock: false,
      },
      {
        id: 'p11',
        name: 'Desk Lamp',
        price: 1599,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg', // desk lamp
        description: 'LED desk lamp with adjustable brightness.',
        category: 'Home',
        rating: 4.2,
        reviewCount: 72,
        inStock: true,
      },
      {
        id: 'p12',
        name: 'Backpack',
        price: 2499,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/01/36/businessman-1866582_1280.jpg', // backpack
        description: 'Water-resistant laptop backpack.',
        category: 'Fashion',
        rating: 4.5,
        reviewCount: 110,
        inStock: true,
      },
      {
        id: 'p13',
        name: 'Office Chair',
        price: 8999,
        imageUrl: 'https://cdn.pixabay.com/photo/2021/09/26/11/44/chair-6657317_1280.jpg', // office chair
        description: 'Ergonomic office chair with lumbar support.',
        category: 'Office',
        rating: 4.4,
        reviewCount: 85,
        inStock: false,
      },
      {
        id: 'p14',
        name: 'Monitor 24-inch',
        price: 12999,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg', // monitor / screen
        description: 'Full HD 24-inch IPS monitor.',
        category: 'Electronics',
        rating: 4.6,
        reviewCount: 155,
        inStock: true,
      },
      {
        id: 'p15',
        name: 'Webcam',
        price: 2799,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/02/24/12/30/camera-1219748_1280.jpg', // webcam
        description: 'HD webcam for video calls and streaming.',
        category: 'Accessories',
        rating: 4.1,
        reviewCount: 64,
        inStock: true,
      },
      {
        id: 'p16',
        name: 'External Hard Drive',
        price: 5499,
        imageUrl: 'https://cdn.pixabay.com/photo/2023/03/27/07/59/hdd-7880077_1280.jpg', // hard drive
        description: '1TB external hard drive.',
        category: 'Electronics',
        rating: 4.5,
        reviewCount: 132,
        inStock: true,
      },
      {
        id: 'p17',
        name: 'Smart LED Bulb',
        price: 799,
        imageUrl: 'https://cdn.pixabay.com/photo/2020/07/28/08/30/led-5444357_960_720.jpg', // smart bulb
        description: 'WiFi-enabled smart LED bulb.',
        category: 'Home',
        rating: 4.0,
        reviewCount: 48,
        inStock: true,
      },
      {
        id: 'p18',
        name: 'Fitness Band',
        price: 2299,
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/12/13/12/37/heart-rate-monitoring-device-1903997_1280.jpg', // fitness band
        description: 'Fitness band with heart rate monitoring.',
        category: 'Electronics',
        rating: 4.3,
        reviewCount: 98,
        inStock: true,
      },
    ],
    category: 'all',
    wishlistItems: [] as Product[],
    cartItems: [] as cartItem[],
  }),
  withComputed(({ category, products, wishlistItems, cartItems }) => ({
    filteredProducts: computed(() => {
      const selected = category().toLowerCase();
      return products().filter(
        (product) => product.category.toLowerCase() === selected || selected === 'all'
      );
    }),
    wishlistCount: computed(() => wishlistItems().length),
    cartCount: computed(() => cartItems().reduce((acc, item) => acc + item.quantity, 0)),
  })),
  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category) => {
      patchState(store, { category });
    }),
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((item) => item.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { wishlistItems: updatedWishlistItems });
      toaster.success('Product added to wishlist');
    },
    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter((item) => item.id !== product.id),
      });
      toaster.success('Product removed from wishlist');
    },
    clearWishlist: () => {
      patchState(store, { wishlistItems: [] });
    },

    addToCart: (product: Product, quantity = 1) => {
      const existingIndex = store.cartItems().findIndex((p) => p.product.id === product.id);

      const updatedCardItem = produce(store.cartItems(), (draft) => {
        if (existingIndex !== -1) {
          draft[existingIndex].quantity += quantity;
          return;
        }
        draft.push({ product, quantity });
      });

      patchState(store, { cartItems: updatedCardItem });
      toaster.success(existingIndex !== -1 ? 'Product added again' : 'Product add to cart');
    },

    setItemQuantity(params: { productId: string; quantity: number }) {
      const index = store.cartItems().findIndex((c) => c.product.id === params.productId);
      const updated = produce(store.cartItems(), (draft) => {
        draft[index].quantity = params.quantity;
      });

      patchState(store, { cartItems: updated });
    },

    addAllWishlistToCart: () => {
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        store.wishlistItems().forEach((p) => {
          if (!draft.find((c) => c.product.id === p.id)) {
            draft.push({ product: p, quantity: 1 });
          }
        });
      });
      patchState(store, { cartItems: updatedCartItems, wishlistItems: [] });
    },

    moveToWishlist: (product: Product) => {
      const updatedCartItems = store.cartItems().filter((item) => item.product.id !== product.id);
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((p) => p.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { cartItems: updatedCartItems, wishlistItems: updatedWishlistItems });
    },

    removeFromCart: (product: Product) => {
      patchState(store, {
        cartItems: store.cartItems().filter((p) => p.product.id !== product.id),
      });
    },
  }))
);
