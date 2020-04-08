<template>

<div id="app">
      <div class="container">
        <h1 class="display-4"><b>Assessment - Victor Robinson</b></h1>
        <p class="lead">Curso: Engenharia de software </p>
        <p class="lead">Professora: Thais Viana  </p>
        <p class="lead">Frameworks Front-end e Conexão com Back-end </p>
        <router-link to="/" class="btn btn-dark" style="margin-right: 15px; width:20em">HOME</router-link>
        <router-link to="/Comentarios" class="btn btn-dark" style="width: 20em">VER MURAL</router-link>
        
    </div> 
     <router-view />
     <footer class="container" id="logo"><img src="./assets/infnet.png" alt="Logo" ></footer> 
</div>


</template>

<script>
export default {
  name: 'App',
}
</script>


