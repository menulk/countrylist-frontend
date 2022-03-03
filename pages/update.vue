<template>
 <section class="h-100 h-custom" style="background-color: #8fc4b7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
  <div class="card rounded-3">
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;" alt="Sample photo">



<div class="card-body p-4 p-md-5">
    <form class="form-horizontal px-md-2">
      <div class="form-group col-md-12" id="app">
       
        <h3 class="d-flex justify-content-center">Update Country Form</h3>
        <br>
    
        <label for="countryname" class="form-label">Country Name</label>
        <input type="text" class="form-control" id="countryname" name="countryname" v-model="countryname" /> <br />
       
        <label for="countrydescription" class="form-label">Country Description</label>
        <input type="text" class="form-control" id="countrydescription" name="countrydescription" v-model="countrydescription" /><br />
        
        <button type="button" class="btn btn-success" name="updateCountry" v-on:click="updateCountry()">Update Country</button>
      </div>
    </form>
</div>


      </div>
      </div>
    </div>
  </div>
 </section>
    
    </template>
    
    
    
    
    
    <script>
    import axios from "axios";
    export default {
      name: "app",
      data() {
        return {
          countryname: "",
          countrydescription: "",
        };
      },
      methods: {
        async updateCountry() {
          let result = await axios.put("https://localhost:7052/api/countryitems", {
            name: this.countryname,
            description: this.countrydescription,
          });
          console.warn(result);
        },      
    
      },
    };
    </script>
    
    <style>
    </style>