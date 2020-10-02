export const
  DISCORD_EPOCH          = 1420070400000,
  GATEWAY_VERSION        = 8,
  MAX_ATTACHMENTS        = 10,
  NAX_CHANNEL_CATEGORIES = 50,
  MAX_CHANNELS           = 500,
  MAX_INVITES            = 1000,
  MAX_PINS               = 50,
  MAX_ROLES              = 250,
  MAX_UNIQUE_REACTIONS   = 20,
  MAX_WEBHOOKS           = 10,
  REST_VERSION           = 6,
  SHARD_CONNECT_DELAY    = 5000,
  TIMESTAMP_BITS         = 1 << 22;

export enum ActivityFlags {
  INSTANCE     = 1 << 0,
  JOIN         = 1 << 1,
  SPECTATE     = 1 << 2,
  JOIN_REQUEST = 1 << 3,
  SYNC         = 1 << 4,
  PLAY         = 1 << 5
}

export enum ActivityTypes {
  PLAYING   = 0,
  STREAMING = 1,
  LISTENING = 2,
  WATCHING  = 3,
  CUSTOM    = 4,
  COMPETING = 5
}

export enum AuditLogEvents {
  GUILD_UPDATE             = 1,
  CHANNEL_CREATE           = 10,
  CHANNEL_UPDATE           = 11,
  CHANNEL_DELETE           = 12,
  CHANNEL_OVERWRITE_CREATE = 13,
  CHANNEL_OVERWRITE_UPDATE = 14,
  CHANNEL_OVERWRITE_DELETE = 15,
  MEMBER_KICK              = 20,
  MEMBER_PRUNE             = 21,
  MEMBER_BAN_ADD           = 22,
  MEMBER_BAN_REMOVE        = 23,
  MEMBER_UPDATE            = 24,
  MEMBER_ROLE_UPDATE       = 25,
  MEMBER_MOVE              = 26,
  MEMBER_DISCONNECT        = 27,
  BOT_ADD                  = 28,
  ROLE_CREATE              = 30,
  ROLE_UPDATE              = 31,
  ROLE_DELETE              = 32,
  INVITE_CREATE            = 40,
  INVITE_UPDATE            = 41,
  INVITE_DELETE            = 42,
  WEBHOOK_CREATE           = 50,
  WEBHOOK_UPDATE           = 51,
  WEBHOOK_DELETE           = 52,
  EMOJI_CREATE             = 60,
  EMOJI_UPDATE             = 61,
  EMOJI_DELETE             = 62,
  MESSAGE_DELETE           = 72,
  MESSAGE_BULK_DELETE      = 73,
  MESSAGE_PIN              = 74,
  MESSAGE_UNPIN            = 75,
  INTEGRATION_CREATE       = 80,
  INTEGRATION_UPDATE       = 81,
  INTEGRATION_DELETE       = 82
}

export enum ChannelTypes {
  GUILD_TEXT     = 0,
  DM             = 1,
  GUILD_VOICE    = 2,
  GROUP_DM       = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS     = 5,
  GUILD_STORE    = 6
}

export enum ExplicitContentFilterLevels {
  DISABLED              = 0,
  MEMBERS_WITHOUT_ROLES = 1,
  ALL_MEMBERS           = 2
}

export enum GatewayCloseCodes {
  UNKNOWN_ERROR         = 4000,
  UNKNOWN_OPCODE        = 4001,
  DECODE_ERROR          = 4002,
  NOT_AUTHENTICATED     = 4003,
  AUTHENTICATED_FAILED  = 4004,
  ALREADY_AUTHENTICATED = 4005,
  INVALID_SEQ           = 4007,
  RATE_LIMITED          = 4008,
  SESSION_TIMED_OUT     = 4009,
  INVALID_SHARD         = 4010,
  SHARDING_REQUIRED     = 4011,
  INVALID_API_VERSION   = 4012,
  INVALID_INTENTS       = 4013,
  DISALLOWED_INTENTS    = 4014
}

