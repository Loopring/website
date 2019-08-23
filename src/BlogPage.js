import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import './BlogPage.scss';
import Header from './Header.js';
import Footer from './Sections/Footer.js';

// const API = './markdown/test.md';
const API =
  'https://raw.githubusercontent.com/Loopring/protocols/master/packages/loopring_v3/DESIGN.md';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '...',
      markdownContent: 'loading...',
    };
  }

  componentDidMount() {
    fetch(API)
        .then((response) => {
          return response.text();
        })
        .then((text) =>
          ReactDOM.render(
              <ReactMarkdown source={text} />,
              document.getElementById('markdown')
          )
        );
  }

  render() {
    return (
      <div>
        <Header />
        <section className="section section-blog-hero is-medium has-background-grey has-text-black">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="content markdown" id="markdown" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BlogPage;
