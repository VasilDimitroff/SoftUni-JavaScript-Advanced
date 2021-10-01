function getArticleGenerator(articles) {
    articlesArray = articles.reverse();
    
    function showNext(){

        if (articlesArray.length < 1) {
            return;
        }
        let mainDivElement = document.querySelector('#content');

        let articleElement = document.createElement('article');
        articleElement.innerHTML = articlesArray.pop();

        mainDivElement.appendChild(articleElement);
    }
    return showNext
}
