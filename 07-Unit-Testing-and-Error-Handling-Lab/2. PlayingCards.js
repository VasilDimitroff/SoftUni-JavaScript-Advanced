function playingCards(face, suit){
    let card = {
         set face(face) {
             if(!card.validFace){
                throw new Error('Error');
             }
             card.face = face;  
         },

         set suit(suit){
            if(!card.validSuit){
                throw new Error('Error');
             } 
             else {
                let temp = '';

                if(suit == 'S'){
                    temp = '\u2660'
                }
                else if (suit = 'H') {
                    temp = '\u2665'
                }
                else if (suit = 'D') {
                    temp = '\u2666'
                }
                else if (suit == 'C'){
                    temp = '\u2663';
                }
                card.suit = temp;
             } 
             
         }
    };

    card.face = face;
    card.suit = suit;

    card.validFace = true;
    card.validSuit = true;

    let validFaces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    let validSuits = ['\u2660', '\u2665', '\u2666', '\u2663'];

    if(!validFaces.includes(face)){
        card.validFace = false;
        throw new Error('Error');  
    }

    if(!validSuits.includes(suit)){
        card.validSuit = false;
        throw new Error('Error'); 
    }

    function toString(){
        return `${card.face}${card.suit}`;
    }

    return card;
}

let result = playingCards('A', 'S');
result.toString();