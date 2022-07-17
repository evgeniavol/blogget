import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: {
      title: 'Title',
      link: '#post',
    },
    author: {
      nickName: 'Nickname',
      link: '#author',
    },
    ups: 24,
    date: '2022-07-17T00:45:00.000Z',
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
