-- EMAS Metal - Referansları Güncelleme SQL
-- Bu dosyayı çalıştırmadan önce mevcut verileri silin veya aşağıdaki DELETE komutunu kullanın

-- Mevcut referansları sil
DELETE FROM company_references;

-- Yeni referansları ekle
INSERT INTO company_references (id, name, website_url, logo_url, industry, display_order, created_at)
VALUES
    (gen_random_uuid(), 'Arıkan Automotive', 'https://www.arikanautomotive.com/tr', '/images/references/arikan.png', 'Otomotiv Yan Sanayi', 1, NOW()),
    (gen_random_uuid(), 'Köklüce Makina', 'https://www.koklucemakina.com/', '/images/references/kokluce.png', 'Tarım Makineleri', 2, NOW()),
    (gen_random_uuid(), 'EPTA', 'https://eptaglobal.com/', '/images/references/epta.png', 'Beyaz Eşya Yan Sanayi', 3, NOW()),
    (gen_random_uuid(), 'ÖNAYSAN', 'https://www.onaysan.com.tr/', '/images/references/onaysan.png', 'Beyaz Eşya Yan Sanayi', 4, NOW()),
    (gen_random_uuid(), 'HİSARLAR', 'https://www.hisarlar.com.tr/index.html', '/images/references/hisarlar.png', 'Tarım Makineleri', 5, NOW()),
    (gen_random_uuid(), 'DÜŞLERSAN', 'https://www.duslersan.com/', '/images/references/duslersan.png', 'Robotik', 6, NOW());

-- Kontrol
SELECT * FROM company_references ORDER BY display_order;
