import React from 'react';
import { CardText } from 'reactstrap';

const PostDetail = props => {
  return (
    <div className="ml-3">
      <div className="font-weight-bold mr-2 mb-2">2 likes</div>
      <CardText>
        <span className="font-weight-bold mr-2">username</span>
        Description goes here...
      </CardText>
      <div className="text-muted">Load more comments</div>
    </div>
  );
};

export default PostDetail;
