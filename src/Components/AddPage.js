import React, { Component } from 'react';

class AddPage extends Component {
   constructor() {
      super();
      this.state = {
         products: [],
         product: { id: '', name: '', price: '', units: '' },
         unique_id: ""
      }

   }

   update(e) {
      let product = { id: this.state.unique_id, name:this.b.value, price: this.c.value, units: this.d.value }
      this.setState({product: product})
   }

   renderTableData() {
      return (
         <tr >
               <td><input type="text"
               ref={(call_back) => { this.b = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
               <td><input type="text"
               ref={(call_back) => { this.c = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
               <td><input type="text"
               ref={(call_back) => { this.d = call_back }} onChange=
               {this.update.bind(this)} required/> </td>
         </tr>

      )

   }
   componentDidMount() {
      if (this.props.location.state !== undefined) {
         this.setState({ products: this.props.location.state.data })
         this.setState({unique_id: this.props.location.state.unique_id})
      }
      else{
         this.setState({unique_id: 100})
      }
   }


   addRowHandler = () => {
      this.state.products.push(this.state.product)
      this.setState({ products: this.state.products });
      this.props.history.push('/', { data: this.state.products, unique_id: this.state.unique_id })
   }


   render() {
      return (
         <div>
            <table id='products'>
               <tbody>
                  <tr>
                     <th>Name</th>
                     <th>PRICE</th>
                     <th>UNITS</th>
                  </tr>
                  {this.renderTableData()}
               </tbody>
            </table>

            <button className='button_background ' style={{
               margin: '20px auto',
               display: 'flex', alignItems: 'center',
               justifyContent: 'center', cursor: 'pointer'
            }} onClick={this.addRowHandler}>ADDRow
            </button>
         </div>
      );
   }
}

export default AddPage;
