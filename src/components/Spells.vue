<template>
  <div>
    <div class="mt-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a @click="setChanges()" class="navbar-brand" href="#">Todas</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a @click="setChanges(0)" class="nav-link" href="#"
                >Truques</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(1)" href="#">1º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(2)" href="#">2º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(3)" href="#">3º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(4)" href="#">4º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(5)" href="#">5º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(6)" href="#">6º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(7)" href="#">7º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(8)" href="#">8º Círculo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="setChanges(9)" href="#">9º Círculo</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>    
    <div id="spells" class="jumbotron mt-1" v-for="spells in spells" v-bind:key="spells.spellId">       
        <h4>{{levelDescription(spells.spellLevel)}}</h4>
        <hr class="my-4" />                                               
            <p class="lead">{{spells.spellName}}</p>
            <p class="lead">{{spells.spellSchool}}</p>          
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            spells: []                  
        }
    },
    methods:{
        fetchSpells(uri){            
            this.$http.get("https://localhost:44396/api/"+uri)
            .then((result) => {
            this.spells = result.data
        })},
        setChanges(level){            
            var uri= level == null ? "spells" : "spells/TakeByLevel/"+level
            this.fetchSpells(uri);
        },
        levelDescription(item){
        return item == 0 ? "Truque" :
            "Magia de "+item+"º Círculo"
        }
    }
}
</script>

<style>
#spells{
    cursor: pointer;
    transition: 0.5s;
}
#spells:hover{
    background-color: #f7f7f7;
}
</style>