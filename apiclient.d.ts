export default ApiClient;
/**
 * Creates a new api client instance
 * @param {String} serverAddress
 * @param {String} appName
 * @param {String} appVersion
 */
declare class ApiClient {
    constructor(appStorage: any, wakeOnLan: any, serverAddress: any, appName: any, appVersion: any, deviceName: any, deviceId: any, devicePixelRatio: any);
    appStorage: any;
    wakeOnLan(): any;
    _serverInfo: {};
    _serverAddress: any;
    _deviceId: any;
    _deviceName: any;
    _appName: any;
    _appVersion: any;
    _devicePixelRatio: any;
    appName(): any;
    setAuthorizationInfoIntoRequest(request: any, includeAccessToken: any): void;
    appVersion(): any;
    deviceName(): any;
    deviceId(): any;
    /**
     * Gets the server address.
     */
    serverAddress(val: any): string;
    onNetworkChanged(): void;
    /**
     * Creates an api url based on a handler name and query string parameters
     * @param {String} name
     * @param {Object} params
     */
    getUrl(name: string, params: any, serverAddress: any): any;
    fetchWithFailover(request: any, enableReconnection: any, signal: any): any;
    /**
     * Wraps around jQuery ajax methods to add additional info to the request.
     */
    fetch(request: any, includeAccessToken: any, signal: any): any;
    setAuthenticationInfo(accessKey: string | undefined, userId: string | undefined): void;
    _userViewsPromise: any;
    serverInfo(info: any): {};
    /**
     * Gets or sets the current user id.
     */
    getCurrentUserName(): any;
    /**
     * Gets or sets the current user id.
     */
    getCurrentUserId(): string;
    accessToken(): any;
    serverId(): any;
    serverName(): any;
    /**
     * Wraps around jQuery ajax methods to add additional info to the request.
     */
    ajax(request: any, includeAccessToken: any): any;
    /**
     * Gets or sets the current user id.
     */
    getCurrentUser(options: any): any;
    isLoggedIn(): boolean;
    logout(): any;
    /**
     * Authenticates a user
     * @param {String} name
     * @param {String} password
     */
    authenticateUserByName(name: string, password: string): any;
    ensureWebSocket(): void;
    openWebSocket(): void;
    _webSocket: any;
    closeWebSocket(): void;
    sendWebSocketMessage(name: any, data: any): void;
    startMessageListener(name: any, options: any): void;
    messageListeners: any;
    stopMessageListener(name: any): void;
    sendMessage(name: any, data: any): void;
    isMessageChannelOpen(): boolean;
    isWebSocketOpen(): boolean;
    isWebSocketOpenOrConnecting(): boolean;
    get(url: any): any;
    getJSON(url: any, signal: any): any;
    getText(url: any, signal: any): any;
    updateServerInfo(server: any, serverUrl: any): void;
    isWebSocketSupported(): boolean;
    clearAuthenticationInfo(): void;
    encodeName(name: any): string;
    getProductNews(options?: {}): any;
    detectBitrate(force: any): any;
    /**
     * Gets an item from the server
     * Omit itemId to get the root folder.
     */
    getItem(userId: any, itemId: any): any;
    /**
     * Gets the root folder from the server
     */
    getRootFolder(userId: any): any;

