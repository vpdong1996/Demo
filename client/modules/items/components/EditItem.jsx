import React from 'react';
import { Col, Panel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker'

const EditItem = ({content}) =>(
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
      <h1> Edit Item </h1>
      <form>
        <FormControl type="text" placeholder ="Name"/>
        <FormControl type ="textarea" placeholder="Description"/>
        <DateTimeField />
        <Button bsStyle="primary" type ="submit">Save Item</Button>
      </form>
    </Panel>
  </Col>
);
export default EditItem;
