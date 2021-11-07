export class uiComponentsMyButton extends HTMLElement {
    public static observedAttributes = [
      'title'
    ];
  
    attributeChangedCallback() {
      this.innerHTML = `<h1>Welcome to ${this.title}!</h1>`;
    }
  }
  
  customElements.define('ui-components-my-button', uiComponentsMyButton);
  