import React from 'react'
import Navi from "./Navi"
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                     <Route exact path="/" component={ProductList} />
                     <Route exact path="products" component={ProductList} />
                     <Route path="products/:id" component={ProductList} />
                     <Route path="/cart" component={CartDetail} />

                     
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    );
}
