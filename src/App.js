import React from "react"
import header from "./components/header"
import footer from "./components/footer"
import Items from "./components/items"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
  items:[
    {
    id: 1,
    title: 'Стул',
    img: 'i (6).webpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'chairs',
    price: 49.99
},
{
id: 2,
title: 'Стол',
img: 'i (5).webp',
desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
category: 'tables',
price: '149.99'
},
{
  id: 3,
  title: 'лампа',
  img: 'i (4).webp',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  category: 'lamp',
  price: '29.99'
  },
  {
    id: 4,
    title: 'кровать',
    img: 'i (3).webp',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'bed',
    price: '999.99'
    },
    ]
}
this.addToOrder=this.addToOrder.bind(this)
this.deleteOrder=this.addToOrder.bind(this)
  }
render(){
  return (
    <div className="wrapper">
    <header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Items items={this.state.items} onAdd={this.addToOrder}/>
    <footer/>
    </div>
  );
  }

  deleteOrder(id){
this.setState({orders:this.state.orders.filter(el => el.id !==id)})
  }
  addToOrder(item){
      let isInArray = false
      this.state.orders.forEach(el=> {
      if(el.id === item.id)
      isInArray = true
      })
      
      if(!isInArray)
      
      this.setState({ orders: [...this.state.orders, item] })
  }
}  
export default App;
