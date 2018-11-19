import React from 'react';

const FULL_HEART_URL =
  'https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/hearted.png';
const HEART_URL =
  'https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/heart.png';
const ActionBar = props => {
  // Props ទទួលមកពី Post Component
  const { isLiked, likePost } = props;
  return (
    <div className="d-flex flex-row justify-content-between mt-3 mb-3">
      <div>
        <img
          className="mr-3 ml-3"
          src={isLiked ? FULL_HEART_URL : HEART_URL}
          height="25"
          width="27"
          alt="Heart"
          onClick={() => {
            likePost();
          }}
        />
        <img
          className="mr-3"
          src="https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/comment.png"
          height="25"
          width="25"
          alt="Heart"
        />
        <img
          className="mr-3"
          src="https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/share.png"
          height="25"
          width="23"
          alt="Heart"
        />
      </div>
      <div>
        <img
          className="mr-3"
          src="https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/save.png"
          height="25"
          width="23"
          alt="Heart"
        />
      </div>
    </div>
  );
};

export default ActionBar;
