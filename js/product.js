console.log("hi there")

let image = document.getElementById("product-image")
let code = document.getElementById("product-code")
let desc = document.getElementById("product-desc")
let BackButton = document.getElementById("go-back")

let params = window.location.search

let parsedParams = new URLSearchParams(params)
let productToRender = parsedParams.get('item') 


console.log(productToRender)
if(productToRender == 'p1'){ 
    image.setAttribute("src", "images/prod/p1.jpg");
    code.innerHTML = 211
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
}

if(productToRender == 'p2'){
    image.setAttribute("src", "images/prod/p2.jpg");
    code.innerHTML = 212
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    
}


if(productToRender == "p1" || productToRender == 'p2'){
    BackButton.setAttribute('href',"pens.html")
}

// NOTEBOOKS


if(productToRender == 'nb1'){
    image.setAttribute("src", "images/prod/nb1.jpg");
    code.innerHTML = 169
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}
if(productToRender == 'nb2'){
    image.setAttribute("src", "images/prod/nb2.jpg");
    code.innerHTML = 160
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")   
}
if(productToRender == 'nb3'){
    image.setAttribute("src", "images/prod/nb3.jpg");
    code.innerHTML = 161
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}
if(productToRender == 'nb4'){
    image.setAttribute("src", "images/prod/nb4.jpg");
    code.innerHTML = 162
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}
if(productToRender == 'nb'){
    image.setAttribute("src", "images/prod/nb.jpg");
    code.innerHTML = 163
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}
if(productToRender == 'unb1'){
    image.setAttribute("src", "images/prod/unb1.jpg");
    code.innerHTML = 164
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}



if(productToRender == 'unb2'){
    image.setAttribute("src", "images/prod/unb2.jpg");
    code.innerHTML = 165
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}

if(productToRender == 'unb3'){
    image.setAttribute("src", "images/prod/unb3.jpg");
    code.innerHTML = 166
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}

if(productToRender == 'unb4'){
    image.setAttribute("src", "images/prod/unb4.jpg");
    code.innerHTML = 167
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}
if(productToRender == 'unb5'){
    image.setAttribute("src", "images/prod/unb5.jpg");
    code.innerHTML = 168
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"notebook.html")  
}


///////////  CARDS

if(productToRender == 'ch1'){
    image.setAttribute("src", "images/prod/cholder.jpg");
    code.innerHTML = 141
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"cholder.html")  
}

if(productToRender == 'ch2'){
    image.setAttribute("src", "images/prod/cholder2.jpg");
    code.innerHTML = 142
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"cholder.html")
}

if(productToRender == 'ch3'){
    image.setAttribute("src", "images/prod/cholder3.jpg");
    code.innerHTML = 143
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"cholder.html")
}

if(productToRender == 'mcholder1'){
    image.setAttribute("src", "images/prod/mcholder1.jpg");
    code.innerHTML = 144
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"cholder.html")
}

if(productToRender == 'mcholder2'){
    image.setAttribute("src", "images/prod/mcholder2.jpg");
    code.innerHTML = 145
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"cholder.html")
}



///////// PLANNING AND ORGANIISING

if(productToRender == 'ep1'){
    image.setAttribute("src", "images/prod/ep1.jpg");
    code.innerHTML = 171
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'ep2'){
    image.setAttribute("src", "images/prod/ep2.jpg");
    code.innerHTML = 172
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'ep3'){
    image.setAttribute("src", "images/prod/ep3.jpg");
    code.innerHTML = 173
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'ep4'){
    image.setAttribute("src", "images/prod/ep4.jpg");
    code.innerHTML = 174
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'ep5'){
    image.setAttribute("src", "images/prod/ep5.jpg");
    code.innerHTML = 175
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'eo1'){
    image.setAttribute("src", "images/prod/eo1.jpg");
    code.innerHTML = 163
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'eo2'){
    image.setAttribute("src", "images/prod/eo2.jpg");
    code.innerHTML = 164
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'eo3'){
    image.setAttribute("src", "images/prod/eo3.jpg");
    code.innerHTML = 165
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}

if(productToRender == 'eo4'){
    image.setAttribute("src", "images/prod/eo4.jpg");
    code.innerHTML = 166
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"planner.html")
}


/////////// COASTERS


if(productToRender == 'c1'){
    image.setAttribute("src", "images/prod/coaster.jpg");
    code.innerHTML = 141
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}

if(productToRender == 'c2'){
    image.setAttribute("src", "images/prod/c2.jpg");
    code.innerHTML = 142
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}
if(productToRender == 'c3'){
    image.setAttribute("src", "images/prod/c3.jpg");
    code.innerHTML = 143
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}
if(productToRender == 'c4'){
    image.setAttribute("src", "images/prod/c4.jpg");
    code.innerHTML = 144
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}
if(productToRender == 'c5'){
    image.setAttribute("src", "images/prod/c5.jpg");
    code.innerHTML = 145
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}