    /**
     * Gets the corresponding local user from a connect user id
     */
    getConnectExchange(options: { ConnectUserId: string }): Promise<ConnectConnectAuthenticationExchangeResult>;
    getNotificationSummary(userId: any): any;
    getNotifications(userId: any, options: any): any;
    markNotificationsRead(userId: any, idList: any, isRead: any): any;
    getRemoteImageProviders(options: any): any;
    getAvailableRemoteImages(options: any): any;
    downloadRemoteImage(options: any): any;
    getRecordingFolders(userId: any): any;
    getLiveTvInfo(options: any): any;
    getLiveTvGuideInfo(options: any): any;
    getLiveTvChannel(id: any, userId: any): any;
    getLiveTvChannels(options: any): Promise<QueryResultBaseItemDto>;
    getLiveTvPrograms(options?: {}): any;
    getEpg(options?: {}): any;
    getLiveTvRecommendedPrograms(options?: {}): any;
    getLiveTvRecordings(options: any, signal: any): any;
    getLiveTvRecordingSeries(options: any): any;
    getLiveTvRecording(id: any, userId: any): any;
    getLiveTvProgram(id: any, userId: any): any;
    deleteLiveTvRecording(id: any): any;
    cancelLiveTvTimer(id: any): any;
    getLiveTvTimers(options: any): any;
    getLiveTvTimer(id: any): any;
    getNewLiveTvTimerDefaults(options?: {}): any;
    createLiveTvTimer(item: any): any;
    updateLiveTvTimer(item: any): any;
    resetLiveTvTuner(id: any): any;
    getLiveTvSeriesTimers(options: any): any;
    getLiveTvSeriesTimer(id: any): any;
    cancelLiveTvSeriesTimer(id: any): any;
    createLiveTvSeriesTimer(item: any): any;
    updateLiveTvSeriesTimer(item: any): any;
    getRegistrationInfo(feature: any): any;
    /**
     * Gets the current server status
     */
    getSystemInfo(): any;
    /**
     * Gets the current server status
     */
    getSyncStatus(itemId: any): any;
    /**
     * Gets the current server status
     */
    getPublicSystemInfo(): any;
    getInstantMixFromItem(itemId: any, options: any): any;
    getEpisodes(itemId: any, options: any): any;
    getDisplayPreferences(id: any, userId: any, app: any): any;
    updateDisplayPreferences(id: any, obj: any, userId: any, app: any): any;
    getSeasons(itemId: any, options: any): any;
    getSimilarItems(itemId: any, options: any): any;
    /**
     * Gets all cultures known to the server
     */
    getCultures(): any;
    /**
     * Gets all countries known to the server
     */
    getCountries(): any;
    getPlaybackInfo(itemId: any, options: any, deviceProfile: any): any;
    getLiveStreamMediaInfo(liveStreamId: any): any;
    getIntros(itemId: any): any;
    /**
     * Gets the directory contents of a path on the server
     */
    getDirectoryContents(path: any, options: any): any;
    /**
     * Gets shares from a network device
     */
    getNetworkShares(path: any): any;
    /**
     * Gets the parent of a given path
     */
    getParentPath(path: any): any;
    /**
     * Gets a list of physical drives from the server
     */
    getDrives(): any;
    /**
     * Gets a list of network devices from the server
     */
    getNetworkDevices(): any;
    getActivityLog(options: any): any;
    /**
     * Cancels a package installation
     */
    cancelPackageInstallation(installationId: any): any;
    /**
     * Refreshes metadata for an item
     */
    refreshItem(itemId: any, options: any): any;
    /**
     * Installs or updates a new plugin
     */
    installPlugin(name: any, guid: any, updateClass: any, version: any): any;
    /**
     * Instructs the server to perform a restart.
     */
    restartServer(): any;
    /**
     * Instructs the server to perform a shutdown.
     */
    shutdownServer(): any;
    /**
     * Gets information about an installable package
     */
    getPackageInfo(name: any, guid: any): any;
    /**
     * Gets the latest available application update (if any)
     */
    getAvailableApplicationUpdate(): any;
    /**
     * Gets the latest available plugin updates (if any)
     */
    getAvailablePluginUpdates(): any;
    /**
     * Gets the virtual folder list
     */
    getVirtualFolders(): any;
    /**
     * Gets all the paths of the locations in the physical root.
     */
    getPhysicalPaths(): any;
    /**
     * Gets the current server configuration
     */
    getServerConfiguration(): any;
    /**
     * Gets the devices
     */
    getDevices(): any;
    /**
     * Gets the current server configuration
     */
    getDevicesOptions(): any;
    /**
     * Gets the current server configuration
     */
    getContentUploadHistory(): any;
    getNamedConfiguration(name: any): any;
    /**
        Gets available hardware accelerations
    */
    getHardwareAccelerations(): any;
    /**
        Gets available video codecs
    */
    getVideoCodecInformation(): any;
    /**
     * Gets the server's scheduled tasks
     */
    getScheduledTasks(options?: {}): any;
    /**
    * Starts a scheduled task
    */
    startScheduledTask(id: any): any;
    /**
    * Gets a scheduled task
    */
    getScheduledTask(id: any): any;
    getNextUpEpisodes(options: any): Promise<QueryResultBaseItemDto>;
    /**
    * Stops a scheduled task
    */
    stopScheduledTask(id: any): any;
    /**
     * Gets the configuration of a plugin
     * @param {String} Id
     */
    getPluginConfiguration(id: any): any;
    /**
     * Gets a list of plugins that are available to be installed
     */
    getAvailablePlugins(options?: {}): any;
    /**
     * Uninstalls a plugin
     * @param {String} Id
     */
    uninstallPlugin(id: any): any;
    /**
    * Removes a virtual folder
    * @param {String} name
    */
    removeVirtualFolder(virtualFolder: any, refreshLibrary: any): any;
    /**
    * Adds a virtual folder
    * @param {String} name
    */
    addVirtualFolder(name: string, type: any, refreshLibrary: any, libraryOptions: any): any;
    updateVirtualFolderOptions(id: any, libraryOptions: any): any;
    /**
    * Renames a virtual folder
    */
    renameVirtualFolder(virtualFolder: any, newName: any, refreshLibrary: any): any;
    /**
    * Adds an additional mediaPath to an existing virtual folder
    * @param {String} name
    */
    addMediaPath(virtualFolder: any, mediaPath: any, networkSharePath: any, refreshLibrary: any): any;
    updateMediaPath(virtualFolder: any, pathInfo: any): any;
    /**
    * Removes a media path from a virtual folder
    * @param {String} name
    */
    removeMediaPath(virtualFolder: any, mediaPath: any, refreshLibrary: any): any;
    /**
     * Deletes a user
     * @param {String} id
     */
    deleteUser(id: string): any;
    /**
     * Deletes a user image
     * @param {String} userId
     * @param {String} imageType The type of image to delete, based on the server-side ImageType enum.
     */
    deleteUserImage(userId: string, imageType: string, imageIndex: any): any;
    deleteItemImage(itemId: any, imageType: any, imageIndex: any): any;
    deleteItem(itemId: any): any;
    stopActiveEncodings(playSessionId: any): any;
    reportCapabilities(options: ClientCapabilities): Promise<void>;
    updateItemImageIndex(itemId: any, imageType: any, imageIndex: any, newIndex: any): any;
    getItemImageInfos(itemId: any): any;
    getCriticReviews(itemId: any, options: any): any;
    getItemDownloadUrl(itemId: any, mediaSourceId: any): any;
    getSessions(options: { ControllableByUserId?: string, DeviceId?: string, Id?: string, IncludeAllSessionsIfAdmin?: boolean }): Promise<Array<SessionSessionInfo>>;
    /**
     * Uploads a user image
     * @param {String} userId
     * @param {String} imageType The type of image to delete, based on the server-side ImageType enum.
     * @param {Object} file The file from the input element
     */
    uploadUserImage(userId: string, imageType: string, file: any): Promise<void>;
    uploadItemImage(itemId: any, imageType: any, file: any): Promise<void>;
    /**
     * Gets the list of installed plugins on the server
     */
    getInstalledPlugins(): any;
    /**
     * Gets a user by id
     * @param {String} id
     */
    getUser(id: string, enableCache: any, signal: any): any;
    /**
     * Gets a studio
     */
    getStudio(name: any, userId: any): any;
    /**
     * Gets a genre
     */
    getGenre(name: any, userId: any): Promise<BaseItemDto>;
    getMusicGenre(name: any, userId: any): any;
    getGameGenre(name: any, userId: any): any;
    /**
     * Gets an artist
     */
    getArtist(name: any, userId: any): any;
    /**
     * Gets a Person
     */
    getPerson(name: any, userId: any): any;
    getPublicUsers(): any;
    /**
     * Gets all users from the server
     */
    getUsers(options: any, signal: any): any;
    /**
     * Gets api keys from the server
     */
    getApiKeys(options: any, signal: any): any;
    /**
     * Gets logs from the server
     */
    getLogs(options: any, signal: any): any;
    getLogDownloadUrl({ Name }: {
        Name: any;
    }): any;
    /**
     * Gets logs from the server
     */
    getLogLines(options: any, signal: any): any;
    /**
     * Gets all available parental ratings from the server
     */
    getParentalRatings(): any;
    getImageUrl(itemId: string | undefined, options: any): string;
    /**
     * Constructs a url for a user image
     * @param {String} userId
     * @param {Object} options
     * Options supports the following properties:
     * width - download the image at a fixed width
     * height - download the image at a fixed height
     * maxWidth - download the image at a maxWidth
     * maxHeight - download the image at a maxHeight
     * quality - A scale of 0-100. This should almost always be omitted as the default will suffice.
     * For best results do not specify both width and height together, as aspect ratio might be altered.
     */
    getUserImageUrl(userId: string, options: any): any;
    getThumbImageUrl(item: any, options: any): any;
    /**
     * Updates a user's password
     * @param {String} userId
     * @param {String} currentPassword
     * @param {String} newPassword
     */
    updateUserPassword(userId: string, currentPassword: string, newPassword: string): any;
    /**
     * Updates a user's easy password
     * @param {String} userId
     * @param {String} newPassword
     */
    updateEasyPassword(userId: string, newPassword: string): any;
    /**
    * Resets a user's password
    * @param {String} userId
    */
    resetUserPassword(userId: string): any;
    resetEasyPassword(userId: any): any;
    /**
     * Updates the server's configuration
     * @param {Object} configuration
     */
    updateServerConfiguration(configuration: any): any;
    updateNamedConfiguration(name: any, configuration: any): any;
    updateItem(item: any): any;
    /**
     * Updates plugin security info
     */
    updatePluginSecurityInfo(info: any): any;
    /**
     * Creates a user
     * @param {Object} user
     */
    createUser(name: any): any;
    /**
     * Updates a user
     * @param {Object} user
     */
    updateUser(user: any): any;
    updateUserPolicy(userId: any, policy: any): any;
    updateUserConfiguration(userId: any, configuration: any): any;
    /**
     * Updates the Triggers for a ScheduledTask
     * @param {String} id
     * @param {Object} triggers
     */
    updateScheduledTaskTriggers(id: string, triggers: any): any;
    /**
     * Updates a plugin's configuration
     * @param {String} Id
     * @param {Object} configuration
     */
    updatePluginConfiguration(id: any, configuration: any): any;
    getAncestorItems(itemId: any, userId: any): any;
    /**
     * Gets items based on a query, typically for children of a folder
     * @param {String} userId
     * @param {Object} options
     * Options accepts the following properties:
     * itemId - Localize the search to a specific folder (root if omitted)
     * startIndex - Use for paging
     * limit - Use to limit results to a certain number of items
     * filter - Specify one or more ItemFilters, comma delimeted (see server-side enum)
     * sortBy - Specify an ItemSortBy (comma-delimeted list see server-side enum)
     * sortOrder - ascending/descending
     * fields - additional fields to include aside from basic info. This is a comma delimited list. See server-side enum ItemFields.
     * index - the name of the dynamic, localized index function
     * dynamicSortBy - the name of the dynamic localized sort function
     * recursive - Whether or not the query should be recursive
     * searchTerm - search term to use as a filter
     */
    getItems(userId: string, options: any, signal: any): Promise<QueryResultBaseItemDto>;
    getResumableItems(userId: any, options: any): Promise<QueryResultBaseItemDto>;
    getMovieRecommendations(options: any): Promise<Array<RecommendationDto>>;
    getUpcomingEpisodes(options: any): any;
    getUserViews(options: any, userId: any, signal: any): any;
    /**
        Gets artists from an item
    */
    getArtists(userId: any, options: any): any;
    /**
        Gets artists from an item
    */
    getAlbumArtists(userId: any, options: any): any;
    /**
        Gets genres from an item
    */
    getGenres(userId: any, options: any): Promise<QueryResultBaseItemDto>;
    getMusicGenres(userId: any, options: any): any;
    getGameGenres(userId: any, options: any): any;
    /**
        Gets people from an item
    */
    getPeople(userId: any, options: any): any;
    /**
        Gets thumbnails from an item
    */
    getThumbnails(itemId: any, options: any): any;
    /**
        Gets thumbnails from an item
    */
    getDeleteInfo(itemId: any, options: any): any;
    /**
        Gets studios from an item
    */
    getStudios(userId: any, options: any): any;
    getOfficialRatings(userId: any, options: any): any;
    getYears(userId: any, options: any): any;
    getTags(userId: any, options: any): any;
    getContainers(userId: any, options: any): any;
    getAudioCodecs(userId: any, options: any): any;
    getStreamLanguages(userId: any, options: any): any;
    getVideoCodecs(userId: any, options: any): any;
    getSubtitleCodecs(userId: any, options: any): any;
    getDefaultPrefixes(): Promise<{
        Name: any;
    }[]>;
    getPrefixes(userId: any, options: any): any;
    getArtistPrefixes(userId: any, options: any): any;
    /**
     * Gets local trailers for an item
     */
    getLocalTrailers(userId: any, itemId: any): any;
    getGameSystems(): any;
    getAdditionalVideoParts(userId: any, itemId: any): any;
    getThemeMedia(itemId: any, options: any): any;
    getAudioStreamUrl({ Id }: BaseItemDto,
        { Container, Protocol, AudioCodec }: {
            Container: any;
            Protocol: any;
            AudioCodec: any;
        }, directPlayContainers: any, maxBitrate: any, maxAudioSampleRate: any, maxAudioBitDepth: any, startPosition: any, enableRemoteMedia: any): string;
    getAudioStreamUrls(items: any, transcodingProfile: any, directPlayContainers: any, maxBitrate: any, maxAudioSampleRate: any, maxAudioBitDepth: any, startPosition: any, enableRemoteMedia: any): Promise<any[]>;
    /**
     * Gets special features for an item
     */
    getSpecialFeatures(userId: any, itemId: any): any;
    getDateParamValue(date: any): string;
    markPlayed(userId: any, itemId: any, date: any): any;
    markUnplayed(userId: any, itemId: any): any;
    /**
     * Updates a user's favorite status for an item.
     * @param {String} userId
     * @param {String} itemId
     * @param {Boolean} isFavorite
     */
    updateFavoriteStatus(userId: string, itemId: string, isFavorite: boolean): any;
    /**
     * Updates a user's personal rating for an item
     * @param {String} userId
     * @param {String} itemId
     * @param {Boolean} likes
     */
    updateUserItemRating(userId: string, itemId: string, likes: boolean): any;
    getItemCounts(userId: any): any;
    /**
     * Clears a user's personal rating for an item
     * @param {String} userId
     * @param {String} itemId
     */
    clearUserItemRating(userId: string, itemId: string): any;
    /**
     * Reports the user has started playing something
     * @param {String} userId
     * @param {String} itemId
     */
    reportPlaybackStart(options: any): any;
    lastPlaybackProgressReport: number;
    lastPlaybackProgressReportTicks: any;
    /**
     * Reports progress viewing an item
     * @param {String} userId
     * @param {String} itemId
     */
    reportPlaybackProgress(options: any): any;
    reportOfflineActions(actions: any): any;
    syncData(data: any): any;
    getReadySyncItems(deviceId: any): any;
    reportSyncJobItemTransferred(syncJobItemId: any): any;
    cancelSyncItems(itemIds: any, targetId: any): any;
    /**
     * Reports a user has stopped playing an item
     * @param {String} userId
     * @param {String} itemId
     */
    reportPlaybackStopped(options: any): any;
    sendPlayCommand(sessionId: any, options: any): any;
    sendCommand(sessionId: any, command: any): any;
    sendMessageCommand(sessionId: any, options: any): any;
    sendPlayStateCommand(sessionId: any, command: any, options: any): any;
    getSavedEndpointInfo(): any;
    getEndpointInfo(): any;
    getWakeOnLanInfo(): any;
    getLatestItems(options?: {}): any;
    getPlayQueue(options: any): any;
    supportsWakeOnLan(): boolean;
    setSystemInfo({ Version }: {
        Version: any;
    }): void;
    _serverVersion: any;
    _queryStringAuth: boolean;
    _separateHeaderValues: boolean;
    serverVersion(): any;
    isMinServerVersion(version: any): boolean;
    handleMessageReceived(msg: any): void;
    getScaledImageUrl: (itemId: any, options: any) => any;
}

