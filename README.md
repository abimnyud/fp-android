# fp-android
 Final Backend Project KSM Android 2021

 CRUD & Authentication
 using mongoose, nodemon, rxpress, bcrypt, joi, dotenv, and jwt

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
### DELETE CATALOG (PARAMS)
```
jenisPakaian:Kemeja
bahanPakaian:Flanel
```
### UPDATE CATALOG (BODY & PARAMS)
BODY
```
{
    "jenisPakaian": "Kemeja",
    "bahanPakaian": "Flanel",
    "harga": 150000,
    "stok": 100
}
```
and PARAMS
```
hargaBaru:200000
stokBaru:50
```
### REGISTER ADMIN (BODY)
Needs .env ADMIN_TOKEN
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