if(productToRender == 'c6'){
    image.setAttribute("src", "images/prod/c1.jpg");
    code.innerHTML = 146
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"coaster.html")
}


/// KEYCHAINS

if(productToRender == 'kc1'){
    image.setAttribute("src", "images/prod/kc1.jpg");
    code.innerHTML = 180
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc2'){
    image.setAttribute("src", "images/prod/kc2.jpg");
    code.innerHTML = 181
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc3'){
    image.setAttribute("src", "images/prod/kc3.jpg");
    code.innerHTML = 182
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc4'){
    image.setAttribute("src", "images/prod/kc4.jpg");
    code.innerHTML = 183
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc5'){
    image.setAttribute("src", "images/prod/kc5.jpg");
    code.innerHTML = 184
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc6'){
    image.setAttribute("src", "images/prod/kc6.jpg");
    code.innerHTML = 185
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc7'){
    image.setAttribute("src", "images/prod/kc7.jpg");
    code.innerHTML = 186
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc8'){
    image.setAttribute("src", "images/prod/kc8.jpg");
    code.innerHTML = 187
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc9'){
    image.setAttribute("src", "images/prod/kc9.jpg");
    code.innerHTML = 188
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc10'){
    image.setAttribute("src", "images/prod/kc10.jpg");
    code.innerHTML = 189
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc11'){
    image.setAttribute("src", "images/prod/kc11.jpg");
    code.innerHTML = 190
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc12'){
    image.setAttribute("src", "images/prod/kc12.jpg");
    code.innerHTML = 191
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}
if(productToRender == 'kc13'){
    image.setAttribute("src", "images/prod/kc13.jpg");
    code.innerHTML = 192
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"keychains.html")
}

////// others

if(productToRender == 'travelkit'){
    image.setAttribute("src", "images/prod/travelkit.jpg");
    code.innerHTML = 300
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'travelkit2'){
    image.setAttribute("src", "images/prod/travelkit2.jpg");
    code.innerHTML = 301
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'travelkit3'){
    image.setAttribute("src", "images/prod/travelkit3.jpg");
    code.innerHTML = 302
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'tumbler'){
    image.setAttribute("src", "images/prod/tumbler.jpg");
    code.innerHTML = 310
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'tholder'){
    image.setAttribute("src", "images/prod/tissueholder.jpg");
    code.innerHTML = 320
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'pad'){
    image.setAttribute("src", "images/prod/pad.jpg");
    code.innerHTML = 330
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'pad'){
    image.setAttribute("src", "images/prod/pad.jpg");
    code.innerHTML = 330
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder1'){
    image.setAttribute("src", "images/prod/folder1.jpg");
    code.innerHTML = 340
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder2'){
    image.setAttribute("src", "images/prod/folder2.jpg");
    code.innerHTML = 341
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder3'){
    image.setAttribute("src", "images/prod/folder3.jpg");
    code.innerHTML = 342
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder4'){
    image.setAttribute("src", "images/prod/folder4.jpg");
    code.innerHTML = 343
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder5'){
    image.setAttribute("src", "images/prod/folder5.jpg");
    code.innerHTML = 344
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

if(productToRender == 'folder6'){
    image.setAttribute("src", "images/prod/folder6.jpg");
    code.innerHTML = 345
    desc.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href',"others.html")
}

////////////products

if(productToRender == 'pholder'){
    image.setAttribute('src',"images/prod/pholder.jpg");
    code.innerHTML = 11
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'tumbler2'){
    image.setAttribute('src',"images/prod/tumbler.jpg");
    code.innerHTML = 12
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}


if(productToRender == 'cholder-1'){
    image.setAttribute('src',"images/prod/cholder.jpg");
    code.innerHTML = 13
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'cholder-2'){
    image.setAttribute('src',"images/prod/cholder2.jpg");
    code.innerHTML = 14
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'travelkit-1'){
    image.setAttribute('src',"images/prod/travelkit.jpg");
    code.innerHTML = 15
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'pad-1'){
    image.setAttribute('src',"images/prod/pad.jpg");
    code.innerHTML = 16
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'folder1-1'){
    image.setAttribute('src',"images/prod/folder1.jpg");
    code.innerHTML = 17
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'mcholder-1'){
    image.setAttribute('src',"images/prod/mcholder.jpg");
    code.innerHTML = 18
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'coaster-1'){
    image.setAttribute('src',"images/prod/coaster.jpg");
    code.innerHTML = 19
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

if(productToRender == 'nb-1'){
    image.setAttribute('src',"images/prod/nb.jpg");
    code.innerHTML = 20
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','products.html')
}

////// mcholder




if(productToRender == 'ph1-1'){
    image.setAttribute('src',"images/prod/pholder.jpg");
    code.innerHTML = 111
    desc.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos sapiente culpa dolores similique. Quidem quam veniam rerum unde, aperiam labore quis suscipit, nostrum obcaecati animi officia officiis. Doloremque, nihil."
    BackButton.setAttribute('href','mholder.html')
}

