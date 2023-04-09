export module Utils {
    export function createMultidimensionalArray<TType>(width: number, height: number, defaultValue: TType) {
        let multiArray: TType[][] = [];

        for (let x = 0; x < width; x++) {
            const array: TType[] = [];
            for (let y = 0; y < height; y++) {
                array.push(defaultValue);
            }
            multiArray.push(array);
        }

        return multiArray;
    }

    export function forEach2d<TType>(array2d: TType[][], func: (item: TType, x: number, y: number) => void) {
        for (let x = 0; x < array2d.length; x++) {
            for (let y = 0; y < array2d[x].length; y++) {
                func(array2d[x][y], x, y);
            }
        }
    }
}
