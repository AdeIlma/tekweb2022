# API POINTS



## ARTICLE
### Menampilkan seluruh article
```
GET: /article

response:
[
  {
    "id"        : "",
    "title"     : "",
    "thumbnail" : "",  
    "isi"       : "",
    "markdown"  : ""
  },
  {
    ...
  }
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /article/[id]

response:
{
    "id"        : "",
    "title"     : "",
    "thumbnail" : "",  
    "isi"       : "",
    "markdown"  : ""
}
```
### Menambahkan article
```
POST: /article

data:
{
    "title"     : "",
    "thumbnail" : "",  
    "isi"       : "",
    "markdown"  : ""
}

response:
true    //if true
false   //if false
```
### Mengubah article
```
PUT: /article

data:
{
    "title"     : "",
    "thumbnail" : "",  
    "isi"       : "",
    "markdown"  : ""
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /article

response:
true    //if true
false   //if false
ps : saat perintah delete terjadi error 405, dimana saya sudah mengecek routes.php, articlemodel.php dan article.php tetapi tidak 
menemukan kesalahannya dimana dan saya juga sudah menanyakan kepada teman-teman yang sekiranya lebih tahu tepapi masi belum menemukan 
kesalahnnya, sehingga saya mengumpulkan uji coba api tester dengan delete yang error. 
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/AdeIlma/tekweb2022/main/img/Article.png)

## ARTICLE
### Menampilkan seluruh user
```
GET: /users

response:
[
  {
    "id"        : "",
    "nama"      : "",
    "jurusan"   : "",  
    "nim"       : "",
    "about"     : ""
  },
  {
    ...
  }
]
```
### Menampilkan user berdasarkan ```id```
```
GET: /users/[id]

response:
{
    "id"        : "",
    "nama"      : "",
    "jurusan"   : "",  
    "nim"       : "",
    "about"     : ""
}
```
### Menambahkan user
```
POST: /users

data:
{
    "nama"      : "",
    "jurusan"   : "",  
    "nim"       : "",
    "about"     : ""
}

response:
true    //if true
false   //if false
```
### Mengubah user
```
PUT: /users

data:
{
    "nama"      : "",
    "jurusan"   : "",  
    "nim"       : "",
    "about"     : ""
}

response:
true    //if true
false   //if false
```
### Menghapus users
```
DELETE: /users

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/AdeIlma/tekweb2022/main/img/user.png)
