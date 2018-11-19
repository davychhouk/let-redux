import React from 'react';
import { Button } from 'reactstrap';
import Avatar from 'react-avatar';
import './style.css';

const PostHeader = props => {
  const { avatarUrl, username } = props;
  return (
    <div className="d-flex flex-row mb-3">
      <Avatar className="mr-3 ml-2" src={avatarUrl} size="40" round={true} />
      <div className="mt-2">{username}</div>
      <Button className="mb-1" color="link">
        Follow
      </Button>
    </div>
  );
};

export default PostHeader;
