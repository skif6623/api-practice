import React, { Component } from 'react';
import { MaterialEditor } from './MaterialEditor/MaterialEditor';
import { addMaterial, getMaterial } from '../servise/api';
import { Material } from './Materials/Materials';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const initMaterials = await getMaterial();
      this.setState({ materials: initMaterials, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: 'Помилка' });
    }
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

  delMaterial = id => {
    console.log(id);
  };

  render() {
    const { isLoading, materials } = this.state;
    return (
      <>
        {isLoading && <div>Loading...</div>}
        <MaterialEditor onSubmit={this.addMaterial} />
        <Material items={materials} onDelete={this.delMaterial} />
      </>
    );
  }
}
