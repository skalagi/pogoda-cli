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


export function typeSuffix(type) {
    switch (type) {
        case 'temperature': return '℃';
        case 'humidity': return '%';
        case 'barometer': return 'hPa';
        case 'wind': return 'km/h';
        case 'rain': return 'mm';
    }
}

export function minMax(type, data) {
    let min, max;

    if (type === 'wind' || type === 'rain') {
        min = 0;
    } else if (type === 'humidity') {
        max = 100;
        min = 0;
    } else {
        data.forEach(point => {
            if (min === undefined) {
                min = point[1];
            } else if (point[1] < min) {
                min = point[1];
            }
        });
    }

    return { min, max };
}
