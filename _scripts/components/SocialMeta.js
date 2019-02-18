import React, {Component} from 'react';

class SocialMeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTrue: false,
      facebookChecked: false,
      twitterChecked: false,
      generalChecked: false,
      showResults: false,
      output: ""
    }
  }

  componentDidMount() {
    let _this = this
    let inputs = document.querySelectorAll("input:not(.networkChoice)")
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function() {
        if(_this.state.facebookChecked || _this.state.twitterChecked) {
          _this.setState({inputTrue: true})
        }
      })
    }
  }

  checkFacebook(e) {
    this.setState({facebookChecked: !this.state.facebookChecked})
  }

  checkTwitter(e) {
    this.setState({twitterChecked: !this.state.twitterChecked})
  }

  checkGeneral(e) {
    this.setState({generalChecked: !this.state.generalChecked})
  }

  generateMeta(e) {
    let str = ""
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let image = document.getElementById("image").value
    let url = document.getElementById("url").value
    if(this.state.generalChecked) {
      str += '<!-- General meta tags --> \r\n'
      str += '<title>'+title+'</title> \r\n'
      str += '<meta name="description" content="'+description+'"> \r\n'
      str += '<link rel="canonical" href="'+url+'" /> \r\n'
      str += '<meta property="og:url" content="'+url+'"> \r\n'
      str += '<meta name="viewport" content="width=device-width,initial-scale=1"> \r\n'

    }
    if(this.state.facebookChecked) {
      this.state.generalChecked ? str += '\r\n' : str = ""
      str += '<!-- Facebook tags --> \r\n'
      str += '<meta property="og:title" content="'+title+'"> \r\n'
      str += '<meta property="og:description" content="'+description+'"> \r\n'
      str += '<meta property="og:image" content="'+image+'"> \r\n'
      str += '<meta property="og:url" content="'+url+'"> \r\n'

    }
    if(this.state.twitterChecked) {
      this.state.facebookChecked ? str += '\r\n' : str = ""
      str += '<!-- Twitter tags --> \r\n'
      str += '<meta property="twitter:title" content="'+title+'"> \r\n'
      str += '<meta property="twitter:description" content="'+description+'"> \r\n'
      str += '<meta property="twitter:image" content="'+image+'"> \r\n'
      str += '<meta property="twitter:url" content="'+url+'"> \r\n'
      str += '<meta name="twitter:card" content="summary_large_image"> \r\n'
      str += '<meta name="twitter:image:alt" content="'+title+'"> \r\n'
    }
    this.setState({output: str, showResults: true})
  }

  outputCode() {
    return this.state.output
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <input
            className="networkChoice"
            type="checkbox"
            id="facebook"
            name="radio-group"
            value={this.state.facebookChecked}
            checked={this.state.facebookChecked}
            onChange={this.checkFacebook.bind(this)}
          />
          <label htmlFor="facebook" className="mr-3">Facebook</label>

          <input
            className="networkChoice"
            type="checkbox"
            id="twitter"
            name="radio-group"
            value={this.state.twitterChecked}
            checked={this.state.twitterChecked}
            onChange={this.checkTwitter.bind(this)}
          />
          <label htmlFor="twitter" className="mr-3">Twitter</label>

          <input
            className="networkChoice"
            type="checkbox"
            id="general"
            name="radio-group"
            value={this.state.generalChecked}
            checked={this.state.generalChecked}
            onChange={this.checkGeneral.bind(this)}
          />
          <label htmlFor="general" className="mr-3">General</label>
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
        <div
          className={"col-sm-12 " + (this.state.showResults ? 'd-block' : 'd-none')}
          id="generatedCode"
        >
          <pre><code className="language-markup">{this.outputCode()}</code></pre>
        </div>
        <div
         className={"generate-link " + (this.state.inputTrue ? 'd-block' : 'd-none')}
        >
          <div className="form-group d-block">
            <a
              href="#generatedCode"
              id="generate"
              className="btn btn-success"
              onClick={this.generateMeta.bind(this)}
            >
              Generate
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMeta
