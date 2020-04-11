import React, { Component } from 'react';
import './Products.css';

export default class Products extends Component {
   constructor(props) {
      super(props)
      this.state = {
         products: [
            { id: 1, name: 'Wasif', price: 21, units: '30' },
            { id: 2, name: 'Wadsdsdsif', price: 21, units: '30' },
            { id: 3, name: 'Wasifds', price: 2111, units: '311' },
            { id: 4, name: 'Wasif', price: 21, units: '30' }
         ],
         unique_id: ""
      }
   }

   OnClickAdd = () => {
      this.props.history.push('/AddPage', { data: this.state.products, unique_id: this.state.unique_id })
   }

   delete = (e) => {
      var all_products = this.state.products
      for (var i = 0; i < all_products.length; i++) {
         if (all_products[i].id.toString() === e.target.id) {
            this.state.products.pop(all_products[i])
            this.setState({ products: this.state.products })
         }
      }
   }

   renderTableData() {
      return this.state.products.map((product, index) => {
         const { id, name, price, units } = product
         return (
            <tr key={id}>
               <td>{index + 1}</td>
               <td>{name}</td>
               <td>{price}</td>
               <td>{units}</td>
               <td><button onClick={this.delete} id={id}>Delete</button></td>
            </tr>
         )
      })
   }

   componentDidMount() {
      if (this.props.location.state !== undefined) {
         if (this.props.location.state.data.length === 1) {
            if (this.props.location.state.unique_id !== "") {
               this.setState({ products: this.props.location.state.data })
            }
            else {
               this.state.products.push(this.props.location.state.data[0])
               this.setState({ products: this.state.products })
            }
         }
         else {
            this.setState({ products: this.props.location.state.data })
         }
         this.setState({ unique_id: this.props.location.state.unique_id + 1 })
      }
      else {
         this.setState({ unique_id: this.state.products.length + 1 })
      }
   }

   render() {
      if (this.state.products.length !== 0) {
         return (
            <div>
               <h1 id='title'>React Dynamic Table</h1>
               <table id='products'>
                  <tbody>
                     <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Units</th>
                        <th>Delete</th>
                     </tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
               <button onClick={this.OnClickAdd} className='button_background ' style={{
                  margin: '20px auto',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer'
               }}>ADD</button>
            </div>
         );
      }
      else {
         return (
            <div>
               <h1>No Data Available</h1>
               <button onClick={this.OnClickAdd} className='button_background ' style={{
                  margin: '20px auto',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer'
               }}>ADD</button>
            </div>
         );
      }
   }
}