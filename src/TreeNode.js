import React from 'react';

class TreeNode extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="node">
        <p>{this.props.data.name}</p>
          { this.props.data.nodes && this.props.data.nodes.map(b => <TreeNode data={b} />) }
      </div>
    );
  }
}

export default TreeNode;
