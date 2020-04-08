<template>
    <div class="container">
        <br>
        <h5> Edição do comentário </h5>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
            <label for="name">Nome:</label>
            <input class="form-control" type="text" id="name" v-model="add_comentario.name">
            <label for="coment">Mensagem:</label>
            <textarea class="form-control" rows="3" type="textarea" id="coment" v-model="add_comentario.coment"></textarea>
            <br>
            <input type="submit" value="Enviar" class="btn btn-dark"> 
            </div>
        </form>
        </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "EditarComentario",
    data() {
        return {
            id:this.$route.params.id,
            add_comentario : {
                name: "",
                coment: ""
            }
        }
    },
    computed: mapGetters(["comentarioById"]),
    created() {
        this.add_comentario = this.comentarioById(this.id)
    },
    methods: {
        ...mapActions(["updateComentario"]),
        onSubmit() {
            this.updateComentario(this.add_comentario);
            alert("As alterações foram feitas!")
        }
    }
    
}
</script>