document.getElementById("rating").innerHTML=`
<span class="heading-1 text-warning  hh2 " >Share Your Experience !</span>
<div class="row container my-5">
  <div class="col"></div>
  <div class="col">
    <div class="container1 " >


    <div class="post" id="post">
      <div class="text px-2 fw-bold">Thanks for your Feedback 😍!</div>
      <div class="edit" onclick="Edit()">EDIT</div>
    </div>
    <div class="star-widget" id="star-widget">
      <input type="radio" name="rate" id="rate-5">
      <label for="rate-5" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-4">
      <label for="rate-4" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-3">
      <label for="rate-3" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-2">
      <label for="rate-2" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-1">
      <label for="rate-1" class="fas fa-star"></label>
      <form action="#!">
        <header></header>
        <div class="textarea ">
          <textarea cols="30" class="bg-transparent" placeholder="Describe your experience.."></textarea>
        </div>
        <div class="btn" onclick="change()">
          <button  id="post" type="submit" class="btn btn-success fs-3 fw-bold p-1" style="font-family: 'Sofia Sans Extra Condensed';">Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
  <div class="col"></div>
</div>
`
// ====================FOOTER=========================

document.getElementById("footer").innerHTML=`
<!-- Footer -->
<footer class="text-center text-lg-start  text-light mt-5"
style="   background: linear-gradient(to right, #536976, #292e49);font-family: 'Lobster Two', cursive;">
<!-- Section: Social media -->
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  <!-- Left -->
  <div class="me-5 d-none d-lg-block fs-5">
    <span>Get connected with us on social networks:</span>
  </div>
  <!-- Left -->

  <!-- Right -->
  <div class="fs-4">
    <a href="https://www.facebook.com/" target="_blank" class="me-4 text-reset">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com/?lang=en" target="_blank" class="me-4 text-reset">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.google.com/" target="_blank" class="me-4 text-reset">
      <i class="fab fa-google"></i>
    </a>
    <a href="https://www.instagram.com/" target="_blank" class="me-4 text-reset">
      <i class="fab fa-instagram"></i>
    </a>

  </div>
  <!-- Right -->
</section>
<!-- Section: Social media -->

<!-- Section: Links  -->
<section class="">
  <div class="container-fluid text-center text-md-start mt-5">
    <!-- Grid row -->
    <div class="row mt-3">
      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <!-- Content -->

      <span class="  fs-2 picnic-font ">
          Picnic Games</span>

        <p class="fs-5 ">
          The Best website to discover your favourite games and know how to play them.
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase  mb-4 text-warning fs-5" >
          Categories
        </h6>
        <p>
          <a href="../Kids section.html" class="text-reset">Kids Section</a>
        </p>
        <p>
          <a href="../Males section.html" class="text-reset">Males Section</a>
        </p>
        <p>
          <a href="../female section.html" class="text-reset">Womens Section</a>
        </p>
        <p>
          <a href="../family section.html" class="text-reset">Family Section</a>
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase  mb-4 text-warning fs-5">
          Useful links
        </h6>
        <p>
          <a href="../contact us.html" class="text-reset">Contact Us</a>
        </p>
        <p>
          <a href="../About Us.html" class="text-reset">About Us</a>
        </p>
        <p>
          <a href="../Site Map.html" class="text-reset">Site Map</a>
      
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <!-- Links -->
        <h6 class="text-uppercase  mb-4 text-warning fs-5">Contact</h6>
        <p><i class="fas fa-home me-3"></i> Metro Star Gate, Karachi.</p>
        <p>
          <i class="fas fa-envelope me-2"></i>
          azmeershah621@gmail.com
        </p>
        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i class="fa fa-clock-o me-3"></i> 10:00 - 11:00pm , Mon - Fri .</p>
      </div>
      <!-- Grid column -->
    </div>
    <!-- Grid row -->
  </div>
</section>
<!-- Section: Links  -->

<!-- Copyright -->
<div class="text-center p-4 text-light fs-4"
  style="background-color: rgb(10, 10, 10); box-shadow: -50px 100px 61px 88px #000;">
  © 2021 Copyright:
  <a class="text-reset fw-bold" href="#"></a>PicnicGames.com</a>
</div>
<!-- Copyright -->
</footer>
  <!-- Footer -->

 `
 //  ===================== NAVBAR =========================


 document.getElementById("navbar").innerHTML=`
 <nav class="navbar navbar-expand-lg  text-light " style="   background: linear-gradient(to right, #536976, #292e49);  ">
    <div class="container-fluid">
        <span class="navbar-brand   picnic-font pe-lg-5" >
            Picnic Games</span>
        <button class="navbar-toggler "  data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
            <span class="navbar-toggler-icon text-white fs-3">	
                    <i class="fa fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav   px-lg-1 mb-2 mb-lg-0 " style="font-family: 'Lobster Two', cursive;">
                <li class="nav-item px-lg-2 px-md-0">
                    <a class="nav-link text-white   fs-4 " aria-current="page" href="../index.html">Home</a>
                </li>
                <li class="nav-item dropdown px-lg-2 px-md-0">
                  <a class="nav-link dropdown-toggle fs-4  active-home" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul class="dropdown-menu " style="   background: linear-gradient(to right, #536976, #292e49);"
                    aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="../Kids section.html">Kid Section</a></li>
                    <li><a class="dropdown-item" href="../Males section.html">Males Section</a></li>
                    <li><a class="dropdown-item" href="../female section.html">Female Section</a></li>
                    <li>
                      <hr class="dropdown-divider ">
                    </li>
                    <li><a class="dropdown-item" href="../famliy section.html">Family Section</a></li>
                  </ul>
                </li>
                <li class="nav-item px-lg-2 px-md-0">
                    <a class="nav-link fs-4 text-white " href="../About Us.html">About Us</a>
                </li>
                <li class="nav-item px-lg-2 px-md-0">
                    <a class="nav-link   fs-4  text-white " aria-current="page" href="../contact us.html">Contact US</a>
                </li>
                <li class="nav-item px-lg-2 px-md-0">
                    <a class="nav-link   fs-4  text-white" aria-current="page" href="../Site Map.html">Site Map</a>
                </li>
           </ul>
           
        </div>
  
    </div>
  </nav>
  `