import { Component } from '@angular/core';
import * as $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    var item_length = $('.your-class > div').length - 1;
    $(document).ready(function() {

      var slider = $('.your-class').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          infinite: false
      });
      slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
          console.log(slider.slick('slickCurrentSlide'), item_length);
          if (item_length === slider.slick('slickCurrentSlide')) {
              slider.slick("slickSetOption", "autoplay", false, false);
          }
      });
    });
  }
}
