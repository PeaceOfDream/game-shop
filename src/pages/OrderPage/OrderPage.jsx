import React from 'react'
import './orderPage.css'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/utils'
import { OrderItem } from '../../components/OrderItem';

export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	console.log(items);

	if(items.length < 1) {
		return <h1>Ваша корзина пуста</h1>
	}

  return (
	 <div className='order-page'>

		<div className="order-page__left">
			{items.map(game => <OrderItem game={game}/>)}
		</div>
		<div className="order_page_right">
			<div className="order-page__total-price">
				<span>
					{items.length} товаров на сумму{calcTotalPrice(items)} руб.
				</span>
			</div>
		</div>
	 </div>
  )
}
