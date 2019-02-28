import React, { Component } from 'react';


class Item extends Component {
 state = {
   imageUrl: "https://is3-ssl.mzstatic.com/image/thumb/Video1/v4/cd/2d/23/cd2d23b4-c236-f94d-4a4f-d90030866d6f/mzl.vytmeykc.lsr/268x0w.png"
 }

  render() {
    return(
      <div>
        <img src={this.state.imageUrl} alt=""></img>
        <h3> The Office </h3>
        <button className="btn btn-secondary btn-sm">Favorite</button>

      </div>

     )

  }
}

export default Item;
