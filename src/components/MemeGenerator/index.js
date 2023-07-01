import {Component} from 'react'
import {each} from 'immer/dist/internal'
import produce from 'immer'
import {BgContainer, ChildContainer, Input, Form} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {url: '', topText: '', bottomText: '', fontSize: 8}

  changeUrl = event => {
    const {value} = event.target
    console.log(value)
    this.setState({
      url: value,
    })
  }

  changeTopText = event => {
    const {value} = event.target
    console.log(value)
    this.setState({
      topText: value,
    })
  }

  changeBottomText = event => {
    const {value} = event.target
    console.log(value)
    this.setState({
      bottomText: value,
    })
  }

  changeFontSize = event => {
    const {value} = event.target
    console.log(value)
    this.setState({
      fontSize: value,
    })
  }

  render() {
    const {url, topText, bottomText, fontSize} = this.state
    return (
      <BgContainer className="">
        {/* first div */}
        <ChildContainer>
          <Form>
            <h1>Meme Generator</h1>
            <label htmlFor="urlInput">Image Url</label>
            <Input onChange={this.changeUrl} type="url" id="urlInput" />
            <label htmlFor="topText">Top Text</label>
            <Input onChange={this.changeTopText} type="text" id="topText" />
            <label htmlFor="bottomText">Bottom Text</label>
            <Input
              onChange={this.changeBottomText}
              type="text"
              id="bottomText"
            />
            <label htmlFor="fontSize">Font Size</label>
            <select onChange={this.changeFontSize} id="fontSize">
              {fontSizesOptionsList.map(eachItem => (
                <option>{eachItem.displayText}</option>
              ))}
            </select>
            <button>Generate</button>
          </Form>
        </ChildContainer>
        {/* second div */}
        <ChildContainer>
          <p>upcomming</p>
        </ChildContainer>
        {/* second div ended */}
      </BgContainer>
    )
  }
}

export default MemeGenerator
