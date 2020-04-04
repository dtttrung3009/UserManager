import React, { Component } from "react";

export default class TableRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) return "Admin";
    if (this.props.permission === 2) return "Moderator";
    return "Normal";
  };
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua">
              <i className="fa fa-edit"></i> Sửa
            </div>
            <div className="btn btn-danger xoa">
              <i className="fa fa-trash"></i> Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
