Window: localStorage property
The localStorage read-only property of the window interface allows you to access a Storage object for the Document 's origin ; the stored data is saved across browser sessions.
localStorage is similar to sessionStorage , except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. ( localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)
Value A Storage object which can be used to access the current origin's local storage space.
Description The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.
localStorage data is specific to the protocol of the document . In particular, for a site loaded over HTTP (e.g., http://example.com ), localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS (e.g., https://example.com ).
The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem() . js
localStorage . setItem ( "myCat" , "Tom" ) ;
The syntax for reading the localStorage item is as follows:
const cat = localStorage . getItem ( "myCat" ) ;
The syntax for removing the localStorage item is as follows:
localStorage . removeItem ( "myCat" ) ;
The syntax for removing all the localStorage items is as follows:
localStorage . clear ( ) ;
