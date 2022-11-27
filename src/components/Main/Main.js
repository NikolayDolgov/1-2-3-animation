import React from 'react';
import Card from '../Card/Card';
import Container from '../Container/Container';
import AnimBlock from '../AnimBlock/AnimBlock';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scroll: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY,
    });
  }

  render() {
    return <div className='main'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Container scroll={this.state.scroll} />
      <AnimBlock />
    </div>
  }
}

export default Main;