export default class MyStore {
    init(): Promise<void>;
    setItem(name: any, value: any): void;
    getItem(name: any): any;
    removeItem(name: any): void;
}
