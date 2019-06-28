import React from 'react';

// To be able to use scss modules and not need to deal with types
const styles = require('./App.scss');

export default class App extends React.Component {
    public render() {
        return <div className={styles.root}>My React Typescript App</div>;
    }
}
