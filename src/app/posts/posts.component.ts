import { Component } from '@angular/core'
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent {
    author = '@raidentrance';
    title = 'Angular from scratch';
    disableNewPost = true;

    constructor() {
        setTimeout(() => { this.disableNewPost = false }, 2000);
    }

    getTitle() {
        return this.title;
    }
}