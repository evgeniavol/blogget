import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';

export const PostAuthor = ({authorData}) => (
  <a className={style.linkAuthor} href={authorData.link}>
    {authorData.nickName}
  </a>
);

PostAuthor.propTypes = {
  authorData: PropTypes.object,
};
