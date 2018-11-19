import React from 'react';
import { connect } from 'react-redux';
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
            src="https://static.giantbomb.com/uploads/square_small/3/33873/1700999-naruto.png"
            alt="Luka Modric holds his uefa awards."
          />
          <ActionBar />
          <PostDetail />
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
