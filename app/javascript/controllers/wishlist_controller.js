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
      this.addPropertyToWishlist()
      
    } else {
      this.element.classList.remove('fill-primary');
      this.element.classList.add('fill-none');
      this.element.dataset.status = 'false';
    }
  }

  async addPropertyToWishlist() {
    const params = {
      property_id: this.element.dataset.propertyId,
      user_id: this.element.dataset.userId
    };

    try {
      const response = await fetch('/api/wishlists', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      });

      const data = await response.json();

      if (data) {
        this.element.classList.remove('fill-none');
        this.element.classList.add('fill-primary');
        this.element.dataset.status = 'true';
      }
    } catch (e) {
      console.log(e);
    }
  }
}
