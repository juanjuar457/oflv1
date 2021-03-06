import React from 'react';
import { connect } from 'react-redux';
import OflModal from './oflmodal';
import {addMaterial} from '../actions/index';
import request from 'superagent';

class MaterialForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    addMaterial() {
        var material = {
            vendor: this.refs.vendor.value,
            quantity: this.refs.quantity.value,
            productName: this.refs.productName.value,
            catalogNumber: this.refs.catalogNumber.value,
            units: this.refs.units.value,
        };
        this.props.dispatch(addMaterial(material));
        this.clearForm();
    }

    clearForm() {
        this.refs.vendor.value = "";
        this.refs.quantity.value = "";
        this.refs.productName.value = "";
        this.refs.catalogNumber.value = "";
        this.refs.units.value = "";

    }

    sendData() {
        request.get('/')
            .end(function (err, res){
                console.log("ajax yo");  //oh snap it works..
            });
    }

    render() {
        var materials = this.props.materials.map((material, index, key)=> {
           // let key = {index}
            return (
                <div>
                    {material.vendor}
                    {material.quantity}
                    {material.productName}
                    {material.productName}
                    {material.productName}

                </div>)
        });
            return (
                <div id="ofl-header">
                    <h1>Order For Later</h1>
                        <div id="inputlist">
                            <input id="vendor" type="text" ref="vendor"  placeholder="Enter Vendor" />
                            <input id="quantity" type="text" ref="quantity" placeholder="Enter Quantity" />
                            <input id="productName" type="text" ref="productName" placeholder="Enter Product Name" />
                            <input id="catalogNumber" type="text" ref="catalogNumber" placeholder="Enter Catalog Numnber" />
                            <input id="units" type="text" ref="units" placeholder="Enter Units" />
                            <button type="button" onClick={this.addMaterial.bind(this)}>add</button>
                            <button type="button" onClick={this.clearForm.bind(this)} >clear</button>
                            <button type="button" onClick={this.sendData.bind(this)} >clear</button>
                            <button onClick={this.toggleModal}>
                                Open the modal
                            </button>
                            <OflModal show={this.state.isOpen} onClose={this.toggleModal}> </OflModal>
                        </div>
                    <div id="newMaterial">
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
};

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialForm);

//unused ajax call
// $.ajax( {
// url: "http://localhost:8080/materials",
// dataType: "json",
// type: "GET",
// success: function (data) {
//         console.log(data);
//     }
// });


