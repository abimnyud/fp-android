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
AND PARAMS
```
stokBaru:50
```