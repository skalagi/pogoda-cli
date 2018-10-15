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
        case 'temperature': return 'temperatura'
        case 'humidity': return 'wilgotność';
        case 'wind': return 'wiatr';
        case 'rain': return 'opady';
        case 'barometer': return 'ciśnienie';
    }
}

export function encodeType(type) {
    switch (type) {
        case 'temperatura': return 'temperature';
        case 'wilgotność': return 'humidity';
        case 'ciśnienie': return 'barometer';
        case 'wiatr': return 'wind';
        case 'opady': return 'rain';
    }
}
