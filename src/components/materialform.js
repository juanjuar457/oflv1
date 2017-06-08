import React from 'react';
import { connect } from 'react-redux';

import {addMaterial} from '../actions/index';

class MaterialForm extends React.Component {
    constructor(props){
        super(props);

    }

    addMaterial() {
        var material = {
            vendor: this.refs.vendor.value,
            lotnumber: this.refs.lotnumber.value,
            units: this.refs.units.value,
            quantity: this.refs.quantity.value
        };
        this.props.dispatch(addMaterial(material));
        this.clearForm();
    }

    clearForm() {
        console.log(this.refs.vendor.value);
        this.refs.vendor.value = "";
        this.refs.lotnumber.value = "";
        this.refs.units.value = "";
        this.refs.quantity.value = "";

    }

    render() {
        var materials = this.props.materials.map((material)=> {
            return (
                <div>
                    {material.vendor}
                </div>)
        });
            return (
                <div id="ofl-header">
                    <h1></h1>
                        <div id="inputlist">
                            <input id="vendor" type="text" ref="vendor"  placeholder="placeholder" />
                            <input id="lotnumber" type="text" ref="lotnumber" placeholder="placeholder" />
                            <input id="units" type="text" ref="units" placeholder="placeholder" />
                            <input id="quantity" type="text" ref="quantity" placeholder="placeholder" />
                            <button type="button" onClick={this.addMaterial.bind(this)}>add</button>
                            <button type="button" onClick={this.clearForm.bind(this)} >clear</button>
                        </div>
                    <div>
                        {materials}
                    </div>
                    <div id="oflfooter">
                        <footer>footer placeholder</footer>
                    </div>
                </div>
            );
    }
}
MaterialForm.defaultProps = {
    title: 'Order For Later'
}

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialForm);




