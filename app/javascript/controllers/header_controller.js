import { Controller } from '@hotwired/stimulus';
import { enter, leave, toggle } from 'el-transition';

export default class extends Controller {

  static targets = ['dropdown', 'openUserMenu', 'openMobileMenu', 'mobileMenu'];

  connect() {
    this.openUserMenuTarget.addEventListener('click', (e) => {
      openDropdown(this.dropdownTarget)
    })

    this.openMobileMenuTarget.addEventListener('click', (e) => {
      openDropdown(this.mobileMenuTarget)
    })
  }
}

function openDropdown(element) {
  toggle(element).then(() => {
      console.log("Enter transition complete")
  })
}

// remove element when close
function closeDropdown() {
  leave(element).then(() => {
      element.destroy();
  })
}
