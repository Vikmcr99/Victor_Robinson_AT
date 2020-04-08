import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import AddComentario from './components/AddComentario';
import Comentarios from './components/Comentarios';
import DetalheComentario from './components/DetalheComentario';
import EditarComentario from './components/EditarComentario';
import notfound from './components/notfound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    
    
    routes: [   
    {
        path:'/',
        name:'home',
        component: Home
    },
        
        {
            path:'/addcomentario',
            name:'addcomentario',
            component: AddComentario
        },
        {
            path: 'comentarios/:id',
            name: 'detalheComentario',
            component: DetalheComentario,
            children: [
                {
                    path: 'edit',
                    name: 'edit-comentario',
                    component: EditarComentario
                }
            ]
        },
        {
            path:'/comentarios',
            name:'comentarios',
            component: Comentarios
        },

        {
            path: '*',
            //name: 'notfound',
            component: notfound
          }
      
    ]

});