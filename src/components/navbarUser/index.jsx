import React from "react";

import { Ul, Li, Span, Nav, Slink } from "./styles";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Ul>
          <Slink to="/home">
            <Li>
              <Span>Home</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>01</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>02</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>03</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>04</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>05</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>06</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>07</Span>
            </Li>
          </Slink>
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
