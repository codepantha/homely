import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    this.swiper = new Swiper('.swiper-container', {
      // Swiper configuration options
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}