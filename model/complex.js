function processComplexOrders(orders, inventoryAlert) {
    const result = { processedIds: [], skippedIds: [], totalRevenue: 0 };

    // 1. Nesting Level +1
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        // 2. Nesting Level +2 (Nested condition)
        if (order.status === 'pending') {
            let matchesRiskProfile = false;

            // 3. Nesting Level +3 (Deeply nested condition with complex logic)
            // Combined operators (&&, ||) and negations increase cognitive load
            if ((order.riskScore > 50 && !inventoryAlert) || (order.riskScore > 20 && inventoryAlert)) {
                matchesRiskProfile = true;
            }

            if (!matchesRiskProfile) {
                let allItemsValid = true;
                let orderSubtotal = 0;

                // 4. Nesting Level +3 (Nested loop inside condition)
                for (let j = 0; j < order.items.length; j++) {
                    const item = order.items[j];

                    // 5. Nesting Level +4 (Deeply nested condition)
                    if (!item.inStock) {
                        allItemsValid = false;
                        // 'break' statements increase complexity by interrupting linear flow
                        break; 
                    } else {
                        orderSubtotal += item.price;
                    }
                }

                // 6. Nesting Level +3 (Back to level 3)
                if (allItemsValid && order.items.length > 0) {
                    // 7. Nesting Level +4 (Another deep conditional branch)
                    if (order.discountCode) {
                        if (order.discountCode === 'SUPER50' && orderSubtotal > 100) {
                            orderSubtotal *= 0.5;
                        } else if (order.discountCode === 'TAKE10') {
                            orderSubtotal -= 10;
                        } else {
                            // Ternary operators inside complex blocks add structural weight
                            orderSubtotal = orderSubtotal > 200 ? orderSubtotal - 20 : orderSubtotal;
                        }
                    }

                    result.totalRevenue += orderSubtotal;
                    result.processedIds.push(order.id);
                } else {
                    result.skippedIds.push(order.id);
                }

            } else {
                // High risk order handled
                result.skippedIds.push(order.id);
            }
        } else {
            // 2. Nesting Level +2 (Else branch for non-pending status)
            if (order.status === 'processed') {
                continue; // 'continue' jumps flow, increasing cognitive penalty
            }
            result.skippedIds.push(order.id);
        }
    }

    return result;
}
