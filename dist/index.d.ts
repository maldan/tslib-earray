export declare class EArray<T> extends Array {
    static get [Symbol.species](): ArrayConstructor;
    constructor(arr: any);
    avg(field?: string): number;
    sum(field?: string): number;
    gap(): EArray<number>;
    extractField(field: string): EArray<unknown>;
    delete(...value: unknown[]): EArray<T>;
    deleteAll(...value: unknown[]): EArray<T>;
    last(): T;
    shuffle(): EArray<T>;
    clear(): void;
    unique(field?: string): EArray<T>;
    contains(...value: unknown[]): boolean;
    chunk(size?: number): EArray<unknown>;
    toArray(): T[];
}
