import React, { Component } from "react";
import TableRow from "./TableRow";

export default class TableData extends Component {
  constructor(props) {
    super(props);
  }
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => {
      return (
        <TableRow
          key={key}
          id={value.id}
          name={value.name}
          tel={value.tel}
          permission={value.permission}
        />
      );
    });
  
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}
