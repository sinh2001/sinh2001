import React from "react";
import ReactDOM from "react-dom";
import "create-react-class";
import UserTable from "./User";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      headers: this.props.headers
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    const user = [];
    for (let [name, value] of data) {
      console.log(name + " " + value);
      user.push(value);
    }
    this.setState({
      users: [...this.state.users, user]
    });
    e.target.reset();
    console.log(e.target);
  };

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit} id="myForm">
        <div>
          <label htmlFor="username">Họ Và Tên: &nbsp;</label>

          <input id="username" name="username" type="text" required />
        </div>
        <br />
        <div>
          <label htmlFor="birthdate">Tuổi: &nbsp;</label>
          <input
            id="birthdate"
            name="birthdate"
            type="number"
            required
            min="0"
          />
        </div>
        <div>
          {" "}
          <p>
            giới tính: &nbsp;
            <select name="gender">
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </p>
        </div>

        <button type="submit">Thêm Mới</button>
      </form>
    );
  }
  render() {
    return (
      <div>
        {this.renderForm()}
        <UserTable
          headers={this.state.headers}
          initialData={this.state.users}
        />
      </div>
    );
  }
}

var headers = ["Tên", "Tuổi", "Giới tính", "thao tác"];
var data = [
  ["sinh", 20, "nam"],
  ["truonginh", 20, "nam"],
  ["buitruongsinh", 20, "nam"]
];

ReactDOM.render(
  <div>
    <MyForm data={data} headers={headers} />
  </div>,
  document.getElementById("root")
);
