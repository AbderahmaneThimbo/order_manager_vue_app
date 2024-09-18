<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
              <RouterLink class="nav-link" to="/"><i class="fa-solid fa-users"></i> Clients</RouterLink>
            </li>
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/products"><i class="fa-solid fa-basket-shopping"></i> Produits</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/orders"><i class="fa-solid fa-cart-arrow-down"></i> Commandes</RouterLink>
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
img{
  width: 70px;
}
</style> 