/**
 * 
 * @export
 * @interface ConnectConnectAuthenticationExchangeResult
 */
export interface ConnectConnectAuthenticationExchangeResult {
    /**
     * 
     * @type {string}
     * @memberof ConnectConnectAuthenticationExchangeResult
     */
    LocalUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectConnectAuthenticationExchangeResult
     */
    AccessToken?: string;
}

/**
 * 
 * @export
 * @interface ClientCapabilities
 */
export interface ClientCapabilities {
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientCapabilities
     */
    PlayableMediaTypes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientCapabilities
     */
    SupportedCommands?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsMediaControl?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    PushToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    PushTokenType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsSync?: boolean;
    /**
     * 
     * @type {DlnaDeviceProfile}
     * @memberof ClientCapabilities
     */
    DeviceProfile?: DlnaDeviceProfile;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    IconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    AppId?: string;
}

/**
 * 
 * @export
 * @interface SessionSessionInfo
 */
export interface SessionSessionInfo {
    /**
     * 
     * @type {PlayerStateInfo}
     * @memberof SessionSessionInfo
     */
    PlayState?: PlayerStateInfo;
    /**
     * 
     * @type {Array<SessionUserInfo>}
     * @memberof SessionSessionInfo
     */
    AdditionalUsers?: Array<SessionUserInfo>;
    /**
     * 
     * @type {NetIPAddress}
     * @memberof SessionSessionInfo
     */
    RemoteEndPoint?: NetIPAddress;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    Protocol?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SessionSessionInfo
     */
    PlayableMediaTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    PlaylistItemId?: string;
    /**
     * 
     * @type {number}
     * @memberof SessionSessionInfo
     */
    PlaylistIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SessionSessionInfo
     */
    PlaylistLength?: number;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    ServerId?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    UserId?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    UserName?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    UserPrimaryImageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    Client?: string;
    /**
     * 
     * @type {Date}
     * @memberof SessionSessionInfo
     */
    LastActivityDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    DeviceName?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    DeviceType?: string;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof SessionSessionInfo
     */
    NowPlayingItem?: BaseItemDto;
    /**
     * 
     * @type {number}
     * @memberof SessionSessionInfo
     */
    InternalDeviceId?: number;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    DeviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    ApplicationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionSessionInfo
     */
    AppIconUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SessionSessionInfo
     */
    SupportedCommands?: Array<string>;
    /**
     * 
     * @type {TranscodingInfo}
     * @memberof SessionSessionInfo
     */
    TranscodingInfo?: TranscodingInfo;
    /**
     * 
     * @type {boolean}
     * @memberof SessionSessionInfo
     */
    SupportsRemoteControl?: boolean;
}

