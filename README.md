# fp-android
 Final Backend Project KSM Android 2021

 CRUD & Authentication

##  CRUD
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
```
{
    "jenisPakaian": "Kemeja",
    "bahanPakaian": "Flanel",
    "harga": 150000,
    "stok": 100
}
```
AND
```
stokBaru:50
```