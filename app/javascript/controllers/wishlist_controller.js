import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  updateWishlistStatus() {
    const userSignedIn = this.element.dataset.userSignedIn;

    if (userSignedIn === 'false') {
      document.querySelector('.js-login').click();
      return;
    }

    let status = this.element.dataset.status;
    if (status === 'false') {
      this.element.classList.remove('fill-none');
      this.element.classList.add('fill-primary');
      this.element.dataset.status = 'true';
    } else {
      this.element.classList.remove('fill-primary');
      this.element.classList.add('fill-none');
      this.element.dataset.status = 'false';
    }
  }
}