import React from "react";
import { connect } from "react-redux";
import { Alert } from "./Alert";
import { createPost, showAlert } from "./redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    /* Если в title ничего нет то return
		Чтобы не добавлялась пустая форма
		*/
    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost); /* Закидываем в AC новый пост */
    this.setState({ title: "" }); /* Очищаем ипут */
  };

  /* Универсальный обработчик который будет обрабытьвать все onChange 
	который будет работать по ключу name
	*/
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {/* Если пытаемся принять пустую форму */}
        {this.props.alert && <Alert text={this.props.alert} />}

        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title" /* Как ключ выступает для changeInputHandler */
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success mt-3" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

/* Тут мы говорим какие actions нужно спроецировать в эту компоненту */
const mapDispatchToProps = {
  createPost,
  showAlert,
};

/* Получаем text из store */
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

/* state тут не нужен поэтому пишем null

*/
