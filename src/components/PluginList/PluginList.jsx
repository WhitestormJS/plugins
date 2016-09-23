import React, {Component} from 'react';
import PluginCard from '../PluginCard';

export default class PluginList extends Component {
  render() {
    return (
      <div>
        <PluginCard name="whs-component-terrain" />
        <PluginCard name="whs-component-skybox" />
      </div>
    );
  }
};
