import React from 'react';
import { Container, Row, Column } from "../grid/grid.js";
import { Card, Button } from "../ui/ui.js";

export const Main = React.createClass({
  render() {
    // access component state and dispatch like this:
    // this.props.state
    // this.props.dispatch
    return (
        <Container>
          <Row>
            <Column md={"4"} sm={"6"}>
              <Card label="ANNOUNCEMENTS" title="Introducing Udacity Talks"
                    summary="Live Q&As with Silicon Valley’s most influential voices"
                    btnLink='http://blog.udacity.com/2016/04/introducing-udacity-talks-live-qas-with-silicon-valleys-most-influential-voices.html'
                    isExternal={true}
                    btnText="Read More"/>
            </Column>
            <Column md={"4"} sm={"6"}>
              <Card label="COURSES" title="New Course Launch!"
                  summary="Taking The Mystery Out Of Technical Interviews"
                  btnLink='http://blog.udacity.com/2016/04/taking-the-mystery-out-of-technical-interviews.html' isExternal={true}
                  btnText="Read More"/>
            </Column>
            <Column md={"4"} sm={"6"}>
              <Card label="VIRTUAL REALITY" title="A Virtual Reality Career"
                  summary="Virtual Reality is one of the most exciting new areas of technology."
                  btnLink='http://blog.udacity.com/2016/04/a-virtual-reality-career-laying-the-foundations.html' isExternal={true}
                  btnText="Read More"/>
            </Column>
          </Row>
        </Container>
    )
  }
});
