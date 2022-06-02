NB: Storefront v1 is DEPRECATED by Metaplex.  If you pick up this repo you are doing so at your own risk. To our knowledge it works but is offered with no warranty or promise of support whatsoever.

This repo is mostly aimed at existing Storefront users who are looking for something to keep them going until Auction House - based Storefront v2 rolls out.

If you are digging in here, then expect to get your hands dirty :D 


Customizing and Deploying Metaplex-Auction-V1: (This store is configured for use with 9 decimal tokens, but can be configured for other decimals in step 3.a.)

1.) Clone the github repo


2.) Open up the repo in a code editor, everything we will be editing is inside the js/packages/web folder.


3.) You can use the finder in your code editor to look up and replace the store Name, Custom Token name, etc.
	a. (Find all) "CustomToken" and replace it with your SPL token's Abbreviation (SOL, USDC, etc).
	b. (Find all) "Metaplex-V1" and replace it with your new Store Name 
	c. (Find all) "EDIT", there is a comment along side these that explains what numbers to use in these lines of code 	depending on the number of decimals your custom SPL token is used.


4.) Replace the images:
	a. favicon-16x16, favicon-32x32, favicon-96x96 (this is what appears in the browser tab)
	b. logo.png (this is the logo that appears in the header)
	c. Wallet.JPG (this is the logo that appears in the phantom pop up window when Users go to approve transactions)
	d. background.png (This is the background to the entire site. It is currently set to an image but can be customized and changed to be a single color)


5.) edit the env file in the js/packages/web folder (it is a hidden file)
	a. REACT_APP_STORE_OWNER_ADDRESS_ADDRESS is where you will add the store owner wallet address.
	b. Leave REACT_APP_STORE_ADDRESS blank for now. Once you have deployed your store and initiated a store with the 	store owner address, open up the browser console. When loading up the store (after it is initiated) the owner wallet 	and store ID will be displayed,  add the StoreID into the REACT_APP_STORE_ADDRESS env variable. 
	c. SPL_TOKEN_MINTS is where you will add your token's address
	d. CG_SPL_TOKEN_IDS is where you add the token name. (Get these directly from Solscan, and remember, it's just the 	name.. do not add "Token" to the end of it unless the name is "Neft Token"... also make sure there are no capital 	letters.


6.) Feel free to dive into customization of the footer, header, etc. 
	a. (Find) "FOOTER LINKS", change the footer content easily and to whatever links you would like.
	b. You can find most the styling for the front end inside js/packages/web/src/views/market/index.less


7.) Lastly, deploy to Vercel. Here is a link to Metaplex's deployment guide (https://docs.metaplex.com/storefront/deploy). I personally use vercel.

P.S. There is still long loading times when getting the storefront set up. Once you inititate the store, you can start an auction and upon successfuly completion of the auction the storefront loads up much quicker. The last step of auction creation is the auction indexer which allows the storefront to easily load up in the future. 

P.S.S Use Neft's auction lister and recovery tools https://lister.neft.world (in case an auction breaks upon creation). His tools will save you A LOT of time and can almost guarantee auctions get started. 

Hope this can find some good use. Spent close to 4 weeks just going through errors to get a repo up and running smoothly. Don't forget the metaplex storefront UI does not allow you to start auctions of NFT's that have unverified creators. You can always mint a copy NFT with your wallet to auction and then send the real NFT manually to the winner. 


If you want to tip or buy me a cup of coffee, it's always appreciated! Cheers! 
My Solana Wallet: 9QWaNtsypgmS6CKojixAbZdatdiEaroPrCKKEDSuQ1La
