import React from 'react'

class ComponentLifeCycleContent extends React.Component {
  //executed before rendering
  componentWillMount() {
    console.log('Component Will Mount');
  }

  //executed after first render only on client side
  componentDidMount() {
    console.log('Component Did Mount');
  }

  //invoked as soon as the props are updated before another render is called
  componentWillReceiveProps(newProps) {
    console.log('Component will receive new props');
  }

  //should return true or false. Determine if component will be updated or not
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  //called just before rendering
  componentWillUpdate(nextProps, nextState) {
    console.log('component will update');
  }

  //called just after rendering
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  //called after the component is unmounted from the dom
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

export default ComponentLifeCycleContent;
