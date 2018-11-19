import React from 'react';
import { Button } from 'reactstrap';
import Avatar from 'react-avatar';
import './style.css';

const PostHeader = props => (
  <div className="d-flex flex-row mb-3">
    <Avatar
      className="mr-3 ml-2"
      src="https://img1.ak.crunchyroll.com/i/spire3/a047ff8c092a5bb8c77e21cdc08aa8651331555090_large.jpg"
      size="40"
      round={true}
    />
    <div className="mt-2">username</div>
    <Button className="mb-1" color="link">
      Follow
    </Button>
  </div>
);

export default PostHeader;