export enum GatewayEvents {
  CHANNEL_CREATE                = 'channelCreate',
  CHANNEL_DELETE                = 'channelDelete',
  CHANNEL_PINS_UPDATE           = 'channelPinsUpdate',
  CHANNEL_UPDATE                = 'channelUpdate',
  GUILD_BAN_ADD                 = 'guildBanAdd',
  GUILD_BAN_REMOVE              = 'guildBanRemove',
  GUILD_CREATE                  = 'guildCreate',
  GUILD_DELETE                  = 'guildDelete',
  GUILD_EMOJIS_UPDATE           = 'guildEmojisUpdate',
  GUILD_INTEGRATIONS_UPDATE     = 'guildIntegrationsUpdate',
  GUILD_MEMBERS_CHUNK           = 'guildMembersChunk',
  GUILD_MEMBER_ADD              = 'guildMemberAdd',
  GUILD_MEMBER_REMOVE           = 'guildMemberRemove',
  GUILD_MEMBER_UPDATE           = 'guildMemberUpdate',
  GUILD_ROLE_CREATE             = 'guildRoleCreate',
  GUILD_ROLE_DELETE             = 'guildRoleDelete',
  GUILD_ROLE_UPDATE             = 'guildRoleUpdate',
  GUILD_UPDATE                  = 'guildUpdate',
  INVITE_CREATE                 = 'inviteCreate',
  INVITE_DELETE                 = 'inviteDelete',
  MESSAGE_CREATE                = 'messageCreate',
  MESSAGE_DELETE                = 'messageDelete',
  MESSAGE_DELETE_BULK           = 'messageDeleteBulk',
  MESSAGE_REACTION_ADD          = 'messageReactionAdd',
  MESSAGE_REACTION_REMOVE       = 'messageReactionRemove',
  MESSAGE_REACTION_REMOVE_ALL   = 'messageReactionRemoveAll',
  MESSAGE_REACTION_REMOVE_EMOJI = 'messageReactionRemoveEmoji',
  MESSAGE_UPDATE                = 'messageUpdate',
  PRESENCE_UPDATE               = 'presenceUpdate',
  READY                         = 'ready',
  RESUMED                       = 'resumed',
  TYPING_START                  = 'typingStart',
  USER_UPDATE                   = 'userUpdate',
  VOICE_SERVER_UPDATE           = 'voiceServerUpdate',
  VOICE_STATE_UPDATE            = 'voiceStateUpdate',
  WEBHOOKS_UPDATE               = 'webhooksUpdate'
}

export enum GatewayIntents {
  GUILDS                   = 1 << 0,
  GUILD_MEMBERS            = 1 << 1,
  GUILD_BANS               = 1 << 2,
  GUILD_EMOJIS             = 1 << 3,
  GUILD_INTEGRATIONS       = 1 << 4,
  GUILD_WEBHOOKS           = 1 << 5,
  GUILD_INVITES            = 1 << 6,
  GUILD_VOICE_STATES       = 1 << 7,
  GUILD_PRESENCES          = 1 << 8,
  GUILD_MESSAGES           = 1 << 9,
  GUILD_MESSAGE_REACTIONS  = 1 << 10,
  GUILD_MESSAGE_TYPING     = 1 << 11,
  DIRECT_MESSAGES          = 1 << 12,
  DIRECT_MESSAGE_REACTIONS = 1 << 13,
  DIRECT_MESSAGE_TYPING    = 1 << 14
}

export enum GatewayOpcodes {
  DISPATCH              = 0,
  HEARTBEAT             = 1,
  IDENTIFY              = 2,
  PRESENCE_UPDATE       = 3,
  VOICE_STATE_UPDATE    = 4,
  RESUME                = 6,
  REQUEST_GUILD_MEMBERS = 8,
  HELLO                 = 10,
  HEARTBEAT_ACK         = 11
}

export enum GuildFeatures {
  ANIMATED_ICON          = 1 << 0,
  BANNER                 = 1 << 1,
  COMMERCE               = 1 << 2,
  DISCOVERABLE           = 1 << 3,
  FEATURABLE             = 1 << 4,
  INVITE_SPLASH          = 1 << 5,
  NEWS                   = 1 << 6,
  PARTNERED              = 1 << 7,
  PUBLIC                 = 1 << 8,
  PUBLIC_DISABLED        = 1 << 9,
  VANITY_URL             = 1 << 10,
  VERIFIED               = 1 << 11,
  VIP_REGIONS            = 1 << 12,
  WELCOME_SCREEN_ENABLED = 1 << 13
}

