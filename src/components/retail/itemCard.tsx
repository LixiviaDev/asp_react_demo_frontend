import { useState, useEffect } from 'react'
import ItemData from '../../models/retail/itemData'

export default function itemCard(props: any) {

    const [itemData] = useState<ItemData>(props.itemData);
    
    return (
        <div className="m-5 p-5 flex justify-between border-2 border-solid rounded-lg shadow-xl">
            <div className='flex flex-col gap-3'>
                <div>{itemData.name}</div>
                <div>{itemData.category}</div>
            </div>
            <div className='flex flex-col gap-3 text-right'> 
                <div>{(itemData.discountedSellingPrice / 100).toFixed(2)}€ x {itemData.quantity}u.</div>
                <div>{itemData.weightInGms}mg</div>
            </div>
        </div>
    )
}