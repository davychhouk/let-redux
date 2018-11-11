import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import PostHeader from '../header/post-header';
import PostImage from '../image/postImage';

const Post = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <PostHeader />
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
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
