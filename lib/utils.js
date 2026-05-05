// lib/utils.js
export class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.waitForSelector(selector);
    await this.page.fill(selector, text);
  }
}