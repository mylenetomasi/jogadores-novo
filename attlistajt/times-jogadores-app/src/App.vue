<script></script>

<template>
  <header>
    <div class="menu-esquerdo">
      <span class="texto-header">Home</span>
      <span>|</span>
      <span><RouterLink to="/jogadores">Jogadores</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/times">Times</RouterLink></span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 100%;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;
  font-weight: normal;
}

a{
  color: inherit;
  text-decoration: none;
}

header,
footer {
  background-color: rgb(0, 114, 28);
  height: 15%;
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 2%;
  justify-content: space-between;
}
main {
  min-height: 70%;
  padding-left: 2%;
}
header span {
  padding: 0 10px;
}
</style>
