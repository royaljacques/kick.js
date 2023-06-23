/// <reference types="node" />
import { WebSocket } from 'ws';
import { EventEmitter } from "node:events";
export interface KickChatBox {
    on(event: string, listener: Function): this;
}
export default class KickChat extends EventEmitter {
    ws: WebSocket;
    constructor(channelId: string);
    connect(): void;
}
