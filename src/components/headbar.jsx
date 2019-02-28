import React, { Component } from 'react';

class HeadBar extends Component {

  render() {
    return(

      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Kaitlyn, Molly, and Timmy's Favorite Shows</a>
          {/* can add link back to homepage if decide to create links from show photos to their descriptions */}
            <span class="navbar-text">
              Last updated in 2019
            </span>
        </nav>

      </div>


  )
  }
}

export default HeadBar;
