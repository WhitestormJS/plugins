import React, {Component} from 'react';
import {get} from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import Header from '../Header';
import PluginList from '../PluginList';
import {uiDark2$} from '../../styles/colors';

document.body.style.background = uiDark2$;

class App extends Component {
  state = {
    isContentLoaded: true,
    plugins: [
    ],
    keywords: [
      'whs-component',
      'whs-plugin'
    ],
    searchValue: ''
  };

  componentDidMount() {
     get('https://api.npms.io/v2/search?q=keywords:whs-component,whs-plugin')
       .then(({data}) => {
         this.setState({
           plugins: data.results
            .map(({package: {name, links: {npm: link}, description, keywords: tags}}) => ({
              name,
              link,
              description,
              tags,
            }))
         });
       })
       .catch((err) => {
          // TODO: fill me
       });
  }

  handleSearch(value) {
    this.setState({searchValue: value.target.value});

    get(`https://api.npms.io/v2/search?q=${value.target.value}+keywords:${this.state.keywords.join(',')}`)
     .then(({data}) => {
        this.setState({
          plugins: data.results
            .map(({package: {name, links: {npm: link}, description, keywords: tags}}) => ({
              name,
              link,
              description,
              tags,
            }))
       });
     })
     .catch((err) => {
        // TODO: fill me
     });
  }

  changeType(type) {
    const _type = type;

    return () => {
      this.setState({keywords: _type});

      get(`https://api.npms.io/v2/search?q=${this.state.searchValue}+keywords:${_type.join(',')}`)
       .then(({data}) => {
         this.setState({
           plugins: data.results
            .map(({package: {name, links: {npm: link}, description, keywords: tags}}) => ({
              name,
              link,
              description,
              tags,
            }))
         });
       })
       .catch((err) => {
          // TODO: fill me
       });
     }
  }

  render() {
    return (
      <section>
        <Header handleSearch={this.handleSearch.bind(this)} changeType={this.changeType.bind(this)} />
        {this.state.isContentLoaded
          ? (
            <PluginList plugins={this.state.plugins} handleTags={this.changeType.bind(this)} />
          )
          : (
            <CircularProgress size={2} />
          )}
      </section>
    ); // handleSearch={this.handleSearchFunc}
  }
}

export {
  App as default,
};
