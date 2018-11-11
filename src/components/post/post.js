import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import PostHeader from '../header/post-header';
import ActionBar from '../action-bar/action-bar';
import PostDetail from '../detail/post-detail';

const Post = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <PostHeader />
          <CardImg
            top
            width="100%"
            src="https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/luka.png"
            alt="Luka Modric holds his uefa awards."
          />
          <ActionBar />
          <PostDetail />
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