/**
 * 
 * @export
 * @interface QueryResultBaseItemDto
 */
export interface QueryResultBaseItemDto {
    /**
     * 
     * @type {Array<BaseItemDto>}
     * @memberof QueryResultBaseItemDto
     */
    Items?: Array<BaseItemDto>;
    /**
     * 
     * @type {number}
     * @memberof QueryResultBaseItemDto
     */
    TotalRecordCount?: number;
}

/**
 * 
 * @export
 * @interface BaseItemDto
 */
export interface BaseItemDto {
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    OriginalTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ServerId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Guid?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Etag?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Prefix?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    PlaylistItemId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BaseItemDto
     */
    DateCreated?: Date;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ExtraType?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    SortIndexNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    SortParentIndexNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    AirsBeforeSeasonNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    AirsAfterSeasonNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    AirsBeforeEpisodeNumber?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    CanDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    CanDownload?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    SupportsResume?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    PresentationUniqueKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    PreferredMetadataLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    PreferredMetadataCountryCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    SupportsSync?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Container?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SortName?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ForcedSortName?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Video3DFormat?: BaseItemDto.Video3DFormatEnum;
    /**
     * 
     * @type {Date}
     * @memberof BaseItemDto
     */
    PremiereDate?: Date;
    /**
     * 
     * @type {Array<ExternalUrl>}
     * @memberof BaseItemDto
     */
    ExternalUrls?: Array<ExternalUrl>;
    /**
     * 
     * @type {Array<MediaSourceInfo>}
     * @memberof BaseItemDto
     */
    MediaSources?: Array<MediaSourceInfo>;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    CriticRating?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    GameSystemId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    AsSeries?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    GameSystem?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    ProductionLocations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Path?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    OfficialRating?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    CustomRating?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ChannelId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ChannelName?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Overview?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    Taglines?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    Genres?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    CommunityRating?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    RunTimeTicks?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Size?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    FileName?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Bitrate?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    PlayAccess?: BaseItemDto.PlayAccessEnum;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    ProductionYear?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Number?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ChannelNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    IndexNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    IndexNumberEnd?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    ParentIndexNumber?: number;
    /**
     * 
     * @type {Array<MediaUrl>}
     * @memberof BaseItemDto
     */
    RemoteTrailers?: Array<MediaUrl>;
    /**
     * 
     * @type {Array}
     * @memberof BaseItemDto
     */
    ProviderIds?: Array<string | number>;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsFoldEr?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Type?: string;
    /**
     * 
     * @type {Array<BaseItemPerson>}
     * @memberof BaseItemDto
     */
    People?: Array<BaseItemPerson>;
    /**
     * 
     * @type {Array<NameLongIdPair>}
     * @memberof BaseItemDto
     */
    Studios?: Array<NameLongIdPair>;
    /**
     * 
     * @type {Array<NameLongIdPair>}
     * @memberof BaseItemDto
     */
    GenreItems?: Array<NameLongIdPair>;
    /**
     * 
     * @type {Array<NameLongIdPair>}
     * @memberof BaseItemDto
     */
    TagItems?: Array<NameLongIdPair>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentLogoItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentBackdropItemId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    ParentBackdropImageTags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    LocalTrailerCount?: number;
    /**
     * 
     * @type {UserItemDataDto}
     * @memberof BaseItemDto
     */
    UserData?: UserItemDataDto;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    RecursiveItemCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    ChildCount?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeriesName?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeriesId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeasonId?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    SpecialFeatureCount?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    DisplayPreferencesId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Status?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    AirDays?: Array<BaseItemDto.AirDaysEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    Tags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    PrimaryImageAspectRatio?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    Artists?: Array<string>;
    /**
     * 
     * @type {Array<NameIdPair>}
     * @memberof BaseItemDto
     */
    ArtistItems?: Array<NameIdPair>;
    /**
     * 
     * @type {Array<NameIdPair>}
     * @memberof BaseItemDto
     */
    Composers?: Array<NameIdPair>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Album?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    CollectionType?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    DisplayOrder?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    AlbumId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    AlbumPrimaryImageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeriesPrimaryImageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    AlbumArtist?: string;
    /**
     * 
     * @type {Array<NameIdPair>}
     * @memberof BaseItemDto
     */
    AlbumArtists?: Array<NameIdPair>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeasonName?: string;
    /**
     * 
     * @type {Array<MediaStream>}
     * @memberof BaseItemDto
     */
    MediaStreams?: Array<MediaStream>;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    PartCount?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BaseItemDto
     */
    ImageTags?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    BackdropImageTags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentLogoImageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeriesStudio?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentThumbItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ParentThumbImageTag?: string;
    /**
     * 
     * @type {Array<ChapterInfo>}
     * @memberof BaseItemDto
     */
    Chapters?: Array<ChapterInfo>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    LocationType?: BaseItemDto.LocationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    MediaType?: string;
    /**
     * 
     * @type {Date}
     * @memberof BaseItemDto
     */
    EndDate?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    LockedFields?: Array<BaseItemDto.LockedFieldsEnum>;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    LockData?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Width?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Height?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    CameraMake?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    CameraModel?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    Software?: string;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    ExposureTime?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    FocalLength?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ImageOrientation?: BaseItemDto.ImageOrientationEnum;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Aperture?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    ShutterSpeed?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Longitude?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    Altitude?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    IsoSpeedRating?: number;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    SeriesTimerId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ChannelPrimaryImageTag?: string;
    /**
     * 
     * @type {Date}
     * @memberof BaseItemDto
     */
    StartDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    CompletionPercentage?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsRepeat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsNew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    EpisodeTitle?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsMovie?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsSports?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsSeries?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsLive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsNews?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsKids?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    IsPremiere?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    TimerType?: BaseItemDto.TimerTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BaseItemDto
     */
    Disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ManagementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    TimerId?: string;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof BaseItemDto
     */
    CurrentProgram?: BaseItemDto;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    MovieCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    SeriesCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    AlbumCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    SongCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseItemDto
     */
    MusicVideoCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseItemDto
     */
    Subviews?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsProviderId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsChannelId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsPath?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsId?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsChannelName?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    ListingsChannelNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemDto
     */
    AffiliateCallSign?: string;

