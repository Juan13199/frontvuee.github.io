<template>
    
  
    
        <!-- Page Content -->
        <div class="content pt-0">
          <!-- Checkable Table (.js-table-checkable class is initialized in Helpers.cbTableToolsCheckable()) -->
          <div class=" block-content">

           
            <div class="block block-rounded  block-rounded block-header-default">
              <div class="block block-rounded">
                <!-- Grid Based -->
                <h3 class="block-title ms-4" style="color:blue">Filtro de Búsqueda</h3>
              </div>
              <div class="row col-12">
               
                <div class="col-12">
                  <!-- Form Grid -->
                  <div >
                    <div class="row mb-4 ms-1">

                      <div class="col-12 col-md-2">
                        <input class="form-control"  v-model="filterField"  id="buscar" name="buscar" placeholder="Buscar por Código"/>
                      </div>
                      <div class="col-12 col-md-2">
                        <select v-model="BuscarTipo" class="form-select" id="example-select" name="example-select">
                          <option value="0">Tipo</option>
                          
                              <option  value="1">Venta</option>
                              <option  value="2">Alquiler</option>
                              <option  value="3">AlquilerAmueblado</option>
                          
                        </select>
                      </div>
                      <div class="col-12 col-md-2">
                        <select v-model="BuscarHabitaciones" class="form-select" id="example-select" name="example-select">
                          <option value="">Habitaciones</option>
                          
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                        </select>
                      </div>
                      
                      <div class="col-12 col-md-3">
                        <input class="form-control" type="date" onkeydown="return false"  @bind="FechaMinima">
                    </div>
                    <div class="col-12 col-md-3">
                      <input class="form-control " type="date" onkeydown="return false"  @bind="FechaMaxima">
                    </div>
                    </div>

                    <div class="row mb-4">
                      
                      <div class="col-12 col-md-3">
                        <h4 class="block-title ms-4">Estado:</h4>
                        <div class="form-check  form-check-inline">
                          <label class="ms-1">Usada</label>
                        <input type="checkbox"  class="ms-1" v-on:click="filterEnConstruccion=0 ; filterNueva=0"  v-model="filterUsado"/> 
                        <label class="ms-2">Construncción</label>
                        <input class="ms-1" type="checkbox"  v-on:click="filterUsado=0;filterNueva=0;"  v-model="filterEnConstruccion"/>
                    
                        <label class="ms-2">Nueva</label>
                        <input type="checkbox"  v-on:click="filterEnConstruccion=0 ; filterUsado=0"  v-model="filterNueva"/>
                        </div>
                      </div>
                      <div class="col-12 col-md-2">
                       
                        <div class="form-check  form-check-inline">
                       
                          <select v-model="BuscarBannos" class="form-select" id="example-select" name="example-select">
                            <option value="">Baños</option>
                            
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3 o más</option>
                          </select>
                        </div>
                      </div>
                    
                      <div class="col-12 col-md-3">
                        <div class="input-group">
                          <div class="col-md-3">
                          <select v-model="Operaciones" class="form-select" id="example-select" >
                            <option value="0">=</option>
                            
                                <option value="1"> >= </option>
                                <option value="2"> &lt;= </option>
                          </select>
                        </div>
                          <input type="text" class="form-control" placeholder="Precio"/>
                        </div>
                      </div>
                      <div class="col-12 col-md-2">
                        <input type="text" class="form-control" placeholder="Parking">
                      </div>
                      <div class="col-12 col-md-2">
                        <select v-model="filterDivisa" class="form-select" id="example-select" >
                          <option value="0">Divisa</option>
                          
                              <option value="1"> US$ </option>
                              <option value="2"> EU€ </option>
                              <option value="3"> RD€ </option>
                        </select>
                      </div>
                    </div>
                   
                  </div>
                  <!-- END Form Grid -->
                </div>
              </div>
              </div>
              </div>
            
            
     
          <!-- END Checkable Table -->

          <!-- Table Sections (.js-table-sections class is initialized in Helpers.cbTableToolsSections()) -->
          <h2 class="content-heading">Table Sections</h2>
          <div class="block block-rounded">
            <div class="block-header block-header-default">
              <h3 class="block-title">
                <code>In_Dominican</code>
              </h3>
            </div>
            <div class="block-content">
              <!--
              Separate your table content with multiple tbody sections. Add one row and add the class .js-table-sections-header to a
              tbody section to make it clickable. It will then toggle the next tbody section which can have multiple rows. Eg:

              <tbody class="js-table-sections-header">One row</tbody>
              <tbody>Multiple rows</tbody>
              <tbody class="js-table-sections-header">One row</tbody>
              <tbody>Multiple rows</tbody>
              <tbody class="js-table-sections-header">One row</tbody>
              <tbody>Multiple rows</tbody>

              You can also add the class .show in your tbody.js-table-sections-header to make the next tbody section visible by default
              -->
              <table class="js-table-sections table table-hover">
                <thead>
                  <tr>
                    <th class="text-center" style="width: 10%;">#</th>
                    <th style="width: 12%;">Código</th>
                    <th  style="width: 25%;">Nombre</th>
                    <th style="width: 10%;">Tipo</th>
                    <th class="d-none d-sm-table-cell" style="width: 11%;">Precio</th>
                    <th style="width: 20%;">Sitio Web</th>
                  </tr>
                </thead>
                
                <tbody v-show="filter(post)" v-for="post in  posts" :key="post.anuncio" class="js-table-sections">
              
                  <tr>
                    <td class="text-center">
                      <button :id="post.anuncio"  class="btn btn-sm btn-alt-success" @click.prevent="check(post.anuncio)" type="button" >+Info</button>
                    </td>
                    <td style="color:red" class="fw-semibold"> {{post.anuncio}}</td>
                    <td>
                      <span class="badge bg-primary">{{post.nombre}}</span>
                    </td>
                    <td class="d-none d-sm-table-cell">
                      <span v-if="post.tipo==1">Venta</span>
                      <span v-else-if="post.tipo==2">Alquiler</span>
                      <span v-else>Alquiler Amueblado</span>
                      
                    </td>
                    <td style="color:green" class="fw-semibold">
                      {{post.precio}}
                    </td>
                    <td class="d-none d-sm-table-cell">
                      <button class="btn btn-sm btn-alt-info" ><a target="_blank" :href="post.url">Go -></a> </button>
                    </td>
                  </tr>
                  <template id="datosExtra" v-if="Active==post.anuncio">
                  <tr>
                   
                    <td class="fw-semibold ">Aseos:<br/> {{post.bannos}}</td>
                    <td class="d-none d-sm-table-cell fw-semibold"> 
                      Uso :
                      <span v-if="post.uso!=''" class=" text-muted"> {{post.uso}}</span>
                      <span v-else class=" text-muted"> Indefinido</span>
                    </td>
                    <td class="text-justify"> Facilidades: {{post.facilidades}}</td>
                    <td class="d-none d-sm-table-cell fw-semibold">
                      Año de Publicación
                      <span v-if="post.anno!=''" class=" text-muted"> {{post.anno}}</span>
                      <span v-else class=" text-muted"> Indefinido</span>
                    </td>
                    <td class="fw-semibold ">
                      Nº Habitaciones: 
                      <span class=" text-muted"> {{post.habitaciones}}</span>
                      
                    </td>
                    <td class="fw-semibold ">
                      Nº Parking : <br/>
                      <span v-if="post.parking!=''" class=" text-muted"> {{post.parking}}</span>
                      <span v-else class=" text-muted"> Indefinido</span>
                    </td>
                  </tr>
                  <tr>
                    
                    <td></td>
                    <td colspan="5" class="text-justify  d-sm-table-cell">
                      <span class="fw-semibold">Información Detallada:</span>
                      {{post.obser}} ...Estado :{{post.estado}}
                    </td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                </template>

            
                </tbody>
             
              </table>

              <!-- <nav aria-label="..." >
            <ul class="pagination">
              <li class="page-item ">
                <a class="page-link"  v-on:click="getPreviousPage()" href="#" >Previous</a>
              </li>
             
              <li v-for="pagina in totalPaginas()" :key="pagina" v-on:click="getDataPagina(pagina)" class="page-item"
              :class="{active: paginaActual==pagina}" aria-current="page">
                <a class="page-link" href="#">{{pagina}}</a>
              </li>
           
              <li class="page-item">
                <a class="page-link"  v-on:click="getNextPage()" href="#">Next</a>
              </li>
            </ul>
          </nav> -->
            </div>
            
          </div>
          <!-- END Table Sections -->
         
        </div>
      
      <!-- END Footer -->
