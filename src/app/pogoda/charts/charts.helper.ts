export function encodeRange(day) {
    switch (day) {
        case 'dziś': return 'day';
        case 'miesiąc': return 'month';
        case 'rok': return 'year';
    }
}

export function decodeRange(day) {
    switch (day) {
        case 'day': return 'dziś';
        case 'month': return 'miesiąc';
        case 'year': return 'rok';
    }
}

export function decodeType(type) {
    switch (type) {
        case 'outTemp': return 'temperatura'
        case 'outHumidity': return 'wilgotność';
        case 'windGust': return 'wiatr';
        case 'rain': return 'opady';
        case 'barometer': return 'ciśnienie';
    }
}

export function encodeType(type) {
    switch (type) {
        case 'temperatura': return 'outTemp';
        case 'wilgotność': return 'outHumidity';
        case 'wiatr': return 'windGust';
        case 'opady': return 'rain';
        case 'ciśnienie': return 'barometer';
    }
}
