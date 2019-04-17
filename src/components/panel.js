import React, {Component} from 'react';
import Post from './post';

export default class Panel extends Component {
  render() {
    return(
      <div className="app-Panel">
        <div className="app-Panel-container">
          {this.props.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              subtitle={post.virtuals.subtitle}
              readingTime={post.virtuals.readingTime}
              totalClapCount={post.virtuals.totalClapCount}
              image={post.virtuals.previewImage.imageId}
              autor={post.author.name}
              link={`https://medium.com/@${post.author.username}/${post.slug}-${post.medium_id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
