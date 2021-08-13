function roadRadar(speed, area) {
    
    speed = Number(speed);

    let diff = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            if (speed > 130) {
                diff = speed - 130;
                let status = getStatus(diff);
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            }
            break;
        case 'residential':
            if (speed > 20) {
                diff = speed - 20;
                let status = getStatus(diff);
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a 20 zone`)
            }
            break;
        case 'interstate':
            if (speed > 90) {
                diff = speed - 90;
                let status = getStatus(diff);
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a 90 zone`)
            }
            break;
        case 'city':
            if (speed > 50) {
                diff = speed - 50;
                let status = getStatus(diff);
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a 50 zone`)
            }
            break;
    }

    function getStatus(difference) {
        let speedStatus = '';
    
        if (difference <= 20) {
            speedStatus = 'speeding';
        }
        else if (difference <= 40) {
            speedStatus = 'excessive speeding';
        }
        else {
            speedStatus = 'reckless driving';
        }
    
        return speedStatus;
    }
}

roadRadar(200, 'motorway');