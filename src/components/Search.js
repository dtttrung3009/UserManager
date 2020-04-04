import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      tempValue:''
    }
  }
  hienThiNut = () => {
    if (this.props.hienThiForm) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.thayDoiTrangThai()}
        >
          Đóng lại
        </div>
      );
    }
    return (
      <div
        className="btn btn-block btn-outline-info"
        onClick={() => this.props.thayDoiTrangThai()}
      >
        Thêm mới
      </div>
    );
  };
  isChange = (event) => {
    this.setState({
      tempValue:event.target.value
    })
  };
  render() {
    return (
      <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input
              onChange={(event) => this.isChange(event)}
              type="text"
              className="form-control"
              placeholder="Nhập tên"
              style={{ width: 600 }}
            />
            <div
              className="btn btn-info"
              onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}
            >
              Tìm
            </div>
          </div>
        </div>
        {this.hienThiNut()}
        <hr />
      </div>
    );
  }
}
