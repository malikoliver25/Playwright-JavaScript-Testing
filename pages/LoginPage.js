// pages/LoginPage.js
import { CommonActions } from '../lib/utils.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.utils = new CommonActions(page);
    
    // Locators
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitBtn = 'button[type="submit"]';
    this.flashMessage = page.locator('#flash');
  }

  async login(user, pass) {
    await this.utils.fill(this.usernameInput, user);
    await this.utils.fill(this.passwordInput, pass);
    await this.utils.click(this.submitBtn);
  }
}
