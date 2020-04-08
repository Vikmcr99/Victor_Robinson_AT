<template>

    <div class="container" id="comentarios">
        <div>
        <AddComentario/>
        </div>
        <h3 class="textocentro"> <b>Todas as Mensagens:</b></h3>
        <div v-for="comentario in allComentarios" :key="comentario.id">
        

            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ comentario.name }}</h5>
                <p class="card-text">{{ comentario.coment }}</p>
                <router-link :to="{name: 'detalheComentario', params: { id: comentario.id} }" class="btn btn-dark" style="margin-right: 15px;">Exibir Mensagem</router-link> 
                <button @click="deleteComentario(comentario.id)" class="btn btn-dark" style="width: 10em">Deletar</button>
            </div>
            </div>
            <br>
        </div>
    </div>
    
</template>

<script>
//importando os Getters e os Actions criados em comentarios.js
import { mapGetters, mapActions } from "vuex";
//importando o "component"/pagina Add Comentários para que possa ser exibida na pagina dos comentários tbm.
import AddComentario from "./AddComentario"
export default {
    name: "Comentarios",
    methods: {
        ...mapActions(["getComentarios", "deleteComentario"]),
    },
    components: {AddComentario},
    computed: mapGetters(["allComentarios"]),
    created() {
        this.getComentarios();
    }
};
</script>    

<style>

</style>