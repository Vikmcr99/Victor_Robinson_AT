<template>

    <div class="container">
        <br>
        <h1>Detalhes da Mensagem</h1>
        
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ id }} - {{ comentarioById(id).name }}</h5>
                <p class="card-text">{{ comentarioById(id).coment }}</p>
                <button @click="editar" class="btn btn-dark" style="margin-right: 15px; width:10em">Editar</button>
                <router-link tag="button" :to="{ name: 'comentarios' }" class="btn btn-dark" style="width: 10em">Voltar</router-link>
                <router-view></router-view>
            </div>
        </div>



        
        
    </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "DetalheComentario",
    data: function(){
        return{
            id : this.$route.params.id,}
        },
    computed: mapGetters(["comentarioById"]),
    methods: {
        editar() {
            this.$router.push({ name: 'edit-comentario', params: {id: this.id} });
        }
    }
}
</script>
