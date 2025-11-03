# Basit İsim Sorma Sitesi

Bu küçük proje ekranda kullanıcının ismini sorar ve selamlar.

Dosyalar:
- `index.html` — ana sayfa
- `styles.css` — basit stiller
- `script.js` — form davranışı ve localStorage kullanımı

Hızlı kullanım:
- En kolay: `index.html` dosyasını çift tıklayarak tarayıcıda açın.

Opsiyonel: küçük bir sunucu ile çalıştırmak için (PowerShell):

```powershell
# klasöre gidin
Set-Location "c:\Users\imhil\OneDrive\Belgeler\GitHub\ilk-projem\simple-site"
# Python yüklüyse basit bir HTTP sunucusu başlatın
python -m http.server 8000
# Sonra tarayıcıda açın: http://localhost:8000
```

Notlar:
- Girilen isim `localStorage` içinde saklanır; sayfa tekrar yüklendiğinde gösterilir.
- İsterseniz jest/uygulama testleri veya sunucu tarafı işlevsellik ekleyebilirim.