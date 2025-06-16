import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuthentication } from '#/context/auth/AuthProvider'

export default function ItemList() {

    const location = useLocation()
    const { user, loggedIn } = useAuthentication()
    const [itemList, setItemList] = useState({})

    const fetchListAsync = async () => {
        try {
            console.log(`/api/Retail`)
            const response = await fetch(`/api/Retail`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            console.log(`data: ${JSON.stringify(data)}`)
            return data
        } catch (error) {
            return {}
        }
    }

    useEffect(() => {
        setItemList(fetchListAsync())
    }, [])

    return (
        <div>
            Hola, mundo!
        </div>
    )
}