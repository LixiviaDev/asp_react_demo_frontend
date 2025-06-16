import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuthentication } from '#/context/auth/AuthProvider'

import ItemCard from '../../components/retail/itemCard'
import ItemData from '../../models/retail/itemData'

export default function ItemList() {

    const location = useLocation()
    const { user, loggedIn } = useAuthentication()
    const [itemDataList, setItemDataList] = useState<ItemData[]>([])
    const [itemCards, setItemCards] = useState<any>()

    const fetchListAsync = async () => {
        try {
            console.log(`/api/Retail`)
            const response = await fetch(`/api/Retail`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data: ItemData[] = await response.json()
            console.log(`data: ${JSON.stringify(data)}`)
            setItemDataList(data)
        } catch (error) {
            console.log("Error fetching data!")
        }
    }

    useEffect(() => {
        fetchListAsync()
    }, [])

    useEffect(() => {
        setItemCards(itemDataList.map((itemData, id) => {
            return (<ItemCard key={id} itemData={itemData} />)
        }))
    }, [itemDataList])

    return (
        <div>
            {itemCards}
        </div>
    )
}