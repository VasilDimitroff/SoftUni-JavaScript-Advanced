class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if (articleModel.toLowerCase() != 'picture' 
        && articleModel.toLowerCase() != 'photo'
         && articleModel.toLowerCase() != 'item') {
            throw new Error('This article model is not included in this gallery!');
        }

        if (this.listOfArticles.some(x => x.articleName === articleName)) {
            let currentArticle = this.listOfArticles.find(x => x.articleName === articleName);

            if (currentArticle.articleModel === articleModel.toLowerCase()) {
                currentArticle.quantity += quantity;
            }
        }

        else{
            let article = {
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: quantity,
            };
    
            this.listOfArticles.push(article);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
       
    }

    inviteGuest (guestName, personality){
        if (this.guests.some(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        else {

            let guestPoints = 0;

            if (personality === 'Vip') {
                guestPoints = 500;
            }
            else if(personality === 'Middle'){
                guestPoints = 250;
            }
            else{
                guestPoints = 50;
            }

            let guest = {
                guestName: guestName,
                points: guestPoints,
                purchaseArticle: 0,
            }

            this.guests.push(guest);

            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle (articleModel, articleName, guestName){
        if (!this.listOfArticles.some(a => a.articleName === articleName)
        || (articleModel.toLowerCase() != 'picture' 
        && articleModel.toLowerCase() != 'photo'
         && articleModel.toLowerCase() != 'item')){
            throw new Error('This article is not found.');
        }

        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName);

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!this.guests.some(g => g.guestName === guestName)) {
            return `This guest is not invited.`;
        }

        let currentGuest = this.guests.find(x => x.guestName === guestName);

        let targetPoints = -1;

        if (currentArticle.articleModel === 'picture') {
            targetPoints = 200;
        }

        else if (currentArticle.articleModel === 'photo'){
            targetPoints = 50;
        }

        else if (currentArticle.articleModel === 'item'){
            targetPoints = 250;
        }

        if (currentGuest.points < targetPoints) {
            return `You need to more points to purchase the article.`;
        }
        else {
            currentGuest.points -= targetPoints;
            currentArticle.quantity -= 1;
            currentGuest.purchaseArticle += 1;

            return `${guestName} successfully purchased the article worth ${targetPoints} points.`
        }
    }

    showGalleryInfo (criteria){

        let result = '';
        if (criteria === 'article') {

            result += 'Articles information:\n';

            for (let index = 0; index < this.listOfArticles.length; index++) {
                const article = this.listOfArticles[index];
                result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            }       
            
            
        }
        else if (criteria == 'guest') {
            result += 'Guests information:\n';

            for (let index = 0; index < this.guests.length; index++) {
                const guest = this.guests[index];
                result += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }   
        }

        return result.trimEnd();
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
