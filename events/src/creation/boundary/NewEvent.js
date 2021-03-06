import {render, html} from "../../lib/lit-html.js";
import AirElement from "../../AirElement.js";
import {createEvent} from "../control/EventControl.js";

class NewEvent extends AirElement {

    constructor() {
        super();
        this.event = {};
    }

    view() {
        console.log('UPDATED');
        return html`
        <form>
          ${this.input({name:'link'})}
          ${this.input({name:'eventname'})}
          ${this.input({name:'description'})}
          <button class="button" @click="${e => this.newEvent(e)}">create</button>
        </form>          
        `;
    }

    input({name, placeholder=name}) {
        return html`
        <label class="label">${placeholder}
            <input required class="input is-primary" name="${name}" placeholder="${placeholder}" @change=${e => this.onUserInput(e)} />
        </label>
        `;
    }

    onUserInput({target: {name, value}}) {
        console.log(name, value);
        this.event[name] = value;
    }

    newEvent(e) {
        const { target: { form } } = e
        e.preventDefault();
        form.reportValidity();
        if (form.checkValidity()) {
            createEvent(this.event);
        }
    }

}

customElements.define('a-newevent', NewEvent);