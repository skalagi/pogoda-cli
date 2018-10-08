import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketWeatherService {
  socket = new WebSocket('ws://weatherapi.dynu.com/socket');

  send() {
    const date = new Date();
    this.socket.send(`${ date.getTime() / 1000 }`);
  }

  constructor() {

    this.socket.onmessage = (e) => {
        try {
            const response = JSON.parse(e.data);
            if (response.registered) {
                console.log(response.registered);
                // Response after this.request().
                // example response = { wait: 299, delay: 0, absolute: false }
                // wait is seconds to next update
                // delay is calculated connection delay from your timestamp
                // if delay is too lower or too higher absolute = true
            } else {
                // Response with weather basic json.
                // Don't forget request for next update.
                console.log(response);
                this.send();
            }
        } catch (e) {
            console.log(e.data);
            // If response is not json it is error message.
        }
    };
  }
}