    Url: string;

    ImgUrl: string
}

/**
 * 
 * @export
 * @interface MediaStream
 */
export interface MediaStream {
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Codec?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    CodecTag?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Language?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ColorTransfer?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ColorPrimaries?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ColorSpace?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Comment?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    StreamStartTimeTicks?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    TimeBase?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    CodecTimeBase?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Title?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Extradata?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    VideoRange?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    DisplayTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    DisplayLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    NalLengthSize?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsInterlaced?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsAvc?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ChannelLayout?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    BitRate?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    BitDepth?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    RefFrames?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Rotation?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Channels?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    SampleRate?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsForced?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Height?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Width?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    AverageFrameRate?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    RealFrameRate?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Profile?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Type?: MediaStream.TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    AspectRatio?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Index?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsExternal?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    DeliveryMethod?: MediaStream.DeliveryMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    DeliveryUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsExternalUrl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsTextSubtitleStream?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    SupportsExternalStream?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Path?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    Protocol?: MediaStream.ProtocolEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    PixelFormat?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    Level?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsAnamorphic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    ServerId?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaStream
     */
    AttachmentSize?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    MimeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaStream
     */
    IsClosedCaptions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaStream
     */
    SubtitleLocationType?: MediaStream.SubtitleLocationTypeEnum;
}

/**
 * 
 * @export
 * @interface ChapterInfo
 */
export interface ChapterInfo {
    /**
     * 
     * @type {number}
     * @memberof ChapterInfo
     */
    StartPositionTicks?: number;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    ImageTag?: string;
    /**
     * 
     * @type {string}
     * @memberof ChapterInfo
     */
    MarkerType?: ChapterInfo.MarkerTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ChapterInfo
     */
    ChapterIndex?: number;
}

/**
 * 
 * @export
 * @interface PlayerStateInfo
 */
export interface PlayerStateInfo {
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    PositionTicks?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PlayerStateInfo
     */
    CanSeek?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlayerStateInfo
     */
    IsPaused?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlayerStateInfo
     */
    IsMuted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    VolumeLevel?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    AudioStreamIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    SubtitleStreamIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof PlayerStateInfo
     */
    MediaSourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerStateInfo
     */
    PlayMethod?: PlayerStateInfo.PlayMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof PlayerStateInfo
     */
    RepeatMode?: PlayerStateInfo.RepeatModeEnum;
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    SubtitleOffset?: number;
    /**
     * 
     * @type {number}
     * @memberof PlayerStateInfo
     */
    PlaybackRate?: number;
}

/**
 * 
 * @export
 * @interface RecommendationDto
 */
export interface RecommendationDto {
    /**
     * 
     * @type {Array<BaseItemDto>}
     * @memberof RecommendationDto
     */
    Items?: Array<BaseItemDto>;
    /**
     * 
     * @type {string}
     * @memberof RecommendationDto
     */
    RecommendationType?: RecommendationDto.RecommendationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RecommendationDto
     */
    BaselineItemName?: string;
    /**
     * 
     * @type {number}
     * @memberof RecommendationDto
     */
    CategoryId?: number;
}

/**
 * 
 * @export
 * @interface DlnaDeviceProfile
 */
export interface DlnaDeviceProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaDeviceProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaDeviceProfile
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaDeviceProfile
     */
    supportedMediaTypes?: string;
    /**
     * 
     * @type {number}
     * @memberof DlnaDeviceProfile
     */
    maxStreamingBitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof DlnaDeviceProfile
     */
    musicStreamingTranscodingBitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof DlnaDeviceProfile
     */
    maxStaticMusicBitrate?: number;
    /**
     * 
     * @type {Array<DlnaDirectPlayProfile>}
     * @memberof DlnaDeviceProfile
     */
    directPlayProfiles?: Array<DlnaDirectPlayProfile>;
    /**
     * 
     * @type {Array<DlnaTranscodingProfile>}
     * @memberof DlnaDeviceProfile
     */
    transcodingProfiles?: Array<DlnaTranscodingProfile>;
    /**
     * 
     * @type {Array<DlnaContainerProfile>}
     * @memberof DlnaDeviceProfile
     */
    containerProfiles?: Array<DlnaContainerProfile>;
    /**
     * 
     * @type {Array<DlnaCodecProfile>}
     * @memberof DlnaDeviceProfile
     */
    codecProfiles?: Array<DlnaCodecProfile>;
    /**
     * 
     * @type {Array<DlnaResponseProfile>}
     * @memberof DlnaDeviceProfile
     */
    responseProfiles?: Array<DlnaResponseProfile>;
    /**
     * 
     * @type {Array<DlnaSubtitleProfile>}
     * @memberof DlnaDeviceProfile
     */
    subtitleProfiles?: Array<DlnaSubtitleProfile>;
}

/**
 * 
 * @export
 * @interface SessionUserInfo
 */
export interface SessionUserInfo {
    /**
     * 
     * @type {string}
     * @memberof SessionUserInfo
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionUserInfo
     */
    userName?: string;
    /**
     * 
     * @type {number}
     * @memberof SessionUserInfo
     */
    userInternalId?: number;
}

/**
 * 
 * @export
 * @interface NetIPAddress
 */
export interface NetIPAddress {
    /**
     * 
     * @type {string}
     * @memberof NetIPAddress
     */
    addressFamily?: NetIPAddress.AddressFamilyEnum;
    /**
     * 
     * @type {number}
     * @memberof NetIPAddress
     */
    scopeId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv6Multicast?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv6LinkLocal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv6SiteLocal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv6Teredo?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv6UniqueLocal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetIPAddress
     */
    isIPv4MappedToIPv6?: boolean;
    /**
     * 
     * @type {number}
     * @memberof NetIPAddress
     */
    address?: number;
}

/**
 * 
 * @export
 * @interface TranscodingInfo
 */
