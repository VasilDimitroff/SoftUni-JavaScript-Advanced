function assemblyLine(){
    let car = {
        hasClima(obj){
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.ajustTemp = function(){
                if (obj.temp < obj.tempSettings) {
                   temp++;
                } else if (obj.temp > obj.tempSettings){
                    temp--;
                } else if (obj.temp === obj.tempSettings){
                    return;
                }
            };
        },
        hasAudio(obj){

            obj.currentTrack = {
                name: null,
                artist: null, 
            };   
            
            if (obj.currentTrack != null) {
                obj.nowPlaying() = function() {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                } 
            }    
        },
        hasParktronic: function(obj){
            obj.checkDistance = function(distance){
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25){
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5){
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };

    return car;
}

const assemblyLineResult = assemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLineResult.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);