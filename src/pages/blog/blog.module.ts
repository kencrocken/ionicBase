import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { PostsComponent } from './posts-component/posts.component';
import { PostComponent } from './post-component/post.component';
import { FeaturedMedia } from './featured-media-component/featured-media.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    FeaturedMedia
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostsComponent,
    PostComponent,
    FeaturedMedia
  ],
  entryComponents:[
    PostsComponent,
    PostComponent,
    FeaturedMedia
  ]
})
export class BlogModule {}
