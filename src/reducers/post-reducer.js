// យក Action Type ដែលបានសរសេរក្នុង post-action ជៀសវាងសរសេរខុស
import { LIKE_POST } from '../actions/post-action';

// Boilerplate របស់ reducer
const INITIAL_STATE = {
  userId: '0001',
  avatarUrl:
    'https://instagram.fbkk22-2.fna.fbcdn.net/vp/f0e74c0feec46eeed345293004eb463d/5C67593C/t51.2885-19/s320x320/43984563_317656382393480_738478751343443968_n.jpg',
  username: 'lukamodric10',
  imgUrl:
    'https://raw.githubusercontent.com/davychhouk/let-redux/master/src/assets/images/luka.png',
  likesCount: 101,
  descriptions:
    'What a year! Thanks Real Madrid, Croatia National team and everybody who helped me to achieve this amazing award 🙏❤ #UEFAawards',
  isLiked: false
};

const likePost = state => {
  return {
    ...state,
    likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount + 1,
    isLiked: !state.isLiked
  };
};

export default (state: Object = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case LIKE_POST:
      return likePost(state);
    default:
  }
  return state;
};
