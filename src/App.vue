<template>
  <div id="app">
    <div id="nav">
 <nav style="" class="navColor z-depth-0" >

    <div class="nav-wrapper" style="">
      <a href="#!" class="brand-logo" style="padding: 10px 10px"> <img src="@/assets/logo.png" width="180px"></a>


      <ul class="right hide-on-med-and-down">
        <li ><a href="sass.html" ><i class="material-icons left">info</i>About Favcode</a></li>
          <li ><a href="sass.html" ><i class="material-icons left">list</i>Courses</a></li>
          <li ><a href="sass.html" ><i class="material-icons left">email</i>Support</a></li>
  
      </ul>
    </div>
  </nav>

    </div>


    <router-view/>
  </div>
</template>

<style>
.navColor{
  background: #232F3E
}

</style>
