<template>
	<div class="card">
    <p><span>Goles</span></p>
    <p><span>Asistencias</span></p>
    <p><span>Minutos</span></p>
    <p><span>Partidos</span></p>
</div>
</template>

<script setup></script>

<style scoped>
.card {
  /* width: 210px; */
  width: 100%;
  height: 254px;
  /* border-radius: 4px; */
  background: black;
  display: flex;
  gap: 5px;
}

.card p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  transition: all .5s ease-in-out;
  background: url("/images/T.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card p:hover {
  flex: 4;
}

.card p span {
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: black;
  font-weight: 700;
  letter-spacing: .1em;
}

.card p:hover span {
  transform: rotate(0);
}
</style>
