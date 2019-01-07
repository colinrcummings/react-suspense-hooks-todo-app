import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';

import { TodoProvider } from './components/TodoContext';
import IsLoading from './components/IsLoading';

const TodoListPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoListPage' */ './components/TodoListPage')
);
const TodoDetailsPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoDetailsPage' */ './components/TodoDetailsPage')
);
const TodoCreatePage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoCreatePage' */ './components/TodoCreatePage')
);

function App() {
  return (
    <Suspense maxDuration={500} fallback={<IsLoading />}>
      <TodoProvider>
        <Container>
          <Router>
            <TodoListPage path={`${process.env.PUBLIC_URL}/`} />
            <TodoDetailsPage path={`${process.env.PUBLIC_URL}/details/:id`} />
            <TodoCreatePage path={`${process.env.PUBLIC_URL}/create`} />
          </Router>
        </Container>
      </TodoProvider>
    </Suspense>
  );
}

export default App;
