import { render, html } from "../../lib/lit-html.js";
import AirElement from "../../AirElement.js";
import {createEvent} from "../control/EventControl.js";

class NewEvent extends AirElement {

    constructor() {
        super();
        this.event = {};
    }

    view() {
        return html`
          <input name="eventname" @change=${e=>this.onUserInput(e)} placeholder="eventname" />
          <input name="description" @change=${e=>this.onUserInput(e)} placeholder="description" />
          <button @click="${_ => this.newEvent()}">create</button>
        `;
    }

    onUserInput({target: { name, value }}) {
        console.log(name, value);
        this.event[name] = value;
    }

    newEvent() {
        createEvent(this.event)
    }

}

customElements.define('a-newevent', NewEvent);