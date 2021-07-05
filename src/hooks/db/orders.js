import { useState, useEffect, useMemo, useCallback } from 'react';
import { db } from 'services/firebase';

function useOrders() {
  const [orders, setOrders] = useState(null);

  const status = useMemo(() => ({
    pending: 'pending',
    inProgress: 'inProgress',
    outForDelivery: 'outForDelivery',
    delivered: 'delivered'
  }), []);

  const getOrders = useCallback(() => {
    db.collection('orders').orderBy('createdAt', 'asc').get().then(querySnapshot => {
      const docs = [];

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        });
      });

      const initialStatus = Object.keys(status).reduce((acc, status) => {
        acc[status] = [];

        return acc;
      }, {});

      setOrders(
        docs.reduce((acc, doc) => {
          const mainStatus = doc.status || status.pending;

          return {
            ...acc,
            [mainStatus]: acc[mainStatus].concat(doc)
          }
        }, initialStatus)
      )
    });
  }, [status]);

  const updateOrder = useCallback(async ({ orderId, status }) => {
    await db.collection('orders').doc(orderId).set({ status }, { merge: true });
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return { orders, status, updateOrder }
}

export default useOrders;
