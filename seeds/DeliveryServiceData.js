const { DeliveryService } = require('../models')

const deliveryServiceData = 
        [
          { name: 'Uber Eats', baseURL: 'https://www.ubereats.com/', logoURL: 'https://live.staticflickr.com/21/30786225103_a896d46df9_n.jpg' },
          { name: 'DoorDash', baseURL: 'https://www.doordash.com/', logoURL: 'https://crystalpng.com/wp-content/uploads/2022/03/doordash-logo-transparent-1.png' }
        ];
        console.log('Delivery services created successfully!');
    
      const seedDeliveryData = () => Resto.bulkCreate(deliveryServiceData);
      module.exports = seedDeliveryData;

