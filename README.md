Saya membuat sebuah backend dengan menggunakan ExpressJs dan ORM Prisma.Schemanya adalah membuat dua model yaitu User dan Post, kemudian saya membuat register dan login dengan menggunakan json web token. Pada saat membuat endpoint create Post, saya membuat middleware agar user harus login terlebih dahulu.
Untuk meenjalankan project ini silahkan lakukan langkah sebagai berikut:
1. Clone project ke directory kalian
2. jalankan perintah npm install
3. buat file .env dengan kodenya sebagai berikut
   DATABASE_URL="file:./db.sqlite"
   PORT = 3000
   JWT_SECRET = "12345678" 
4. Jalankan perintah di terminal npm run dev
   
