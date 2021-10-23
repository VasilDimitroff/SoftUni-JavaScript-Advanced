class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    get likes(){
        if(this._likes.length === 0){
            return `${this.title} has 0 likes`;
        }
        else if(this.likes.length === 1){
            return `${this._likes[0]} likes this story!`;
        }
        else{
          return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`  
        }
    }
    set likes(value){
        this._likes = value;
    }

    like(username){
        if (this.likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (this.creator === username) {
            throw new Error('You can\'t like your own story!');
        }
        this.likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike (username){
        if (!this.likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }

        const index = this.likes.indexOf(username);

        if (index > -1) {
            this.likes.splice(index, 1);
        }
        
        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){

    }

    toString(sortingType){

    }
}

let art = new Story("My Story", "Anny");

