import { data } from '../data/seed';
import { Article } from '../models/article.model';

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const singleObject = data[i];
            articles[i] = new Article(singleObject.title, singleObject.description, singleObject.author, singleObject.imageUrl)
        }
        return articles;
    }
}
