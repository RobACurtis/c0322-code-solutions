var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.00,
    shipTo: 'JS Masher',
    orderNumber: '# 114-3941689-8772232',
    delivered: true,
    dateDelivered: 'August 8, 2020',
    deliveredTo: null,
    image: true,
    itemName: 'JavaScript for impatient programmers',
    book: true,
    author: 'Rauschmayer, Dr. Axel',
    returnWindowClosed: true,
    returnWindowDate: 'September 7, 2020',
    itemPrice: 31.55,
    productReviewed: false,
    productreview: 'Write a product review',
    support: false,
    productSupport: null
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '# 113-9984268-1280257',
    delivered: true,
    dateDelivered: 'July 20, 2020',
    deliveredTo: 'resident',
    image: true,
    itemName: 'The Timeless Way of Building',
    book: true,
    author: 'Alexander, Christopher',
    returnWindowClosed: true,
    returnWindowDate: 'Aug 19, 2020',
    itemPrice: 41.33,
    productReviewed: false,
    productreview: 'Write a product review',
    support: false,
    productSupport: null
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '# 114-2875557-9059409',
    delivered: true,
    dateDelivered: 'July 7, 2020',
    deliveredTo: 'resident',
    image: true,
    itemName: 'GameCube Controller Adapter. Super Smash Bros Switch GameCube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    book: false,
    author: null,
    returnWindowClosed: true,
    returnWindowDate: 'Aug 5, 2020',
    itemPrice: 15.98,
    productReviewed: false,
    productreview: 'Write a product review',
    support: false,
    productSupport: null
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: ' # 113-2883177-2648248',
    delivered: true,
    dateDelivered: 'July 7, 2020',
    deliveredTo: null,
    productReviewed: false,
    productreview: 'Write a product review',
    support: true,
    productSupport: 'Get Product Support',
    items: [
      {
        image: true,
        itemName: 'GameCube Controller Adapter. Super Smash Bros. Edition (Nintendo Switch)',
        book: false,
        author: null,
        returnWindowClosed: true,
        returnWindowDate: 'Aug 4 2020',
        itemPrice: 94.95
      },
      {
        image: true,
        itemName: 'The Art of Sql',
        book: true,
        author: 'Faroult, Stephane',
        returnWindowClosed: true,
        returnWindowDate: 'Aug 4, 2020',
        itemPrice: 33.99
      }
    ]
  }
];

console.log('Order History', orderHistory);
