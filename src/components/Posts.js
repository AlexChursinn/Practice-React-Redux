import { connect } from "react-redux";
import Post from "./Post";

/* И теперь в компоненте есть syncPosts c которым мы можем взаимодейтсвовать */
const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

/* Преобразовывает весь state в props */
const mapStateToProps = (state) => {
  return {
    /* Даём название ключа сами и потом что нужно ей приствоить из state*/
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);

/* Изначально компонента тупая с помощью функции высшего пордяка connect мы передаем Posts какие-то данные и сама функция connect вернет нам другую функцию 

compose принимает в себя mapStateToProps и 
*/
