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
    serverAddress(val: any): any;
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
    setAuthenticationInfo(accessKey: any, userId: any): void;
    _userViewsPromise: any;
    serverInfo(info: any): {};
    /**
     * Gets or sets the current user id.
     */
    getCurrentUserName(): any;
    /**
     * Gets or sets the current user id.
     */
    getCurrentUserId(): any;
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
    getConnectExchange(options: any): any;
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
    getLiveTvChannels(options: any): any;
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
    getNextUpEpisodes(options: any): any;
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
    reportCapabilities(options: any): any;
    updateItemImageIndex(itemId: any, imageType: any, imageIndex: any, newIndex: any): any;
    getItemImageInfos(itemId: any): any;
    getCriticReviews(itemId: any, options: any): any;
    getItemDownloadUrl(itemId: any, mediaSourceId: any): any;
    getSessions(options: any): any;
    /**
     * Uploads a user image
     * @param {String} userId
     * @param {String} imageType The type of image to delete, based on the server-side ImageType enum.
     * @param {Object} file The file from the input element
     */
    uploadUserImage(userId: string, imageType: string, file: any): Promise<any>;
    uploadItemImage(itemId: any, imageType: any, file: any): Promise<any>;
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
    getGenre(name: any, userId: any): any;
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
    getImageUrl(itemId: any, options: any): any;
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
    getItems(userId: string, options: any, signal: any): any;
    getResumableItems(userId: any, options: any): any;
    getMovieRecommendations(options: any): any;
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
    getGenres(userId: any, options: any): any;
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
    getAudioStreamUrl({ Id }: {
        Id: any;
    }, { Container, Protocol, AudioCodec }: {
        Container: any;
        Protocol: any;
        AudioCodec: any;
    }, directPlayContainers: any, maxBitrate: any, maxAudioSampleRate: any, maxAudioBitDepth: any, startPosition: any, enableRemoteMedia: any): any;
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
