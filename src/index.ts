import {WebSocket} from 'ws';
import {EventEmitter} from "node:events";

export interface KickChatBox{
    on(event: string, listener: Function): this;
}

export default class KickChat extends EventEmitter{
    ws: WebSocket;
    constructor(channelId: string){
        super();
        this.ws = new WebSocket('wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.6.0&flash=false');
        this.ws.addEventListener('open', () => {
            const datas = [
               {"event":"pusher:subscribe","data":{"auth":"","channel":"chatrooms."+ channelId + ".v2"}}
            ]
            for(let i = 0; i < datas.length; i++){
                this.ws.send(Buffer.from(JSON.stringify(datas[i])))
            }
        }
        );
    }
    connect(){
        this.ws.on('message', async(data) => {
            this.emit("messages", data.toString())
            }
        );
        
    }
}

