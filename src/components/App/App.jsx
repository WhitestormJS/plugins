import React, {Component} from 'react';
// import {get} from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import Header from '../Header';
import PluginList from '../PluginList';
import {uiDark2$} from '../../styles/colors';

document.body.style.background = uiDark2$;

class App extends Component {
  state = {
    isContentLoaded: true,
    plugins: [
      {
        name: 'foo',
        description: 'bar',
        tags: ['baz', 'qux'],
      },
      {
        name: 'foo2',
        description: 'bar',
        tags: ['baz', 'qux'],
      },
      {
        name: 'foo3',
        description: 'bar',
        tags: ['baz', 'qux'],
      },
    ],
  };

  componentDidMount() {
    // get('https://api.npms.io/v2/search?q=whs+plugin')
    //   .then(({results}) => {
    //     this.setState({
    //       plugins: results
    //         .map(({module: {name, description, keywords: tags}}) => ({
    //           name,
    //           description,
    //           tags,
    //         })),
    //     });
    //   })
    //   .catch((err) => {
    //     // TODO: fill me
    //   });
  }

  render() {
    return (
      <section>
        <Header />
        {this.state.isContentLoaded
          ? (
            <PluginList plugins={this.state.plugins} />
          )
          : (
            <CircularProgress size={2} />
          )}
      </section>
    );
  }
}

export {
  App as default,
};
