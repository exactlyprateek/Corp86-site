// var options = {
// 	mode: 'frontend',
// 	navigation: 'thumbnail'
// };
var options1 = {
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
var options = {
	mode: 'frontend',
	navigation: 'thumbnail',
	layout: [
		{
			id: 'main',
			target: 'left',
			category: 'menu',
			multiple: !1,
			collapsed: !!0,
			collapsible: !!0,
			items: [
				{ name: 'Views', icon: 'bars' },
				{ name: 'Elements', icon: 'puzzle-piece' },
				// { name: 'Templates', icon: 'template' },
				// { name: 'Layers', icon: 'layer-group' },
				// { name: 'Drawing areas', icon: 'vector-square' },
				// { name: 'Designs', icon: 'pencil-alt' },
				// { name: 'Markers', icon: 'thumbtack' },
				{ name: 'Text', icon: 'font' },
				{ name: 'Image', icon: 'upload' }
				// { name: 'Qr code', icon: 'qrcode' }
			]
		},
		{
			id: 'second',
			target: 'right',
			category: 'menu',
			collapsed: !!0,
			collapsible: !!0,
			items: [
				{ name: 'Snap grid', icon: 'magnet', fallback: 'function' },
				{ name: 'Ruler', icon: 'ruler-combined', fallback: 'function' },
				{ name: 'Print', icon: 'print', fallback: 'function' },
				{ name: 'Magnifying glass', icon: 'binoculars', fallback: 'function' },
				{ name: 'Zoom', icon: 'search', fallback: 'popover' },
				{ name: 'Download', icon: 'upload' }
				// { name: 'Reset', icon: 'sync-alt', fallback: 'function' }
			]
		},
		{
			id: 'editor',
			target: 'editor',
			category: 'menu',
			multiple: !1,
			collapsed: !0,
			collapsible: !0,
			items: [
				{
					name: 'Editor',
					icon: 'puzzle-piece',
					container: '.ask-modal-editor .ask-layout-content',
					fallback: 'function'
				}
			]
		},
		{
			id: 'studio',
			target: 'studio',
			category: 'menu',
			multiple: !1,
			collapsed: !!0,
			collapsible: !!0,
			items: [
				{
					name: 'Filters',
					icon: 'filter',
					container: '.ask-modal-studio .ask-layout-content'
				},
				{
					name: 'Masks',
					icon: 'mask',
					container: '.ask-modal-studio .ask-layout-content'
				},
				{
					name: 'Remove colors',
					icon: 'eraser',
					container: '.ask-modal-studio .ask-layout-content'
				},
				{
					name: 'Settings',
					icon: 'cog',
					container: '.ask-modal-studio .ask-layout-content'
				}
			]
		},
		{ id: 'custom', target: 'custom', items: [] }
	]
};
var instance = new AsukaDesigner('#tshirt-editor', options); // Create an instance of the main plugin class
instance.on('loaded', function() {
	console.log(`Editor loaded`);
});
let imgArr = [];
instance.designer().addView('Front', { height: 661, width: 783 }); // Access the subclasses from the main class
instance.designer().addElement('Front', 'Tshirt', null, [
	{
		name: '#FFFFFF',
		color: '#ffffff',
		image: {
			// url: 'https://cdn.pixabay.com/photo/2021/08/13/11/39/11-39-36-705_960_720.png',
			url: '/images/Tshirts/Tshirt_D6F201.png',
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
	},
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
instance.designer().addView('Back', { height: 661, width: 783 }); // Access the subclasses from the main class
instance.designer().addElement('Back', 'Tshirt', null, [
	{
		name: '#FFFFFF',
		color: '#ffffff',
		image: {
			// url: 'https://cdn.pixabay.com/photo/2021/08/13/11/39/11-39-36-705_960_720.png',
			url: '/images/Tshirts/Tshirt_D6F201.png',
			
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
	},
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

instance.designer().addView('Side', { height: 661, width: 783 }); // Access the subclasses from the main class
instance.designer().addElement('Side', 'Tshirt', null, [
	{
		name: '#FFFFFF',
		color: '#ffffff',
		image: {
			// url: 'https://cdn.pixabay.com/photo/2021/08/17/05/21/05-21-01-273_1280.png',
			url: '/images/Tshirts/side/Tshirt_D6F201.png',

			name: 'White tshirt'
		},
		active: true
	},
	{
		name: '#D6F201',
		color: '#D6F201',
		image: {
			url: '/images/Tshirts/side/Tshirt_D6F201.png',
			name: 'Black tshirt'
		},
		active: true
	},
	{
		name: '#00E0D5',
		color: '#00E0D5',
		image: {
			url: '/images/Tshirts/side/Tshirt_00E0D5.png',
			name: '#00E0D5'
		},
		active: true
	},
	{
		name: '#000FDC',
		color: '#000FDC',

		image: {
			url: '/images/Tshirts/side/Tshirt_000FDC.png',
			name: '#000FD6'
		},
		active: true
	},
	{
		name: '#004BE0',
		color: '#004BE0',
		image: {
			url: '/images/Tshirts/side/Tshirt_004BE0.png',
			name: 'Black tshirt'
		},
		active: true
	},
	{
		name: '#4D88FF',
		color: '#4D88FF',

		image: {
			url: '/images/Tshirts/side/Tshirt_4D88FF.png',
			name: '4D88FF'
		},
		active: true
	},
	{
		name: '#4DFFA3',
		color: '#4DFFA3',
		image: {
			url: '/images/Tshirts/side/Tshirt_4DFFA3.png',
			name: '4DFFA3'
		},
		active: true
	},
	{
		name: '#07DC00',
		color: '#07DC00',

		image: {
			url: '/images/Tshirts/side/Tshirt_07DC00.png',
			name: '07DC00'
		},
		active: true
	},
	{
		name: '#9AFF4D',
		color: '#9AFF4D',
		image: {
			url: '/images/Tshirts/side/Tshirt_9AFF4D.png',
			name: '9AFF4D'
		},
		active: true
	},
	{
		name: '#457C1C',
		color: '#457C1C',

		image: {
			url: '/images/Tshirts/side/Tshirt_457C1C.png',
			name: '457C1C'
		},
		active: true
	},

	{
		name: '#003558',
		color: '#003558',
		image: {
			url: '/images/Tshirts/side/Tshirt_003558.png',
			name: '003558'
		},
		active: true
	},
	{
		name: '#005826',
		color: '#005826',

		image: {
			url: '/images/Tshirts/side/Tshirt_005826.png',
			name: '005826'
		},
		active: true
	},
	{
		name: '#7200C3',
		color: '#7200C3',
		image: {
			url: '/images/Tshirts/side/Tshirt_7200C3.png',
			name: '7200C3'
		},
		active: true
	},
	{
		name: '#65004C',
		color: '#65004C',

		image: {
			url: '/images/Tshirts/side/Tshirt_65004C.png',
			name: '65004C'
		},
		active: true
	},
	{
		name: '#330058',
		color: '#330058',
		image: {
			url: '/images/Tshirts/side/Tshirt_330058.png',
			name: '330058'
		},
		active: true
	},
	{
		name: '#583300',
		color: '#583300',

		image: {
			url: '/images/Tshirts/side/Tshirt_583300.png',
			name: '583300'
		},
		active: true
	},

	{
		name: '#A840F2',
		color: '#A840F2',
		image: {
			url: '/images/Tshirts/side/Tshirt_A840F2.png',
			name: 'A840F2'
		},
		active: true
	},
	{
		name: '#C50094',
		color: '#C50094',

		image: {
			url: '/images/Tshirts/side/Tshirt_C50094.png',
			name: 'C50094'
		},
		active: true
	},
	{
		name: '#D6F201',
		color: '#D6F201',

		image: {
			url: '/images/Tshirts/side/Tshirt_D6F201.png',
			name: 'D6F201'
		},
		active: true
	},
	{
		name: '#E05A00',
		color: '#E05A00',

		image: {
			url: '/images/Tshirts/side/Tshirt_E05A00.png',
			name: 'E05A00'
		},
		active: true
	},
	{
		name: '#F71FC1',
		color: '#F71FC1',

		image: {
			url: '/images/Tshirts/side/Tshirt_F71FC1.png',
			name: 'F71FC1'
		},
		active: true
	},
	{
		name: '#FF0000',
		color: '#FF0000',

		image: {
			url: '/images/Tshirts/side/Tshirt_FF0000.png',
			name: 'FF0000'
		},
		active: true
	}
]); // Access the subclasses from the main class
instance.on('addImage', function(image) {
	imgArr.push(image.detail);
	console.log(image);
});

// instance.designer().addText('hello world');
let submitButton = document.createElement('button');
submitButton.appendChild(document.createTextNode('Submit'));
submitButton.className = 'btn btn-primary';
submitButton.id = 'submit-button';
submitButton.classList.add('ask-menu-item');

submitButton.setAttribute('data-toggle', 'modal');
submitButton.setAttribute('data-target', '#exampleModal');

let list = document.querySelector('#tshirt-editor > div > section > aside.ask-layout-sider.left > ul > div > ul');
list.appendChild(submitButton);
submitButton.addEventListener('click', function() {

	let tshirtMessage = document.querySelector("#tshirt-message");
	let canvasFront = document.querySelector('#Front');
	let canvasBack = document.querySelector('#Back');
	let canvasSide = document.querySelector('#Side');
	let imgFrontUrl = canvasFront.toDataURL('image/png');
	let imgBackUrl = canvasBack.toDataURL('image/png');
	let imgSideUrl = canvasSide.toDataURL('image/png');
	let modal = document.querySelector('.modal-body');
	let imageFront = document.querySelector('#modal-front');
	let imageBack = document.querySelector('#modal-back');
	let imageSide = document.querySelector('#modal-side');
	imageFront.src = imgFrontUrl;
	imageBack.src = imgBackUrl;
	imageSide.src = imgSideUrl;
	console.log(imgArr.filter(i => i[0]));

	//FINDING COLOR OF SHIRT

	let colorP = document.querySelectorAll('.ask-color-item-wrapper');
	let tshirtColor = 'rgb ';
	for (var i = 0; i < colorP.length; i++) {
		let color = colorP[i].innerHTML;
		color.includes('svg') ? (tshirtColor += color.split('rgb')[1].split(';')[0]) : null;
	}
	// console.log('tshirtColor' + tshirtColor);
	let formColor = tshirtColor.length > 5 ? tshirtColor : 'rgb (255, 255, 255)';
	// modal.appendChild(image);

	let formSubmitButton = document.getElementById('tshirt-submit');
	formSubmitButton.addEventListener('click', function() {
		let tshirtDescription = document.getElementById('tshirt-description');
		let tshirtName = document.getElementById('tshirt-name');
		let tshirtEmail = document.getElementById('tshirt-email');
		let tshirtContact = document.getElementById('tshirt-contact');

		let tshirtImages = [];
		let canvasImages = [ canvasBack.toDataURL(), canvasFront.toDataURL(), canvasSide.toDataURL() ];
		// document.querySelector('#Front').toBlob(blob => {
		// 	tshirtImages.push(blob);
		// 	console.log(tshirtImages);
		// 	console.log(blob);
		// });
		for (let i = 0; i < canvasImages.length; i++) {
			imgArr.push([ canvasImages[i] ]);
		}
		for (let i = 3; i < imgArr.length; i++) {
			var block = imgArr[i][0].split(';');
			// Get the content type of the image
			var contentType = block[0].split(':')[1]; // In this case "image/gif"
			// get the real base64 content of the file
			var realData = block[1].split(',')[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

			// Convert it to a blob to upload
			var blob = b64toBlob(realData, contentType);
			tshirtImages.push(blob);
		}

		let formData = new FormData();
		formData.append('name', tshirtName.value);
		formData.append('email', tshirtEmail.value);
		formData.append('contact', tshirtContact.value);
		formData.append('colorCode', formColor);
		formData.append('description', tshirtDescription.value);
		for (let i = 0; i < tshirtImages.length; i++) {
			tshirtImages[i] = new File([ tshirtImages[i] ], `Image${i}.png`, {
				type: 'image/png'
			});

			console.log(tshirtImages[i]);
			formData.append('photos', tshirtImages[i]);
		}
		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1]);
		}
		tshirtMessage.innerHTML = "Loading...";

		axios({
			url: 'https://crop86.herokuapp.com/sendmail',
			data: formData, // Add as Data the Previously create formData
			method: 'POST'
			// headers: {
			// 	'content-type': 'multipart/form-data'
			// }
		})
			.then(res => {
				tshirtName.value = '';
				tshirtEmail.value = '';
				tshirtContact.value = '';
				tshirtDescription.value = '';
				tshirtMessage.innerHTML = "Request Submitted Successfully (check your inbox for a copy of response)";

			})
			.catch(err => {
				tshirtMessage.innerHTML = "Request Failed Please Try again";

			});
		// $.ajax({
		// 	url: 'https://crop86.herokuapp.com/sendmail',
		// 	data: formData, // Add as Data the Previously create formData
		// 	type: 'POST',
		// 	contentType: false,
		// 	processData: false,
		// 	cache: false,
		// 	dataType: 'json', // Change this according to your response from the server.
		// 	error: function(err) {
		// 		console.error(err);
		// 	},
		// 	success: function(data) {
		// 		console.log(data);
		// 	},
		// 	complete: function() {
		// 		console.log('Request finished.');
		// 	}
		// });
	});
});

// instance.designer().getCanvas('Tshirt', e => console.log(e));
// console.log(instance.designer().getColors(query = {}, test="OR"));

// instance.designer().addImage('https://designer.asukadev.com/wp-content/uploads/2020/11/Tshirt_front_black-3.png');
function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;

	var byteCharacters = atob(b64Data);
	var byteArrays = [];

	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		var slice = byteCharacters.slice(offset, offset + sliceSize);

		var byteNumbers = new Array(slice.length);
		for (var i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		var byteArray = new Uint8Array(byteNumbers);

		byteArrays.push(byteArray);
	}

	var blob = new Blob(byteArrays, { type: contentType });
	return blob;
}
