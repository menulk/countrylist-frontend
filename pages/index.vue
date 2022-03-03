<template>
<div style="overflow-auto; background-color: #8fc4b7;" id="App" class="crow justify-content-center">
   <h1 class="p-5 bg-info text-warning text-center">Country List Dashboard</h1>
  <div class="form-inline d-flex justify-content-center p-4">
<input class="form-control col-md-4 col-md-offset-3" id="system-search" name="q" placeholder="Search for" required>
<router-link :to="'addnew'" class="btn btn-success col-md-2 col-md-offset-3">Add New</router-link>
  </div>              

   <table class="table table-striped table-hover table-bordered">
     
     <thead class="table-active">
            <tr class="">
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr> 
     </thead> 
     <tbody>    
            <tr v-for="item in country" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>
                  <router-link :to="'update/'+item.id" class="btn btn-info">Update</router-link>
                  <button class="btn btn-danger" v-on:click="deleteCountry(item.id)">Delete</button>   
                  </td>
                
            </tr>
     </tbody>
        </table>   


 </div>  
</template>


<script> 
import axios from "axios";
    export default {
      name: "app",
      data() {
        return {
          countryname:'',
          country:[],
          
        }
      },
      
   
   
   
   methods:{
     async deleteCountry(id)
     {
       let result=await axios.delete("https://localhost:7052/api/countryitems/"+id);
       console.warn(result)
       if(result.status==200)
       {
           this.loadData()
           
       }
     },

   async loadData()
   {
       let result =await axios.get("https://localhost:7052/api/countryitems");
       this.country=result.data;


   }

   },

   async mounted()
   {
       this.loadData();
   },
};
 

      
 /*
   
        async mounted() {

          let result=await axios.get("https://localhost:7052/api/countryitems");
          console.warn(result);
          this.country=result.data;

        },
      
     

      
    };

    */
    </script>
    
    <style>
    .table {
      margin: auto;
      width: 50% !important;
    }
    .table tr:last-child td:first-child {
        border: 2px;
        border-bottom-left-radius: 10px;
    }
    
    .table tr:last-child td:last-child {
        border: 2px;
        border-bottom-right-radius: 10px;
    }
    .table tr:first-child th:first-child {   
        border-top-left-radius: 20px;
    }
    
    .table tr:first-child th:last-child {
        border-top-right-radius: 20px;
    }
    


    </style>