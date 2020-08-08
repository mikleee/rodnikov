import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Callback} from "../components/callback-popup/callback.model";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private botAuth: string = '1342239630:AAEBz5IPR2Kbj8jMWc7cNG1ci3xjgehmtio';
  private chanel: string = '@rodnikov7';
  private baseUrl: string = 'https://api.telegram.org';

  constructor(private httpClient: HttpClient) {

  }

  sendCallbackMessage(message: Callback) {
    let url = `${this.baseUrl}/bot${this.botAuth}/sendMessage`

    let text = `${message.name} просит перезвонить ему на ${message.phone}`;

    return this.httpClient.post(url, null, {
        params: {chat_id: this.chanel, text: text}
      }
    );
  }


}
