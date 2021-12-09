# fp-android
 Final Backend Project KSM Android 2021

 CRUD & Authentication
 Using Mongoose, Express, Joi, dotenv, and JWT

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
AND PARAMS
```
stokBaru:50
```