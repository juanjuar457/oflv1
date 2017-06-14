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
            quantity: this.refs.quantity.value
        };
        this.props.dispatch(addMaterial(material));
        this.clearForm();
    }

    clearForm() {
        console.log(this.refs.vendor.value);
        this.refs.vendor.value = "";
        this.refs.quantity.value = "";
        this.refs.productName.productName = "";
        this.refs.quantity.value = "";

    }

    sendData() {
        request .get('/materials')
            .end(function (err, res){
                console.log(res);
            });
        // $.ajax( {
        // url: "http://localhost:8080/materials",
        // dataType: "json",
        // type: "GET",
        // success: function (data) {
        //         console.log(data);
        //     }
        // });
    }

    render() {
        var materials = this.props.materials.map((material, index)=> {
            index
            return (
                <div>
                    {material.vendor}
                    {material.quantity}
                    {material.productName}
                </div>)
        });
            return (
                <div id="ofl-header">
                    <h1>Order For Later</h1>
                        <div id="inputlist">
                            <input id="vendor" type="text" ref="vendor"  placeholder="placeholder" />
                            <input id="quantity" type="text" ref="quantity" placeholder="placeholder" />
                            <input id="productName" type="text" ref="productName" placeholder="placeholder" />
                            <input id="catalogNumber" type="text" ref="CatalogNumber" placeholder="placeholder" />
                            <input id="catalogNumber" type="text" ref="CatalogNumber" placeholder="placeholder" />
                            <input id="catalogNumber" type="text" ref="CatalogNumber" placeholder="placeholder" />
                            <button type="button" onClick={this.sendData.bind(this)}>add</button>
                            <button type="button" onClick={this.clearForm.bind(this)} >clear</button>
                            <button onClick={this.toggleModal}>
                                Open the modal
                            </button>
                            <OflModal show={this.state.isOpen}
                                   onClose={this.toggleModal}>
                                Here's some content for the modal
                            </OflModal>
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
}

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialForm);




