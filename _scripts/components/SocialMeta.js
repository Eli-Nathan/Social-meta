import React, {Component} from 'react';

class SocialMeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTrue: false,
    }
  }

  componentDidMount() {
    let _this = this
    let links = document.querySelector(".generate-link")

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <input type="checkbox" id="test1" name="radio-group" />
          <label htmlFor="test1" className="mr-3">Facebook</label>

          <input type="checkbox" id="test2" name="radio-group" />
          <label htmlFor="test2">Twitter</label>
        </div>
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="mb-4 border border-info rounded p-2 p-sm-4">
            <h5>Your data</h5>
            <div className="form-group d-block">
              <label htmlFor="title" className="d-block mb-0">Title</label>
              <input type="text" name="Name" id="title" className="d-block form-control" />
            </div>
            <div className="form-group d-block">
              <label htmlFor="description" className="d-block mb-0">Description</label>
              <textarea name="description" id="description" className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group d-block">
              <label htmlFor="image" className="d-block mb-0">Image URL</label>
              <input type="text" name="image" id="image" className="d-block form-control" />
            </div>
            <div className="form-group d-block">
              <label htmlFor="url" className="d-block mb-0">Page URL</label>
              <input type="text" name="image" id="url" className="d-block form-control" />
            </div>
          </div>
        </div>
        <div className={"generate-link " + (this.state.inputTrue ? 'd-block' : 'd-none')}>
          <div className="form-group d-block">
            <a href="#" id="generate" className="btn btn-success">Generate</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMeta
