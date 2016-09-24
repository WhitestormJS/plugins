import React, {PropTypes} from 'react';
import PluginCard from '../PluginCard';

const style = {
  maxWidth: 850,
  margin: '0 auto',
  marginTop: 70,
  padding: '20px 100px',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  background: 'url(images/binding_dark.png)'
};

function PluginList({plugins}) {
  return (
    <div style={style}>
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
