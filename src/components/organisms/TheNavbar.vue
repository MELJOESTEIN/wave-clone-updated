<script setup>
/**
 * TheNavbar — ORGANISME.
 * Logo (atome) + deux NavMenu (molécules).
 * Les liens viennent des données (data/navigation.js).
 */
import TheLogo from '@/components/atoms/TheLogo.vue'
import NavMenu from '@/components/molecules/NavMenu.vue'
import { primaryNav, secondaryNav } from '@/data/navigation.js'
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <div class="navbar__left">
        <TheLogo />
        <NavMenu :items="primaryNav" />
      </div>
      <NavMenu :items="secondaryNav" />
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: #fff;
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
}
.navbar__left {
  display: flex;
  align-items: center;
  gap: 56px;
}
</style>
