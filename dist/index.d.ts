export declare class EArray<T> extends Array {
    constructor(arr: T[]);
    avg(field?: string): number;
    sum(field?: string): number;
    gap(): number[];
    extractField(field: string): unknown[];
    delete(...value: unknown[]): unknown[];
    /**
     * Remove passed value from array and remove them all.
     * Return an array of removed values.
     * @param {unknown} value
     */
    deleteAll(...value: unknown[]): unknown[];
    last(): T;
    shuffle(): unknown[];
    clear(): void;
    unique(field?: string): T[];
    contains(...value: unknown[]): boolean;
    chunk(size?: number): unknown[];
}
