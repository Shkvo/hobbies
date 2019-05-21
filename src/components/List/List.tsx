import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './List.scss';
import { ConnectedComponentClass } from 'react-redux';

const cnList = cn('List');

type ListProps = {
  Component: FunctionComponent<any> | ConnectedComponentClass<any, any>;
  items: any[];
};

const List: FunctionComponent<ListProps> = ({ Component, items }) => {
  return (
    <div className={cnList()}>
      {
        items.map(data => (
          <Component
            key={data.id}
            data={data}
          />
        ))
      }
    </div>
  );
};

export default List;