export interface TranscodingInfo {
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    audioCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    subProtocol?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    container?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    isVideoDirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    isAudioDirect?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    bitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    audioBitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    videoBitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    framerate?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    completionPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    transcodingPositionTicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    transcodingStartPositionTicks?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    audioChannels?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranscodingInfo
     */
    transcodeReasons?: Array<TranscodingInfo.TranscodeReasonsEnum>;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    currentCpuUsage?: number;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    averageCpuUsage?: number;
    /**
     * 
     * @type {Array<TupleDoubleDouble>}
     * @memberof TranscodingInfo
     */
    cpuHistory?: Array<TupleDoubleDouble>;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    currentThrottle?: number;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoDecoder?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    videoDecoderIsHardware?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoDecoderMediaType?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoDecoderHwAccel?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoEncoder?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    videoEncoderIsHardware?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoEncoderMediaType?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    videoEncoderHwAccel?: string;
    /**
     * 
     * @type {Array}
     * @memberof TranscodingInfo
     */
    videoPipelineInfo?: Array<string>;
    /**
     * 
     * @type {Array<Array>}
     * @memberof TranscodingInfo
     */
    subtitlePipelineInfos?: Array<Array<string>>;
}

/**
 * @export
 * @namespace BaseItemDto
 */
export namespace BaseItemDto {
    /**
     * @export
     * @enum {string}
     */
    export enum Video3DFormatEnum {
        HalfSideBySide = 'HalfSideBySide',
        FullSideBySide = 'FullSideBySide',
        FullTopAndBottom = 'FullTopAndBottom',
        HalfTopAndBottom = 'HalfTopAndBottom',
        MVC = 'MVC'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum PlayAccessEnum {
        Full = 'Full',
        None = 'None'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum AirDaysEnum {
        Sunday = 'Sunday',
        Monday = 'Monday',
        Tuesday = 'Tuesday',
        Wednesday = 'Wednesday',
        Thursday = 'Thursday',
        Friday = 'Friday',
        Saturday = 'Saturday'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum LocationTypeEnum {
        FileSystem = 'FileSystem',
        Virtual = 'Virtual'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum LockedFieldsEnum {
        Cast = 'Cast',
        Genres = 'Genres',
        ProductionLocations = 'ProductionLocations',
        Studios = 'Studios',
        Tags = 'Tags',
        Name = 'Name',
        Overview = 'Overview',
        Runtime = 'Runtime',
        OfficialRating = 'OfficialRating',
        Collections = 'Collections',
        ChannelNumber = 'ChannelNumber',
        SortName = 'SortName',
        OriginalTitle = 'OriginalTitle'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum ImageOrientationEnum {
        TopLeft = 'TopLeft',
        TopRight = 'TopRight',
        BottomRight = 'BottomRight',
        BottomLeft = 'BottomLeft',
        LeftTop = 'LeftTop',
        RightTop = 'RightTop',
        RightBottom = 'RightBottom',
        LeftBottom = 'LeftBottom'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TimerTypeEnum {
        Program = 'Program',
        DateTime = 'DateTime',
        Keyword = 'Keyword'
    }
}

/**
 * 
 * @export
 * @interface ExternalUrl
 */
export interface ExternalUrl {
    /**
     * 
     * @type {string}
     * @memberof ExternalUrl
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalUrl
     */
    url?: string;
}

/**
 * 
 * @export
 * @interface MediaSourceInfo
 */
export interface MediaSourceInfo {
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    protocol?: MediaSourceInfo.ProtocolEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    encoderPath?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    encoderProtocol?: MediaSourceInfo.EncoderProtocolEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    type?: MediaSourceInfo.TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    container?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    sortName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    isRemote?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    runTimeTicks?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    containerStartTimeTicks?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsDirectStream?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsDirectPlay?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    isInfiniteStream?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresOpening?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    openToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresClosing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    liveStreamId?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    bufferMs?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresLooping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsProbing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    video3DFormat?: MediaSourceInfo.Video3DFormatEnum;
    /**
     * 
     * @type {Array<MediaStream>}
     * @memberof MediaSourceInfo
     */
    mediaStreams?: Array<MediaStream>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MediaSourceInfo
     */
    formats?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    bitrate?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    timestamp?: MediaSourceInfo.TimestampEnum;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MediaSourceInfo
     */
    requiredHttpHeaders?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    directStreamUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingSubProtocol?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingContainer?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    analyzeDurationMs?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    readAtNativeFramerate?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    defaultAudioStreamIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    defaultSubtitleStreamIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    itemId?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    serverId?: string;
}

/**
 * 
 * @export
 * @interface MediaUrl
 */
export interface MediaUrl {
    /**
     * 
     * @type {string}
     * @memberof MediaUrl
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaUrl
     */
    name?: string;
}

/**
 * 
 * @export
 * @interface BaseItemPerson
 */
export interface BaseItemPerson {
    /**
     * 
     * @type {string}
     * @memberof BaseItemPerson
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemPerson
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemPerson
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseItemPerson
     */
    type?: BaseItemPerson.TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BaseItemPerson
     */
    primaryImageTag?: string;
}

/**
 * 
 * @export
 * @interface NameLongIdPair
 */
export interface NameLongIdPair {
    /**
     * 
     * @type {string}
     * @memberof NameLongIdPair
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof NameLongIdPair
     */
    id?: number;
}

/**
 * @export
 * @namespace MediaStream
 */
export namespace MediaStream {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Unknown = 'Unknown',
        Audio = 'Audio',
        Video = 'Video',
        Subtitle = 'Subtitle',
        EmbeddedImage = 'EmbeddedImage',
        Attachment = 'Attachment',
        Data = 'Data'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum DeliveryMethodEnum {
        Encode = 'Encode',
        Embed = 'Embed',
        External = 'External',
        Hls = 'Hls',
        VideoSideData = 'VideoSideData'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum ProtocolEnum {
        File = 'File',
        Http = 'Http',
        Rtmp = 'Rtmp',
        Rtsp = 'Rtsp',
        Udp = 'Udp',
        Rtp = 'Rtp',
        Ftp = 'Ftp',
        Mms = 'Mms'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum SubtitleLocationTypeEnum {
        InternalStream = 'InternalStream',
        VideoSideData = 'VideoSideData'
    }
}

/**
 * 
 * @export
 * @interface UserItemDataDto
 */
export interface UserItemDataDto {
    /**
     * 
     * @type {number}
     * @memberof UserItemDataDto
     */
    rating?: number;
    /**
     * 
     * @type {number}
     * @memberof UserItemDataDto
     */
    playedPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof UserItemDataDto
     */
    unplayedItemCount?: number;
    /**
     * 
     * @type {number}
     * @memberof UserItemDataDto
     */
    playbackPositionTicks?: number;
    /**
     * 
     * @type {number}
     * @memberof UserItemDataDto
     */
    playCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserItemDataDto
     */
    isFavorite?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserItemDataDto
     */
    lastPlayedDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UserItemDataDto
     */
    played?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserItemDataDto
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof UserItemDataDto
     */
    itemId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserItemDataDto
     */
    serverId?: string;
}

/**
 * @export
 * @namespace ChapterInfo
 */
export namespace ChapterInfo {
    /**
     * @export
     * @enum {string}
     */
    export enum MarkerTypeEnum {
        Chapter = 'Chapter',
        IntroStart = 'IntroStart',
        IntroEnd = 'IntroEnd',
        CreditsStart = 'CreditsStart'
    }
}

/**
 * @export
 * @namespace PlayerStateInfo
 */
export namespace PlayerStateInfo {
    /**
     * @export
     * @enum {string}
     */
    export enum PlayMethodEnum {
        Transcode = 'Transcode',
        DirectStream = 'DirectStream',
        DirectPlay = 'DirectPlay'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum RepeatModeEnum {
        RepeatNone = 'RepeatNone',
        RepeatAll = 'RepeatAll',
        RepeatOne = 'RepeatOne'
    }
}

/**
 * 
 * @export
 * @interface NameIdPair
 */
export interface NameIdPair {
    /**
     * 
     * @type {string}
     * @memberof NameIdPair
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof NameIdPair
     */
    id?: string;
}

/**
 * @export
 * @namespace RecommendationDto
 */
export namespace RecommendationDto {
    /**
     * @export
     * @enum {string}
     */
    export enum RecommendationTypeEnum {
        SimilarToRecentlyPlayed = 'SimilarToRecentlyPlayed',
        SimilarToLikedItem = 'SimilarToLikedItem',
        HasDirectorFromRecentlyPlayed = 'HasDirectorFromRecentlyPlayed',
        HasActorFromRecentlyPlayed = 'HasActorFromRecentlyPlayed',
        HasLikedDirector = 'HasLikedDirector',
        HasLikedActor = 'HasLikedActor'
    }
}

/**
 * 
 * @export
 * @interface DlnaDirectPlayProfile
 */
export interface DlnaDirectPlayProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    container?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    audioCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    videoCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    type?: DlnaDirectPlayProfile.TypeEnum;
}

/**
 * 
 * @export
 * @interface DlnaTranscodingProfile
 */
export interface DlnaTranscodingProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    container?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    type?: DlnaTranscodingProfile.TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    videoCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    audioCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    protocol?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaTranscodingProfile
     */
    estimateContentLength?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaTranscodingProfile
     */
    enableMpegtsM2TsMode?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    transcodeSeekInfo?: DlnaTranscodingProfile.TranscodeSeekInfoEnum;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaTranscodingProfile
     */
    copyTimestamps?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    context?: DlnaTranscodingProfile.ContextEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    maxAudioChannels?: string;
    /**
     * 
     * @type {number}
     * @memberof DlnaTranscodingProfile
     */
    minSegments?: number;
    /**
     * 
     * @type {number}
     * @memberof DlnaTranscodingProfile
     */
    segmentLength?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaTranscodingProfile
     */
    breakOnNonKeyFrames?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaTranscodingProfile
     */
    allowInterlacedVideoStreamCopy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DlnaTranscodingProfile
     */
    manifestSubtitles?: string;
    /**
     * 
     * @type {number}
     * @memberof DlnaTranscodingProfile
     */
    maxManifestSubtitles?: number;
}

/**
 * 
 * @export
 * @interface DlnaContainerProfile
 */
export interface DlnaContainerProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaContainerProfile
     */
    type?: DlnaContainerProfile.TypeEnum;
    /**
     * 
     * @type {Array<DlnaProfileCondition>}
     * @memberof DlnaContainerProfile
     */
    conditions?: Array<DlnaProfileCondition>;
    /**
     * 
     * @type {string}
     * @memberof DlnaContainerProfile
     */
    container?: string;
}

/**
 * 
 * @export
 * @interface DlnaCodecProfile
 */
export interface DlnaCodecProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaCodecProfile
     */
    type?: DlnaCodecProfile.TypeEnum;
    /**
     * 
     * @type {Array<DlnaProfileCondition>}
     * @memberof DlnaCodecProfile
     */
    conditions?: Array<DlnaProfileCondition>;
    /**
     * 
     * @type {Array<DlnaProfileCondition>}
     * @memberof DlnaCodecProfile
     */
    applyConditions?: Array<DlnaProfileCondition>;
    /**
     * 
     * @type {string}
     * @memberof DlnaCodecProfile
     */
    codec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaCodecProfile
     */
    container?: string;
}

/**
 * 
 * @export
 * @interface DlnaResponseProfile
 */
export interface DlnaResponseProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    container?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    audioCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    videoCodec?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    type?: DlnaResponseProfile.TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    orgPn?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaResponseProfile
     */
    mimeType?: string;
    /**
     * 
     * @type {Array<DlnaProfileCondition>}
     * @memberof DlnaResponseProfile
     */
    conditions?: Array<DlnaProfileCondition>;
}

/**
 * 
 * @export
 * @interface DlnaSubtitleProfile
 */
export interface DlnaSubtitleProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    format?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    method?: DlnaSubtitleProfile.MethodEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    didlMode?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    container?: string;
    /**
     * 
     * @type {string}
     * @memberof DlnaSubtitleProfile
     */
    protocol?: string;
}

/**
 * @export
 * @namespace NetIPAddress
 */
export namespace NetIPAddress {
    /**
     * @export
     * @enum {string}
     */
    export enum AddressFamilyEnum {
        Unspecified = 'Unspecified',
        Unix = 'Unix',
        InterNetwork = 'InterNetwork',
        ImpLink = 'ImpLink',
        Pup = 'Pup',
        Chaos = 'Chaos',
        NS = 'NS',
        Ipx = 'Ipx',
        Osi = 'Osi',
        Iso = 'Iso',
        Ecma = 'Ecma',
        DataKit = 'DataKit',
        Ccitt = 'Ccitt',
        Sna = 'Sna',
        DecNet = 'DecNet',
        DataLink = 'DataLink',
        Lat = 'Lat',
        HyperChannel = 'HyperChannel',
        AppleTalk = 'AppleTalk',
        NetBios = 'NetBios',
        VoiceView = 'VoiceView',
        FireFox = 'FireFox',
        Banyan = 'Banyan',
        Atm = 'Atm',
        InterNetworkV6 = 'InterNetworkV6',
        Cluster = 'Cluster',
        Ieee12844 = 'Ieee12844',
        Irda = 'Irda',
        NetworkDesigners = 'NetworkDesigners',
        Max = 'Max',
        Packet = 'Packet',
        ControllerAreaNetwork = 'ControllerAreaNetwork',
        Unknown = 'Unknown'
    }
}

/**
 * @export
 * @namespace TranscodingInfo
 */
export namespace TranscodingInfo {
    /**
     * @export
     * @enum {string}
     */
    export enum TranscodeReasonsEnum {
        ContainerNotSupported = 'ContainerNotSupported',
        VideoCodecNotSupported = 'VideoCodecNotSupported',
        AudioCodecNotSupported = 'AudioCodecNotSupported',
        ContainerBitrateExceedsLimit = 'ContainerBitrateExceedsLimit',
        AudioBitrateNotSupported = 'AudioBitrateNotSupported',
        AudioChannelsNotSupported = 'AudioChannelsNotSupported',
        VideoResolutionNotSupported = 'VideoResolutionNotSupported',
        UnknownVideoStreamInfo = 'UnknownVideoStreamInfo',
        UnknownAudioStreamInfo = 'UnknownAudioStreamInfo',
        AudioProfileNotSupported = 'AudioProfileNotSupported',
        AudioSampleRateNotSupported = 'AudioSampleRateNotSupported',
        AnamorphicVideoNotSupported = 'AnamorphicVideoNotSupported',
        InterlacedVideoNotSupported = 'InterlacedVideoNotSupported',
        SecondaryAudioNotSupported = 'SecondaryAudioNotSupported',
        RefFramesNotSupported = 'RefFramesNotSupported',
        VideoBitDepthNotSupported = 'VideoBitDepthNotSupported',
        VideoBitrateNotSupported = 'VideoBitrateNotSupported',
        VideoFramerateNotSupported = 'VideoFramerateNotSupported',
        VideoLevelNotSupported = 'VideoLevelNotSupported',
        VideoProfileNotSupported = 'VideoProfileNotSupported',
        AudioBitDepthNotSupported = 'AudioBitDepthNotSupported',
        SubtitleCodecNotSupported = 'SubtitleCodecNotSupported',
        DirectPlayError = 'DirectPlayError',
        VideoRangeNotSupported = 'VideoRangeNotSupported'
    }
}

/**
 * 
 * @export
 * @interface TupleDoubleDouble
 */
export interface TupleDoubleDouble {
    /**
     * 
     * @type {number}
     * @memberof TupleDoubleDouble
     */
    item1?: number;
    /**
     * 
     * @type {number}
     * @memberof TupleDoubleDouble
     */
    item2?: number;
}

/**
 * @export
 * @namespace MediaSourceInfo
 */
export namespace MediaSourceInfo {
    /**
     * @export
     * @enum {string}
     */
    export enum ProtocolEnum {
        File = 'File',
        Http = 'Http',
        Rtmp = 'Rtmp',
        Rtsp = 'Rtsp',
        Udp = 'Udp',
        Rtp = 'Rtp',
        Ftp = 'Ftp',
        Mms = 'Mms'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum EncoderProtocolEnum {
        File = 'File',
        Http = 'Http',
        Rtmp = 'Rtmp',
        Rtsp = 'Rtsp',
        Udp = 'Udp',
        Rtp = 'Rtp',
        Ftp = 'Ftp',
        Mms = 'Mms'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Default = 'Default',
        Grouping = 'Grouping',
        Placeholder = 'Placeholder'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum Video3DFormatEnum {
        HalfSideBySide = 'HalfSideBySide',
        FullSideBySide = 'FullSideBySide',
        FullTopAndBottom = 'FullTopAndBottom',
        HalfTopAndBottom = 'HalfTopAndBottom',
        MVC = 'MVC'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TimestampEnum {
        None = 'None',
        Zero = 'Zero',
        Valid = 'Valid'
    }
}

/**
 * @export
 * @namespace BaseItemPerson
 */
export namespace BaseItemPerson {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Actor = 'Actor',
        Director = 'Director',
        Writer = 'Writer',
        Producer = 'Producer',
        GuestStar = 'GuestStar',
        Composer = 'Composer',
        Conductor = 'Conductor',
        Lyricist = 'Lyricist'
    }
}

/**
 * @export
 * @namespace DlnaTranscodingProfile
 */
export namespace DlnaTranscodingProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Audio = 'Audio',
        Video = 'Video',
        Photo = 'Photo'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum TranscodeSeekInfoEnum {
        Auto = 'Auto',
        Bytes = 'Bytes'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum ContextEnum {
        Streaming = 'Streaming',
        Static = 'Static'
    }
}

/**
 * @export
 * @namespace DlnaDirectPlayProfile
 */
export namespace DlnaDirectPlayProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Audio = 'Audio',
        Video = 'Video',
        Photo = 'Photo'
    }
}

/**
 * @export
 * @namespace DlnaContainerProfile
 */
export namespace DlnaContainerProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Audio = 'Audio',
        Video = 'Video',
        Photo = 'Photo'
    }
}

/**
 * 
 * @export
 * @interface DlnaProfileCondition
 */
export interface DlnaProfileCondition {
    /**
     * 
     * @type {string}
     * @memberof DlnaProfileCondition
     */
    condition?: DlnaProfileCondition.ConditionEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaProfileCondition
     */
    property?: DlnaProfileCondition.PropertyEnum;
    /**
     * 
     * @type {string}
     * @memberof DlnaProfileCondition
     */
    value?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DlnaProfileCondition
     */
    isRequired?: boolean;
}

/**
 * @export
 * @namespace DlnaCodecProfile
 */
export namespace DlnaCodecProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Video = 'Video',
        VideoAudio = 'VideoAudio',
        Audio = 'Audio'
    }
}

