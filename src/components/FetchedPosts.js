import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import Post from "./Post";
import { fetchPosts } from "./redux/actions";

export default () => {
  const dispatch = useDispatch();
  /* Обозначаем что нам нужно достать из store */
  const posts = useSelector((state) => {
    return state.posts.fetchedPosts;
  });
  /* Получаем loading */
  const loading = useSelector((state) => state.app.loading);

  /* Если loading trut вернем из бутстрапа подключенный loader */
  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
