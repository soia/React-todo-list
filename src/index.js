import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const isLoggedIn = false;
    const LoginBox = <span>Log in please</span>

    return (
        <div>
            {isLoggedIn ? null : LoginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));