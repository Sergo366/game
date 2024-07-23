export function debounce<T>(defaultValue?: T) {
    let prevValue = defaultValue;

    return function(value:T) {
        const oldValue = prevValue;
        prevValue = value;
        return oldValue;
    };
}