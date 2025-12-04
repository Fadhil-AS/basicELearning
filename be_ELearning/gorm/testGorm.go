package main

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// membuat tabel produk sebagai contoh kedalam postgree
type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main(){
	// melakukan konfigurasi ke postgree
	dsn := "host=localhost user=postgres password=postgres dbname=testGorm port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal konek ke database: ", err)
	}
	fmt.Println("Sukses terhubung ke Database!")

	err = db.AutoMigrate(&Product{})
	if err != nil {
		log.Fatal("Gagal migrasi database: ", err)
	}
	fmt.Println("Tabel 'products' berhasil dibuat/diupdate!")

	// Melakukan insert data
	fmt.Println("Sedang mencoba insert data...")
	db.Create(&Product{Code: "D42", Price: 100})

	// Melakukan mengambil dan membaca data
	var product Product
	result := db.First(&product, "code = ?", "D42") 

	if result.Error != nil {
		log.Fatal("Gagal mengambil data: ", result.Error)
	}

	fmt.Printf("BERHASIL! Data ditemukan: ID=%d, Code=%s, Price=%d\n", product.ID, product.Code, product.Price)

}