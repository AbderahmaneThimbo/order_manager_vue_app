<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container">        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/"><i class="fa-solid fa-users"></i> Customers</RouterLink>
            </li>
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/products"><i class="fa-solid fa-basket-shopping"></i> Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/orders"><i class="fa-solid fa-cart-arrow-down"></i> Orders</RouterLink>
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
  background-color: #464646; 
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 21px;
}

.navbar-nav .nav-link {
  color: white;
}

.navbar-nav .nav-link:hover {
  color: #00bfff; 
}
.navbar-nav .nav-link:focus{
  color: #00bfff; 
}
.contenu {
  padding: 20px;
}
</style>
