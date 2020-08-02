import React, { useEffect, useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import { firestore } from '../../firebase/firebase.utils';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    useEffect(()=> {
        console.log('I am subscribing')
        const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
        
        return () => {
            console.log('I am unsubscribing')
            unsubscribeFromCollections();
        }
    }, [])

    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.collectionId]
    const { title, items } = collection;

        return (
            <div className='collection-page'>
                <h2 className='title'>{title}</h2>
                <div className='items'>
                    {items.map(item=> (
                    <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        );       
    }

export default CollectionPage;