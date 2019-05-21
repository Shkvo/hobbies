import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './List.scss';

const cnList = cn('List');

type ListProps = {
  Component: any,
  items: any[]
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
}

export default List;
