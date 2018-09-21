<template>
  <div id="cp-content-wrap" class="cp-content-wrap">
    <div class="container">
      <div class="row"> 
        <div class="col-md-9">
          <div class="row">
            <div class="cp-pagination">
              <div>
                <h2>12/1 - THPT PHAN CHAU TRINH</h2>
                <p>TP ĐÀ NẴNG</p>
                <p>Niên Khóa: 2013-2018</p>
                <hr>
              </div>
              <nav>
                <ul class="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li><a class="active" href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
              </div>
              <ul class="cp-grid-gallery gallery">
                <li class="col-md-4">
                  <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-1.jpg" alt="" />
                    <figcaption>
                      <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> 
                    </figcaption>
                  </figure>
                </li>
                <li class="col-md-4">
                  <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-2.jpg" alt="" />
                    <figcaption>
                      <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-2.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                  </figure>
                </li>
                <li class="col-md-4">
                  <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-3.jpg" alt="" />
                    <figcaption>
                      <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-3.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                  </figure>
                </li>
                <li class="col-md-4">
                  <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-4.jpg" alt="" />
                    <figcaption>
                      <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-4.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                  </figure>
                </li>
                <li class="col-md-4">
                  <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-5.jpg" alt="" />
                    <figcaption>
                      <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-5.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                  </figure>
                </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-6.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-6.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-7.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-7.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-8.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-8.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-9.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-9.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-10.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-10.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-11.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-11.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
              <li class="col-md-4">
                <figure class="cp-gallery-thumb"> <img src="../assets/images/gallery/fg-12.jpg" alt="" />
                  <figcaption>
                    <h2>Sunday <span>Lunch Dessert</span></h2><a class="cp-zoom" href="images/gallery/fg-12.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <side-bar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'PicCode',
  data () {
    return {
      
    }
  },
  created () {
  console.log(gapi)
   var request = gapi.client.request({
    'method': 'GET',
    'path': '/drive/v3/about',
    'params': {'fields': 'user'}
  });
  // Execute the API request.
  request.execute(function(response) {
    console.log(response);
  });
  }
 
}
</script>
