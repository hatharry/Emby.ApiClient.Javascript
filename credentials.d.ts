export default class Credentials {
    constructor(appStorage: any, key: any);
    key: any;
    appStorage: any;
    clear(): void;
    _credentials: any;
    credentials(data: any): any;
    addOrUpdateServer(list: any, server: any): any;
}
