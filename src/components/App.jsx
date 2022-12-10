import React, { Component } from 'react';
import { MaterialEditor } from './MaterialEditor/MaterialEditor';
import { addMaterial, getMaterial } from '../servise/api';
import { Material } from './Materials/Materials';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const initMaterials = await getMaterial();
      this.setState({ materials: initMaterials });
    } catch (error) {}
  }

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
    const { isLoading, materials } = this.state;
    return (
      <>
        {isLoading && <div>Loading...</div>}
        <MaterialEditor onSubmit={this.addMaterial} />
        <Material items={materials} />
      </>
    );
  }
}
