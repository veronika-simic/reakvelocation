export declare class CountryFactory {
    buildCountryFromDto(dto: unknown[]): Promise<{
        [x: number]: unknown;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): unknown;
        push(...items: unknown[]): number;
        concat(...items: ConcatArray<unknown>[]): unknown[];
        concat(...items: unknown[]): unknown[];
        join(separator?: string | undefined): string;
        reverse(): unknown[];
        shift(): unknown;
        slice(start?: number | undefined, end?: number | undefined): unknown[];
        sort(compareFn?: ((a: unknown, b: unknown) => number) | undefined): unknown[];
        splice(start: number, deleteCount?: number | undefined): unknown[];
        splice(start: number, deleteCount: number, ...items: unknown[]): unknown[];
        unshift(...items: unknown[]): number;
        indexOf(searchElement: unknown, fromIndex?: number | undefined): number;
        lastIndexOf(searchElement: unknown, fromIndex?: number | undefined): number;
        every<S extends unknown>(predicate: (value: unknown, index: number, array: unknown[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: unknown, index: number, array: unknown[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: unknown, index: number, array: unknown[]) => U, thisArg?: any): U[];
        filter<S_1 extends unknown>(predicate: (value: unknown, index: number, array: unknown[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any): unknown[];
        reduce(callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown): unknown;
        reduce(callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown, initialValue: unknown): unknown;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: unknown, currentIndex: number, array: unknown[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown): unknown;
        reduceRight(callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown, initialValue: unknown): unknown;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: unknown, currentIndex: number, array: unknown[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends unknown>(predicate: (this: void, value: unknown, index: number, obj: unknown[]) => value is S_2, thisArg?: any): S_2 | undefined;
        find(predicate: (value: unknown, index: number, obj: unknown[]) => unknown, thisArg?: any): unknown;
        findIndex(predicate: (value: unknown, index: number, obj: unknown[]) => unknown, thisArg?: any): number;
        fill(value: unknown, start?: number | undefined, end?: number | undefined): unknown[];
        copyWithin(target: number, start: number, end?: number | undefined): unknown[];
        entries(): IterableIterator<[number, unknown]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<unknown>;
        includes(searchElement: unknown, fromIndex?: number | undefined): boolean;
        [Symbol.iterator](): IterableIterator<unknown>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
    }>;
}