<template>
   <div class="container">
        <br>
        <h3><b>Faça um comentário:</b></h3>
        
        <form @submit.prevent="onSubmit">
            <div class="form-group">
            <div><h3>Nome:</h3></div>
            <input class="form-control" type="text" id="name" v-model="add_comentario.name">
            <div><h3>Mensagem:</h3></div>
            <textarea class="form-control" rows="6" type="textarea" id="coment" v-model="add_comentario.coment"></textarea>
            <div><input type="submit" value="Enviar"></div>
            
            </div>
        </form>
        </div>

</template>

<script>
//importando os Actions de comentario.js
import { mapGetters, mapActions } from "vuex";

export default {
    name: "AddComentario",
    data() {
        return {
            add_comentario : {
                name: "",
                coment: ""
            }
        };
    },

    methods: {
        ...mapActions(["addComentario", "getComentarios", "deleteComentario"]),
        onSubmit() {
            console.log("testando submit")
            this.addComentario(this.add_comentario);
            alert("Comentário Adicionado!")
            
        }
    },
    
    
    computed: mapGetters(["allComentarios"]),
    created() {
        this.getComentarios();
    }
};    
</script>

<style>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid rgb(255, 255, 255);
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: rgb(51, 54, 54);
  border: 1px solid rgb(255, 255, 255);
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>