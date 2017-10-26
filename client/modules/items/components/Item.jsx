import React from 'react';
import {Row, Col, Panel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';

const Item = ({content}) =>(
  <Col xs ={4}>
    <Panel>
      <Row>
        <Col xs={10}>
          <h2> Things to do </h2>
        </Col>
        <Col xs={2}>
          <a href="/edit"><Glyphicon glyph="pencil"></Glyphicon></a>
        </Col>
      </Row>
      <p> Some things need to be done </p>
    </Panel>
  </Col>
);
export default Item;
