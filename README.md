# fp-android
 Final Backend Project KSM Android 2021

 CRUD & Authentication
 using mongoose, nodemon, express, bcrypt, joi, dotenv, and jwt

##  CRUD INPUT EXAMPLE
### ADD CATALOG (BODY)
```
{
    "jenisPakaian": "Kemeja",
    "bahanPakaian": "Flanel",
    "harga": 150000,
    "stok": 100
}
```
### DELETE CATALOG (QUERY)
```
id: *objectid*
```
### UPDATE CATALOG (BODY & QUERY)
BODY
```
{
    "id": "*objectid*",
}
```
and QUERY
```
hargaBaru:200000
stokBaru:50
```
##  AUTHENTICATION EXAMPLE
### REGISTER ADMIN (BODY)
Needs random ADMIN_TOKEN and USER_TOKEN in .env
```
{
    "name": "Admin Pertama",
    "email": "admin1@abimanyu.co",
    "password": "admin123456"
}
```
### LOGIN ADMIN (BODY)
```
{
    "email": "admin1@abimanyu.co",
    "password": "admin123456"
}

```
### USER REGISTER (BODY)
```
{
    "name": "Nama Lengkap",
    "email": "user@abimanyu.co",
    "password": "user123456"
}
```