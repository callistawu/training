import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from 'react-emotion';

import './styles.css';

class Article extends React.Component<any> {
  render() {
    if (this.props.nah) {
      return <h1>nah</h1>;
    }

    return (
      <article
        className={css`
          font-family: 'Comic Sans MS';
        `}
      >
        <p>{this.props.grafOne.text}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magnam
          alias error dolores culpa laborum, laudantium rem repellat, voluptatem
          quis, fugiat excepturi iure nulla at nemo consequatur neque! Harum,
          magnam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          aliquam dignissimos aspernatur deserunt. Praesentium odio voluptate ab
          in placeat saepe perferendis error at minima, labore dolorem,
          necessitatibus iste architecto similique!
        </p>
      </article>
    );
  }
}

ReactDOM.render(
  <Article grafOne={{ text: 'this is some text' }} />,
  document.getElementById('root')
);
