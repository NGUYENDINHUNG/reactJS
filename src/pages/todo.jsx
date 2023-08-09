import React from 'react';

import Add from 'components/todo/add';
import List from 'components/todo/list';
import Action from 'components/todo/action';

function TodoPage(props) {
  return (
    <div className='.bg-secondary.bg-gradient'>
      <Add />
      <List />
      <Action />
    </div>
  );
}

export default TodoPage;