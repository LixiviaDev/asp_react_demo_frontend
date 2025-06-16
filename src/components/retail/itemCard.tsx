import { useState, useEffect } from 'react'
import ItemData from '../../models/retail/itemData'

export default function itemCard(props: any) {

    const [itemData] = useState<ItemData>(props.itemData);
    
    return (
        <div>
            This is the card nº{itemData.id}!
        </div>
    )
}