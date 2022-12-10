import React, { Component } from 'react';
import { MaterialEditor } from './MaterialEditor';
import { addMaterial } from 'servise/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <div>Loading...</div>}
        <MaterialEditor onSubmit={this.addMaterial} />
      </>
    );
  }
}
