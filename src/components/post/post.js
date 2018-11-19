import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg } from 'reactstrap';
import PostHeader from '../header/post-header';
import ActionBar from '../action-bar/action-bar';
import PostDetail from '../detail/post-detail';

const Post = props => {
  const { postData } = props;
  const {
    avatarUrl,
    username,
    imgUrl,
    descriptions,
    isLiked,
    likesCount
  } = postData;
  return (
    <div>
      <Card>
        <CardBody>
          <PostHeader avatarUrl={avatarUrl} username={username} />
          <CardImg
            top
            width="100%"
            src={imgUrl}
            alt="Luka Modric holds his uefa awards."
          />
          <ActionBar isLiked={isLiked} />
          <PostDetail
            username={username}
            description={descriptions}
            likesCount={likesCount}
          />
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  postData: state.post
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
