const { Resto } = require('../models');

const RestoData = [
	 {
        resto_name: "Burger's Priest", // resto # 1
        delivery_service: 1, // 1 2 or 3, 3=both
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://www.theburgerspriest.com/content/dam/cara/en/burgers-priest-image-library/assets/burgers-priest-share.jpg',
    },
    {
        resto_name: 'Pizzeria Mozza', // 2
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://d2kq0urxkarztv.cloudfront.net/5adecb280b43a90b041cb65b/3196639/upload-afd47d57-9204-4668-b551-720ecdb684ec.png?e=webp&nll=true',
    },
    {
        resto_name: 'Cheesecake Factory', // 3
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://assets.digitalservices.ggp.com/content/dam/rw-2/images/tenant-images/tenant-logos/cheesecake-factory-logo-v2.png',
    },
    {
        resto_name: 'Kura Sushi', // 4
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://mma.prnewswire.com/media/1059613/Kura_Logo_Black_Logo.jpg?p=facebook',
    },
    {
        resto_name: 'The Capital Grille', // 5
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://upload.wikimedia.org/wikipedia/commons/0/0d/Capital_Grille.svg',
    },
    {
        resto_name: "P.F. Chang's", // 6
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://searchlogovector.com/wp-content/uploads/2019/01/pf-changs-logo-vector.png',
    },
    {
        resto_name: 'The Halal Guys', // 7
        delivery_service: 1,
        resto_promo_uber: '0.25',
        resto_img:
            'https://thehalalguys.com/wp-content/uploads/2020/07/site-logo-2x.png',
    },
    {
        resto_name: 'TGI Fridays', // 8
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://1000logos.net/wp-content/uploads/2020/09/TGI-Fridays-Logo-2004.jpg',
    },
    {
        resto_name: 'Five Guys', // 9
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img: 'https://static.wikia.nocookie.net/logopedia/images/2/2d/Five_Guys_Logo.jpg/revision/latest?cb=20111015221619',
    },
    {
        resto_name: 'Blaze Pizza', // 10
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://mma.prnewswire.com/media/1433312/Blaze_Pizza_Logo.jpg?p=facebook',
    },
    {
        resto_name: 'Chipotle Mexican Grill', // 11
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png',
    },
    {
        resto_name: 'Dunkin', // 12
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img: 'https://assets.fontsinuse.com/static/use-media-items/10/9038/full-1452x590/567020f6/dunkin-donuts-logo1.jpeg',
    },
    {
        resto_name: 'The Melting Pot', // 13
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://cblproperty.blob.core.windows.net/production/assets/bltf71592be6c1d6637-Melting-Pot-Logo-820.jpg',
    },
    {
        resto_name: 'Red Lobster', // 14
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://upload.wikimedia.org/wikipedia/en/b/b1/Redlobster_logocopia.png',
    },
    {
        resto_name: 'Fogo de Chão Brazilian Steakhouse', // 15
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_img:
            'https://images.ctfassets.net/l16b5usqno44/umb-media-75005/b85a1b9d291fd67ab3028cc3123dcdd5/store-logo-fogodechao.jpg',
    },
    {
        resto_name: 'KFC', // 16
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://logos-download.com/wp-content/uploads/2016/03/KFC_Logo_2006.png',
    },
    {
        resto_name: "Nando's", // 17
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://1000logos.net/wp-content/uploads/2017/09/Nandos-Logo.png',
    },
    {
        resto_name: 'Panda Express', // 18
        delivery_service: 2,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://logos-world.net/wp-content/uploads/2022/02/Panda-Express-Logo.png',
    },
    {
        resto_name: 'Tatsu Ramen', // 19
        delivery_service: 1,
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img:
            'https://toasttab.s3.amazonaws.com/restaurants/restaurant-53211000000000000/banner_1594850976.png',
    },
    {
        resto_name: 'Yard House', // 20
        delivery_service: 2,
        resto_promo_dd: '0.1',
        resto_promo_uber: '0.25',
        resto_img:
            'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yard_House_logo.svg',
    },
    {
        resto_name: 'Sushi Roku', // 21
        delivery_service: 1,
        resto_promo_dd: '0.4',
        resto_promo_uber: '0.25',
        resto_img:
            'https://www.oldpasadena.org/assets/Images/Business/Sushi-Roku-logo-300SQ.jpg',
    }
];

const seedResto = () => Resto.bulkCreate(RestoData);

module.exports = seedResto;
