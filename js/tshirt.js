// var options = {
// 	mode: 'frontend',
// 	navigation: 'thumbnail'
// };
var options = {
	designsCategories: [
		{
			value: 'Category 1',
			children: [
				{
					value: 'Category 3'
				}
			]
		},
		{
			value: 'Category 2'
		}
	],
	designs: [
		{
			src: 'images/img_2.jpg',

			name: 'My first design',
			categories: [ 'Category 1', 'Category 2' ],
			price: 2,
			parameters: {}
		},
		{
			src: 'images/img_2.jpg',
			name: 'My second design',
			categories: [ 'Category 2' ],
			price: 3,
			parameters: {}
		}
	],
	colors: [
		{
			name: 'Black',
			value: '#000000',
			printingtypes: 'Sublimation,Direct print',
			price: null
		},
		{
			name: 'Beige',
			value: '#d6ab89',
			printingtypes: 'Direct print',
			price: null
		},
		{
			name: 'Gold',
			value: 'images/img_1.png',
			printingtypes: 'Sublimation',
			price: null
		}
	]
};
var instance = new AsukaDesigner('#tshirt-editor', options); // Create an instance of the main plugin class
instance.on('loaded', function() {
	console.log(`Editor loaded`);
});

instance.designer().addView('Tshirt', { height: 661, width: 783 }); // Access the subclasses from the main class
instance.designer().addElement('TShirt', 'Tshirt', null, [
	{
		name: 'White tshirt',
		color: '#ffffff',
		image: {
			url: 'https://cdn.pixabay.com/photo/2016/03/16/21/43/t-shirt-1261820_960_720.png',
			// url: "/images/tshirt2.jpg",
			name: 'White tshirt'
		},
		active: true
	},
	{
		name: '#D6F201',
		color: '#D6F201',
		image: {
			url: '/images/Tshirts/Tshirt_D6F201.png',
			name: 'Black tshirt'
		},
		active: true
	},
	{
		name: '#FFFFFF',
		color: '#FFFFFF',

		image: {
			url: '/images/Tshirts/Tshirt_FFFFFF.png',
			name: 'Black tshirt'
		},
		active: true
	},
	{
		name: '#00E0D5',
		color: '#00E0D5',
		image: {
			url: '/images/Tshirts/Tshirt_00E0D5.png',
			name: '#00E0D5'
		},
		active: true
	},
	{
		name: '#000FDC',
		color: '#000FDC',

		image: {
			url: '/images/Tshirts/Tshirt_000FDC.png',
			name: '#000FD6'
		},
		active: true
	},
	{
		name: '#004BE0',
		color: '#004BE0',
		image: {
			url: '/images/Tshirts/Tshirt_004BE0.png',
			name: 'Black tshirt'
		},
		active: true
	},
	{
		name: '#4D88FF',
		color: '#4D88FF',

		image: {
			url: '/images/Tshirts/Tshirt_4D88FF.png',
			name: '4D88FF'
		},
		active: true
	},
	{
		name: '#4DFFA3',
		color: '#4DFFA3',
		image: {
			url: '/images/Tshirts/Tshirt_4DFFA3.png',
			name: '4DFFA3'
		},
		active: true
	},
	{
		name: '#07DC00',
		color: '#07DC00',

		image: {
			url: '/images/Tshirts/Tshirt_07DC00.png',
			name: '07DC00'
		},
		active: true
	},
	{
		name: '#9AFF4D',
		color: '#9AFF4D',
		image: {
			url: '/images/Tshirts/Tshirt_9AFF4D.png',
			name: '9AFF4D'
		},
		active: true
	},
	{
		name: '#457C1C',
		color: '#457C1C',

		image: {
			url: '/images/Tshirts/Tshirt_457C1C.png',
			name: '457C1C'
		},
		active: true
	},

	{
		name: '#003558',
		color: '#003558',
		image: {
			url: '/images/Tshirts/Tshirt_003558.png',
			name: '003558'
		},
		active: true
	},
	{
		name: '#005826',
		color: '#005826',

		image: {
			url: '/images/Tshirts/Tshirt_005826.png',
			name: '005826'
		},
		active: true
	},
	{
		name: '#7200C3',
		color: '#7200C3',
		image: {
			url: '/images/Tshirts/Tshirt_7200C3.png',
			name: '7200C3'
		},
		active: true
	},
	{
		name: '#65004C',
		color: '#65004C',

		image: {
			url: '/images/Tshirts/Tshirt_65004C.png',
			name: '65004C'
		},
		active: true
	},
	{
		name: '#330058',
		color: '#330058',
		image: {
			url: '/images/Tshirts/Tshirt_330058.png',
			name: '330058'
		},
		active: true
	},
	{
		name: '#583300',
		color: '#583300',

		image: {
			url: '/images/Tshirts/Tshirt_583300.png',
			name: '583300'
		},
		active: true
	},

	{
		name: '#A840F2',
		color: '#A840F2',
		image: {
			url: '/images/Tshirts/Tshirt_A840F2.png',
			name: 'A840F2'
		},
		active: true
	},
	{
		name: '#C50094',
		color: '#C50094',

		image: {
			url: '/images/Tshirts/Tshirt_C50094.png',
			name: 'C50094'
		},
		active: true
	},
	{
		name: '#D6F201',
		color: '#D6F201',

		image: {
			url: '/images/Tshirts/Tshirt_D6F201.png',
			name: 'D6F201'
		},
		active: true
	}
	,
	{
		name: '#E05A00',
		color: '#E05A00',

		image: {
			url: '/images/Tshirts/Tshirt_E05A00.png',
			name: 'E05A00'
		},
		active: true
	},
	{
		name: '#F71FC1',
		color: '#F71FC1',

		image: {
			url: '/images/Tshirts/Tshirt_F71FC1.png',
			name: 'F71FC1'
		},
		active: true
	},
	{
		name: '#FF0000',
		color: '#FF0000',

		image: {
			url: '/images/Tshirts/Tshirt_FF0000.png',
			name: 'FF0000'
		},
		active: true
	}
]); // Access the subclasses from the main class
// instance.designer().addImage('https://designer.asukadev.com/wp-content/uploads/2020/11/Tshirt_front_black-3.png');
instance.designer().addText('hello world');
instance.on('addText', function(text) {
	console.log(`The following text has been added : ${text}`);
});
