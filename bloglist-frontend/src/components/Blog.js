import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      blog: this.props.blog
      
    }
    // console.log(this.state.blog)
}

render() {
  const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
  const showWhenVisible = { display: this.state.visible ? '' : 'none' }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const blogStyle2 = {
    paddingTop: 10,
    paddingLeft: 4,
    border: 'solid',
    borderWidth: 3,
    marginBottom: 5
  }
  // const user = this.state.blog
  // console.log(user)

  const textButton = this.state.blog.author + ': ' + this.state.blog.title
  return (
  <div>
    <div className="notVisible" style={hideWhenVisible}>
      <button className="alku" style={blogStyle} onClick={e => this.setState({ visible: true })}>{textButton}</button>
    </div>
    <div className="visible" style={showWhenVisible}>
      <button className="clicked" style={blogStyle}  onClick={e => this.setState({ visible: false })}>{textButton}</button>
        <div className="clickedText" style={blogStyle2}>
           <br/><a href={this.state.blog.url}>{this.state.blog.url}</a>

           {/* <form name={this.state.blog} onSubmit={this.props.likeBlog}> */}
              <p>{this.props.blog.likes} likes <button onClick={this.props.likeBlog}>like</button></p>
           {/* </form> */}

           <p>blog added by {this.state.blog.user.name}</p>
           <form name={this.state.blog._id} onSubmit={this.props.deleteBlog}>
             <button>delete</button>
           </form>
        </div>
    </div>
  </div>
  )}
}
export default Blog