</template>

<script>
import navvv from '@/components/Nav.vue'
import axios from "axios";
export default {
  name: 'PageN',
  components: {
    navvv,
  },data(){
    return{
        posts:[],
        filterField:'',
        Active:'',
        BuscarHabitaciones:'',
        BuscarBannos:'',
        BuscarTipo:0,
        filterUsado:0, //Segundo Uso o Usado ?
        filterEnConstruccion:0, //En construcción
        filterNueva:0,
        Operaciones:0,
        filterDivisa:0
        // elementosPorPagina:30,
        // datosPaginados:[],
        // paginaActual:1
      }
  },methods:{
    filter(post){
      var show=true;
      
      if(this.BuscarTipo==0 && this.BuscarHabitaciones==0 && this.filterUsado==0 && this.filterEnConstruccion==0
      && this.filterNueva==0 && this.filterField==''){
        show=true;
       
      }else if((post.tipo!=this.BuscarTipo && this.BuscarTipo)){
        show=false;
      }
      else if((post.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0)
      ||(post.bannos.toLocaleLowerCase().indexOf(this.BuscarBannos)<0)
      ||post.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toLocaleLowerCase())<0 
      ||(post.estado!='Usado' && this.filterUsado)||(post.estado!='En construcción' && this.filterEnConstruccion)||(post.estado!='Nueva' && this.filterNueva)){
        show=false
      }
       return show;
      
     /*  return this.datosPaginados= post.filter(casas => casas.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())>-1 
      || casas.nombre.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())>-1 
      || casas.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toString().toLocaleLowerCase())>-1
      || casas.tipo.toLocaleLowerCase().indexOf(this.BuscarTipo.toString())>-1) */
      //console.log(post.nombre+""+ this.filterField);
      //return ((post.nombre.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) > -1 ||post.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) >-1)); 
       //|| post.tipo.toLocaleLowerCase().indexOf(this.BuscarTipo.toLocaleLowerCase()) > -1 || post.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toLocaleLowerCase()>0));
    },
    check(post){
      if(this.Active==post){
         this.Active='';
      }else{ this.Active=post;}
      
       console.log(this.Active+"");
    }/* ,

    totalPaginas(){
      return Math.ceil(this.posts.length /this.elementosPorPagina)
    },
    getDataPagina(noPagina){
      this.paginaActual=noPagina;
      this.datosPaginados=[];
      let ini=(noPagina * this.elementosPorPagina) -this.elementosPorPagina;
      let fin=(noPagina* this.elementosPorPagina);
     
       
       this.datosPaginados= this.posts.slice(ini,fin);
     for (let index = 0; index < this.datosPaginados.length; index++) {
      var element = this.datosPaginados[index];
      console.log(element+"");
     }
      
      
    },
    getPreviousPage(){
      if(this.paginaActual > 1){
        this.paginaActual--;
      }
      this.getDataPagina(this.paginaActual);
    },
    getNextPage(){
      if(this.paginaActual < this.totalPaginas()){
        this.paginaActual++;
      }
      this.getDataPagina(this.paginaActual);
    }  */
  },
  async created(){

    axios.get('https://rd.eisi.cc/WS/listadoGeneral.php', {
    headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        }
      }).then(res => {
        
        console.log(res);
        this.posts=res.data.listado;
    
      }).catch(err => {
        console.log(err.response);
      }); 
  
},
    mounted(){

   // this.getDataPagina(1);
  }
}
</script>

<style>

@import '../assets/css/codebase.min.css';
 
</style>