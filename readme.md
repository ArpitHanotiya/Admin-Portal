jsonwebtoken(JWT) -> used for authentication and authorizatoion
authentication -> verifying the identity of a user or client
authorization -> determining what actions a user or client is allowed to perform

if some user logged in then is this user genuine, which page we want to show him/her and also it make you log out after sometime on some websites (ex - IRCTC)
components:- header, payload(user identity that you want to save), signatures

don't store jwt on db, store it on cliet side or browser(eg - cookies or local storage) not on sever