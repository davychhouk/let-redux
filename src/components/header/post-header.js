import React from 'react';
import { Button } from 'reactstrap';
import Avatar from 'react-avatar';
import './style.css';

const PostHeader = props => (
  <div className="d-flex flex-row mb-3">
    <Avatar
      className="mr-3 ml-2"
      src="https://instagram.fbkk22-2.fna.fbcdn.net/vp/f0e74c0feec46eeed345293004eb463d/5C67593C/t51.2885-19/s320x320/43984563_317656382393480_738478751343443968_n.jpg"
      size="40"
      round={true}
    />
    <div className="mt-2">lukamodric10 .</div>
    <Button className="mb-1" color="link">
      Follow
    </Button>
  </div>
);

export default PostHeader;
