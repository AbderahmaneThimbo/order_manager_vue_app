<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const activeRoute = ref("");
const route = useRoute();

const setActiveRoute = (path) => {
  activeRoute.value = path;
};

activeRoute.value = route.path;
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <RouterLink :class="['nav-link', { active: activeRoute === '/' }]" id="pills-customers-tab" to="/"
                @click="setActiveRoute('/')">
                <i class="fa-solid fa-users"></i> Customers
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :class="['nav-link', { active: activeRoute === '/products' }]" id="pills-products-tab"
                to="/products" @click="setActiveRoute('/products')">
                <i class="fa-solid fa-basket-shopping"></i> Products
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :class="['nav-link', { active: activeRoute === '/orders' }]" id="pills-orders-tab"
                to="/orders" @click="setActiveRoute('/orders')">
                <i class="fa-solid fa-cart-arrow-down"></i> Orders
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container contenu">
    <RouterView />
  </div>
</template>

<style scoped>
.custom-navbar {
  background-color: whitesmoke;
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 21px;
}

.navbar-nav .nav-link {
  color: white;
}

.navbar-nav .nav-link.active {
  color: #00bfff;
}

.contenu {
  padding: 20px;
}
</style>
