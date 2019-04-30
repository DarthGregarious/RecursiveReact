import React from 'react';
import * as _ from 'lodash';

class TreeNode extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { selection: null };
  }

  getChildTree = () => {
      const selectedNode = _.find(this.props.data.options, (o) => o.value === this.state.selection);
      console.log("selected node", selectedNode);
      return selectedNode || {};
  }

  dropdownChanged = (e) => {
    this.setState({ selection: e.target.value });
    console.log(e);
  }
  
  render() {
    return (
      <div className="node">
        TreeNode
        { this.props.data.optionsType === 'dropdown' && 
          <select onChange={e => this.dropdownChanged(e)}>
            <option>-- No Selection --</option>
            { this.props.data.options.map(o => <option value={o.value}>{o.display}</option>) }
          </select> 
        }
        { this.state.selection && <TreeNode data={this.getChildTree()} /> }
      </div>
    );
  }
}

export default TreeNode;
