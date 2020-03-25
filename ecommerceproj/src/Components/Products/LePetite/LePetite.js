import React, { Component } from 'react';
import { connect } from 'react-redux';
import LePetiteBox from '../../../images/lePetite.jpg';
import { addToCart, getCartItem, updateUser } from '../../../redux/actions/actionCreators';
import { createCartItems, getCartItems } from '../../../services/cart.services';
import { getProduct } from '../../../services/products.service';
import Footer from '../../Footer/Footer';
import '../chocolates.css';
import LePetiteChocolates from '../ChocolatesInBox/LePetiteChocolates';


class LePetite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: '',
            name: '',
            price: '',
            quantity: 1
        }
        this.handleAddToBag = this.handleAddToBag.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }

    componentWillMount() {
        let productid = this.props.match.params.productid;
        getProduct(productid)
            .then(res => {
                let productInfo = res.data[0];
                console.log(res.data[0]);
                this.setState({
                    product_id: productInfo.id,
                    name: productInfo.name,
                    price: productInfo.price
                });
            })
    }

    handleAddToBag() {
        if (this.props.userInfo.id) {
            let user_id = this.props.userInfo.id;
            const { product_id, quantity } = this.state;
            const reqBody = { user_id, product_id, quantity };
            createCartItems(reqBody)
                .then(res => {
                    getCartItems(user_id)
                        .then(res => {
                            console.log(res.data);
                            this.props.getCartItem(res.data);
                        })
                })
                .catch(err => { throw err })
        }
        else {
            console.log(this.state);
            this.props.addToCart(this.state);
        }
    }

    handleQtyChange(e) {
        let newState = this.state.qty;
        newState = Number(e.target.value);
        this.setState({ quantity: newState })
        console.log(e.target.value);
    }

    render() {
        console.log(this.state);
        console.log(this.props.cartReducer);
        console.log(this.props.cartItem);
        return (
            <div className='wrapper'>
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Le Petite Box</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={e => { this.handleQtyChange(e) }} />
                                <h3>$4.95</h3>
                            </div>
                            <p>
                                Lucy’s Le Petite box of chocolates are the very best little gift to give to someone.
                                It is the perfect amount of chocolate to help someone feel comforted and loved.
                                This box contains one piece each of the Sea Salt Caramel, Mint Truffle, Coconut Rough,
                                and Pecan Turtle.
                            </p>
                            <div className='product-ingredients'>
                                <h3>Ingredients</h3>
                                <p>
                                    Chocolate, coconut, caramel, and roasted pecans,  Contains milk and nuts. Gluten-free.
                                </p>
                            </div>
                        </div>
                        <div className='product-picture'>
                            <img src={LePetiteBox} alt='box of chocolates' />
                        </div>
                    </div>
                    <LePetiteChocolates />
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addToCart, updateUser, getCartItem })(LePetite);