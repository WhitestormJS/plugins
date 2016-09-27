import React, {PropTypes} from 'react';
import PluginCard from '../PluginCard';

const style = {
  maxWidth: 850,
  margin: '0 auto',
  marginTop: 70,
  padding: 20
};

function PluginList({plugins, handleTags}) {
  return (
    <div style={style}>
      {plugins.map(({name, link, description, tags}, index) => (
        <PluginCard
          key={index}
          name={name}
          link={link}
          description={description}
          tags={tags}
          handleTags={handleTags}
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
