import { Card } from '@patternfly/react-core/dist/esm/components/Card/Card';
import { CardBody } from '@patternfly/react-core/dist/esm/components/Card/CardBody';
import { List } from 'react-content-loader';
import React from 'react';
const Loading = () => (
  <Card>
    <CardBody>
      <List />
    </CardBody>
  </Card>
);

export default Loading;
