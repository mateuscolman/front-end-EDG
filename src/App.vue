<template>
    <div id="app">
        <div class="jumbotron">
            <h1 class="display-4">Escombros da Guerra</h1>
            <hr class="my-4">
            <p class="lead"> É o fim da era da magia no continente de Garguha. Há mil anos haviam centenas de criaturas e raças diferentes que convivam em constantes tensões por território e poder, enquanto monstros escalavam os mais altos muros fortificados dos castelos. Mas isso foi em um outro tempo. </p>
        </div>

        <div class="container">
            <router-link to="/" class="btn btn-dark mr-2">Home</router-link>
            <router-link :to="{path: '/spells'}" class="btn btn-dark">Magias</router-link>            
            <router-view></router-view>            
        </div>
    </div>
</template>
<script>


export default {
  
}
</script>