/**
 * @export
 * @namespace DlnaResponseProfile
 */
export namespace DlnaResponseProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        Audio = 'Audio',
        Video = 'Video',
        Photo = 'Photo'
    }
}

/**
 * @export
 * @namespace DlnaSubtitleProfile
 */
export namespace DlnaSubtitleProfile {
    /**
     * @export
     * @enum {string}
     */
    export enum MethodEnum {
        Encode = 'Encode',
        Embed = 'Embed',
        External = 'External',
        Hls = 'Hls',
        VideoSideData = 'VideoSideData'
    }
}

/**
 * @export
 * @namespace DlnaProfileCondition
 */
export namespace DlnaProfileCondition {
    /**
     * @export
     * @enum {string}
     */
    export enum ConditionEnum {
        Equals = 'Equals',
        NotEquals = 'NotEquals',
        LessThanEqual = 'LessThanEqual',
        GreaterThanEqual = 'GreaterThanEqual',
        EqualsAny = 'EqualsAny'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum PropertyEnum {
        AudioChannels = 'AudioChannels',
        AudioBitrate = 'AudioBitrate',
        AudioProfile = 'AudioProfile',
        Width = 'Width',
        Height = 'Height',
        Has64BitOffsets = 'Has64BitOffsets',
        PacketLength = 'PacketLength',
        VideoBitDepth = 'VideoBitDepth',
        VideoBitrate = 'VideoBitrate',
        VideoFramerate = 'VideoFramerate',
        VideoLevel = 'VideoLevel',
        VideoProfile = 'VideoProfile',
        VideoTimestamp = 'VideoTimestamp',
        IsAnamorphic = 'IsAnamorphic',
        RefFrames = 'RefFrames',
        NumAudioStreams = 'NumAudioStreams',
        NumVideoStreams = 'NumVideoStreams',
        IsSecondaryAudio = 'IsSecondaryAudio',
        VideoCodecTag = 'VideoCodecTag',
        IsAvc = 'IsAvc',
        IsInterlaced = 'IsInterlaced',
        AudioSampleRate = 'AudioSampleRate',
        AudioBitDepth = 'AudioBitDepth',
        VideoRange = 'VideoRange',
        VideoRotation = 'VideoRotation'
    }
}