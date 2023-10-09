import {Component} from 'react'
import './index.css'

class TextInput extends Component {
  state = {inputText: '', isActive: true}

  onChangeEvent = event => {
    this.setState({inputText: event.target.value})
  }

  onclickbtn = () => {
    const {inputText} = this.state
    if (inputText.length !== 0) {
      this.setState({isActive: false})
    }
  }

  editBtnClick = () => {
    this.setState({isActive: true})
  }

  render() {
    const {inputText, isActive} = this.state
    return (
      <div className="appContainer">
        <div className="textContaianer">
          <h1 className="heading">Editable Text Input</h1>
          {isActive ? (
            <div className="input-container">
              <input
                id="editInput"
                value={inputText}
                onChange={this.onChangeEvent}
                type="text"
                className="input"
              />
              <button
                type="button"
                className="saveBtn"
                onClick={this.onclickbtn}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="paratext">
              <p className="para">{inputText}</p>
              <button
                type="button"
                onClick={this.editBtnClick}
                className="saveBtn"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default TextInput
