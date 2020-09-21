export const ORDER_LIST_SORT_ORDER = {
    LOWEST_PRICE_FIRST: 'lowestPriceFirst',
    HIGHEST_PRICE_FIRST: 'highestPriceFirst',
    RECENT_ORDERS_FIRST: 'recentOrdersFirst',
    OLD_ORDERS_FIRST: 'oldOrdersFirst'
};

export const SORT_ORDER_FUN = {
    lowestPriceFirst: (a, b) => a.price - b.price,
    highestPriceFirst: (a, b) => b.price - a.price,
    recentOrdersFirst: (a, b) => new Date(b.date) - new Date(a.date),
    oldOrdersFirst: (a, b) => new Date(a.date) - new Date(b.date)
    
}