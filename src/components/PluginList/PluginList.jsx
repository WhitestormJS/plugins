import React, {PropTypes} from 'react';
import PluginCard from '../PluginCard';

function PluginList({plugins}) {
  return (
    <div>
      {plugins.map(({name, description, tags}, index) => (
        <PluginCard
          key={index}
          name={name}
          description={description}
          tags={tags}
        />
      ))}
    </div>
  );
}

PluginList.propTypes = {
  plugins: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export {
  PluginList as default,
};
