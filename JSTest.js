/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFTsData=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _artist, _color,_year) {
    const nft = {
        name: _name,
        artist: _artist,
        color: _color,
        year: _year 
    };
    NFTsData.push(nft);
    console.log("\nMinted successfully....!!!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTsData.length;i++){
        console.log("\nID: "+(i+1));
        console.log("Name: "+NFTsData[i].name);
        console.log("Artist: "+NFTsData[i].artist);
        console.log("Color: "+NFTsData[i].color);
        console.log("Year: "+NFTsData[i].year);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTsData.length);
    // return NFTsData.length;
}


// call your functions below this line
mintNFT('Digital Sunset', 'Jane Doe', 'Red',2023);
mintNFT('CryptoPunk', 'John Smith', 'Blue',2021);
mintNFT('Virtual Landscape', 'Alice Brown', 'Green',2022);
mintNFT('Abstract Waves', 'Emily White', 'Yellow',2023);
mintNFT('Pixel Hero', 'Bob Green', 'Pink',2024);

console.log('\nListing all NFTs:');
listNFTs();

console.log('\nTotal Supply of NFTs:');
getTotalSupply();
