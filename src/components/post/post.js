import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg } from 'reactstrap';
import PostHeader from '../header/post-header';
import ActionBar from '../action-bar/action-bar';
import PostDetail from '../detail/post-detail';

import { likePostAction } from '../../actions/post-action';

const Post = props => {
  const { postData, likePost } = props;
  const {
    avatarUrl,
    username,
    imgUrl,
    descriptions,
    isLiked,
    likesCount
  } = postData;
  return (
    <Card>
      <CardBody>
        <PostHeader avatarUrl={avatarUrl} username={username} />
        <CardImg
          top
          width="100%"
          src={imgUrl}
          alt="Luka Modric holds his uefa awards."
        />
        <ActionBar isLiked={isLiked} likePost={likePost} />
        <PostDetail
          username={username}
          description={descriptions}
          likesCount={likesCount}
        />
      </CardBody>
    </Card>
  );
};

const mapStateToProps = state => ({
  postData: state.post
});

const mapDispatchToProps = dispatch => ({
  likePost: () => {
    dispatch(likePostAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
