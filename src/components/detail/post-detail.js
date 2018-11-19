import React from 'react';
import { CardText } from 'reactstrap';

const PostDetail = props => {
  const { username, description, likesCount } = props;
  return (
    <div className="ml-3">
      <div className="font-weight-bold mr-2 mb-2">{likesCount} likes</div>
      <CardText>
        <span className="font-weight-bold mr-2">{username}</span>
        {description}
      </CardText>
      <div className="text-muted">Load more comments</div>
    </div>
  );
};

export default PostDetail;
