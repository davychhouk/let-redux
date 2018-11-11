import React from 'react';
import { Card, CardText, CardBody, CardLink, CardImg } from 'reactstrap';
import PostHeader from '../header/post-header';
import ActionBar from '../action-bar/action-bar';

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
            alt="Card image cap"
          />
          <ActionBar />
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
