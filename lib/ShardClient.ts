import EventManager from '@apacheli/event-manager';
import WebSocket from 'ws';

/**
 * Class representing a shard client
 */
export default class ShardClient extends EventManager {

  guildMembersChunkMap = new Map<bigint, unknown>();
  heartbeatInterval?: NodeJS.Timeout;
  id?: number;
  identifyOptions?: IdentifyPayload;
  seq?: number;
  sessionID?: string;
  unavailableGuilds = new Set<bigint>();
  url: string;
  wsOptions?: WebSocket.ClientOptions;

  #token: string;
  #ws?: WebSocket;

  constructor(data: ShardClientData) {
    super();

    this.id = data.id;
    this.identifyOptions = data.identifyOptions;
    this.url = data.url;
    this.wsOptions = data.wsOptions;

    this.#token = data.token;
  }

  /**
   * Connect to Discord's gateway
   */
  connect() {
    const ws = this.#ws = new WebSocket(this.url, this.wsOptions);

    return new Promise<void>((resolve) => ws.once('close', resolve));
  }
}

export interface IdentifyPayload {
  displayMobileStatus?: boolean,
  guildSubscriptions?: boolean,
  intents?: number,
  largeThreshold?: number,
  presence?: UpdatePresencePayload,
  shards?: number
}

export interface ShardClientData {
  id?: number,
  identifyOptions?: IdentifyPayload,
  url: string,
  token: string,
  wsOptions?: WebSocket.ClientOptions
}

export interface UpdatePresencePayload {
  activities?: PresenceActivity[],
  afk?: boolean,
  since?: number,
  status?: string
}

export interface PresenceActivity {
  name: string,
  type: number,
  url?: string
}
