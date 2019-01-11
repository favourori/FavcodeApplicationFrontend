<template>
  <div class="hello">
    <!--body of form here here-->
    <div class="container" style="margin-top: 60px">
      <h4 style="font-weight: 100">
        Thank you for your interest in our program
        <span
          style="background: #232F3E; color:white; padding: 0 20px; font-size: 20px"
        >2019 Batch 1 ➡ Full Stack Javascript 🔥</span>
      </h4>
      <p
        style="font-weight: 100"
      >Please Fill out the form below. We'd review your answers & get in touch</p>

      <br>
      <br>

      <div class="row">
        <form class="col s12" @submit.prevent="submitApplication">
          <div class="row">
            <div class="input-field col s12 m6">
              <input id="first_name" type="text" class="validate" required v-model="firstName">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s12 m6">
              <input id="last_name" type="text" class="validate" required v-model="lastName">
              <label for="last_name">Last Name</label>
            </div>
          </div>

          <div class="input-field col s12 m6" style="padding-left: 0; padding-right: 0">
            <select v-model="gender">
              <option value disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <input id="dob" type="text" v-model.lazy="dob" class="datepicker" name="dob" required>
              <label for="dob">Select Date of birth</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <input id="country" type="text" class="validate" v-model="country">
              <label for="country">Country Example "Nigeria"</label>
            </div>
            <div class="input-field col s12 m6">
              <input id="state" type="text" class="validate" v-model="state">
              <label for="state">State Example "Abia"</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <input id="email" type="email" class="validate" required v-model="email">
              <label for="email">Email address</label>
            </div>

            <div class="input-field col s12 m6">
              <input id="phone" type="text" class="validate" required v-model="phone">
              <label for="phone">Phone Number</label>
            </div>
          </div>

          <div class="input-field col s12" style="padding-left: 0; padding-right: 0">
            <select v-model="level">
              <option value disabled selected>Rate your current programming skills</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1"  class="materialize-textarea" required v-model="question"></textarea>
              <label for="textarea1">Why should we accept you?</label>
            </div>
          </div>

          <br>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit Application
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>

      <br>
    </div>
    <br>
    <br>
    <footer class="page-footer" style="background: #232F3E">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Favcode54</h5>
            <p
              class="grey-text text-lighten-4"
              style="font-weight: 100"
            >Empowering Africa Through Technology</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h6 class="white-text">Helpful Links</h6>
            <ul style="font-weight: 100">
              <li>
                <a class="grey-text text-lighten-3" href="#!">About</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Courses</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright" style="background: black">
        <div class="container" style="font-weight: 100">
          © 2019 Favcode54 - Designed with ❤️ by Favour Ori
          <a
            class="grey-text text-lighten-4 right"
            href="#!"
          >Offical Website</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
$(document).ready(function() {
  $("select").formSelect();
});

$(document).ready(function() {
  $(".datepicker")
    .datepicker()
    .on("onSelect", date => {
      console.log(date);
    });
});

import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      level: "",
      question: "",
      course: "Full Stack Javascript"
    };
  },

  mounted() {},
  methods: {
    submitApplication() {
      //posting

      axios({
        url: "https://favcodebackend.herokuapp.com/api/application",
        method: "post",
        data: {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          state: this.state,
          country: this.country,
          dob: this.dob,
          email: this.email,
          phone: this.phone,
          course: this.course,
          level: this.level,
          question: this.question
        }
      }).then(data => {
       
      
       M.toast({html: 'Application Submitted 😇', classes: 'rounded green', displayLength: 1000, completeCallback:()=>{
         this.$router.push({name: 'Success'})
     }}); 
      });
    }
  },
  name: "Application",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