export enum HTTPResponseCodes {
  OK                  = 200,
  CREATED             = 201,
  NO_CONTENT          = 204,
  NOT_MODIFIED        = 304,
  BAD_REQUEST         = 400,
  UNAUTHORIZED        = 401,
  FORBIDDEN           = 403,
  NOT_FOUND           = 404,
  METHOD_NOT_ALLOWED  = 405,
  TOO_MANY_REQUESTS   = 429,
  GATEWAY_UNAVAILABLE = 502
}

export enum MessageFlags {
  CROSSPOSTED            = 1 << 0,
  IS_CROSSPOST           = 1 << 1,
  SUPPRESS_EMBEDS        = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT                 = 1 << 4
}

export enum MessageTypes {
  DEFAULT                                = 0,
  RECIPIENT_ADD                          = 1,
  RECIPIENT_REMOVE                       = 2,
  CALL                                   = 3,
  CHANNEL_NAME_CHANGE                    = 4,
  CHANNEL_ICON_CHANGE                    = 5,
  CHANNEL_PINNED_MESSAGE                 = 6,
  GUILD_MEMBER_JOIN                      = 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION        = 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD                     = 12,
  GUILD_DISCOVERY_DISQUALIFIED           = 14,
  GUILD_DISCOVERY_REQUALIFIED            = 15,
  INLINE_REPLY                           = 19
}

export enum PermissionFlags {
  CREATE_INSTANT_INVITE = 1 << 0,
  KICK_MEMBERS          = 1 << 1,
  BAN_MEMBERS           = 1 << 2,
  ADMINISTRATOR         = 1 << 3,
  MANAGE_CHANNELS       = 1 << 4,
  MANAGE_GUILD          = 1 << 5,
  ADD_REACTIONS         = 1 << 6,
  VIEW_AUDIT_LOG        = 1 << 7,
  PRIORITY_SPEAKER      = 1 << 8,
  STREAM                = 1 << 9,
  VIEW_CHANNEL          = 1 << 10,
  SEND_MESSAGES         = 1 << 11,
  SEND_TTS_MESSAGES     = 1 << 12,
  MANAGE_MESSAGES       = 1 << 13,
  EMBED_LINKS           = 1 << 14,
  ATTACH_FILES          = 1 << 15,
  READ_MESSAGE_HISTORY  = 1 << 16,
  MENTION_EVERYONE      = 1 << 17,
  USE_EXTERNAL_EMOJIS   = 1 << 18,
  VIEW_GUILD_INSIGHTS   = 1 << 19,
  CONNECT               = 1 << 20,
  SPEAK                 = 1 << 21,
  MUTE_MEMBERS          = 1 << 22,
  DEAFEN_MEMBERS        = 1 << 23,
  MOVE_MEMBERS          = 1 << 24,
  USE_VAD               = 1 << 25,
  CHANGE_NICKNAME       = 1 << 26,
  MANAGE_NICKNAMES      = 1 << 27,
  MANAGE_ROLES          = 1 << 28,
  MANAGE_WEBHOOKS       = 1 << 29,
  MANAGE_EMOJIS         = 1 << 30
}

export enum UserFlags {
  DISCORD_EMPLOYEE       = 1 << 0,
  DISCORD_PARTNER        = 1 << 1,
  HYPESQUAD_EVENTS       = 1 << 2,
  BUG_HUNTER_LEVEL_1     = 1 << 3,
  HOUSE_BRAVERY          = 1 << 6,
  HOUSE_BRILLIANCE       = 1 << 7,
  HOUSE_BALANCE          = 1 << 8,
  EARLY_SUPPORTER        = 1 << 9,
  TEAM_USER              = 1 << 10,
  SYSTEM                 = 1 << 12,
  BUG_HUNTER_LEVEL_2     = 1 << 14,
  VERIFIED_BOT           = 1 << 16,
  VERIFIED_BOT_DEVELOPER = 1 << 17
}
