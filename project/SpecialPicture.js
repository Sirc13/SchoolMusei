
// Функции для специального модального окна с несколькими фото
function getSpecialModalGallery(heroName) {

    let galleryHTML;
    if (heroName === 'Баландин Александр Иванович') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%208%D0%B3/1.png" alt="Фото 1 Баландина" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%208%D0%B3/2.png" alt="Фото 2 Баландина" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%208%D0%B3/3.png" alt="Фото 3 Баландина" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Сямтомов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D1%8F%D0%BC%D1%82%D0%BE%D0%BC%D0%BE%D0%B2%208%D0%B3/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D1%8F%D0%BC%D1%82%D0%BE%D0%BC%D0%BE%D0%B2%208%D0%B3/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D1%8F%D0%BC%D1%82%D0%BE%D0%BC%D0%BE%D0%B2%208%D0%B3/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Щелкунов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A9%D0%B5%D0%BB%D0%BA%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%2010/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A9%D0%B5%D0%BB%D0%BA%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%2010/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A9%D0%B5%D0%BB%D0%BA%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%2010/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Нюхин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D1%8E%D1%85%D0%B8%D0%BD%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D1%8E%D1%85%D0%B8%D0%BD%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D1%8E%D1%85%D0%B8%D0%BD%209%D0%B0/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Горбунов Юрий Николаевич') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D1%82%D0%B0%D1%80%D0%B5%D0%B5%D0%B2%D0%B0%208%D0%B2/1.png" alt="Фото 1 Горбунова" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D1%82%D0%B0%D1%80%D0%B5%D0%B5%D0%B2%D0%B0%208%D0%B2/2.png" alt="Фото 2 Горбунова" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Крюков') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BF%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BF%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Новиков') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Новосельцев А.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B3%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%208%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B3%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%208%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B3%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%208%D0%B0/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B3%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%208%D0%B0/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8E%D0%BA%D0%BB%D0%B5%D0%B2%D0%B0%209%D0%B1/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%2010/1.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Пермитин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/5.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%80%D0%BC%D0%B8%D1%82%D0%B8%D0%BD%D0%B0%208%D0%B3/6.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Новосельцев П.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/5.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%88%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD%D0%B0%2010/7.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Капустин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9B%D1%8B%D1%87%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B2/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9B%D1%8B%D1%87%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Махин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2011/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2011/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Коряковский И.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Коряковский М.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/5.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Коряковский С.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%80%D1%8F%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/3.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Дементьев') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2011/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2011/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2011/3.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Кузнецов') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D0%B0%D1%83%D1%81%D0%BD%D0%B8%D0%BE%208%D0%B3/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D0%B0%D1%83%D1%81%D0%BD%D0%B8%D0%BE%208%D0%B3/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D0%B0%D1%83%D1%81%D0%BD%D0%B8%D0%BE%208%D0%B3/3.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D0%B0%D1%83%D1%81%D0%BD%D0%B8%D0%BE%208%D0%B3/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D0%B0%D1%83%D1%81%D0%BD%D0%B8%D0%BE%208%D0%B3/5.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Малышева') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%BF%D1%8B%D0%BB%D0%BE%D0%B2%D0%B0%208%D0%B1%20%D0%B8%2010/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%BF%D1%8B%D0%BB%D0%BE%D0%B2%D0%B0%208%D0%B1%20%D0%B8%2010/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Меньшаков') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D1%83%D1%81%D0%BE%D0%BD%D0%BE%D0%B2%208%D0%B3/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9C%D1%83%D1%81%D0%BE%D0%BD%D0%BE%D0%B2%208%D0%B3/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Петрашев') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B0%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B1/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B0%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B1/4.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Черенцов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B0%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B1/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B0%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B1/3.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Мелентьев') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/1.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Чистяков') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9B%D1%8B%D1%87%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9B%D1%8B%D1%87%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%208%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Подпругин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%94%D1%83%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%94%D1%83%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Меркотун') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Низовцев') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D1%83%D0%BB%D0%B0%D1%85%208%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D1%83%D0%BB%D0%B0%D1%85%208%D0%B0/3.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Воробьёв') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0%209%D0%B0/3.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0%209%D0%B0/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0%209%D0%B0/5.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Чецкая') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/5.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A7%D0%B5%D1%86%D0%BA%D0%B0%D1%8F/6.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Викторов') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/5.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/7.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/8.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/9.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%2010/10.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Шехонин') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B5%D1%85%D0%BE%D0%BD%D0%B8%D0%BD%D0%B0/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B5%D1%85%D0%BE%D0%BD%D0%B8%D0%BD%D0%B0/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B5%D1%85%D0%BE%D0%BD%D0%B8%D0%BD%D0%B0/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Бакшеев') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D0%BA%D0%B8%D0%BD%208%D0%B3/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D0%BA%D0%B8%D0%BD%208%D0%B3/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D0%BA%D0%B8%D0%BD%208%D0%B3/3.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%94/1.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Грязов') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%BE%D1%81%D0%B0%D1%80%D0%B5%D0%B2/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%BE%D1%81%D0%B0%D1%80%D0%B5%D0%B2/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%BE%D1%81%D0%B0%D1%80%D0%B5%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Овсянников') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%BB%D1%82%D0%BE%D0%B2%D0%B8%D1%87%208%D0%B3/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%BB%D1%82%D0%BE%D0%B2%D0%B8%D1%87%208%D0%B3/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%BB%D1%82%D0%BE%D0%B2%D0%B8%D1%87%208%D0%B3/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Белых Г.') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/5.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%BB%D1%8B%D1%85%20%D0%90%208%D0%B3/7.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Баранов') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/5.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/6.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/7.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%B0%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2010/8.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Белых М.') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%92%D0%B0%D1%85%D1%80%D0%BE%D0%BC%D0%B5%D0%B5%D0%B2%D0%B0%208%D0%B0/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%92%D0%B0%D1%85%D1%80%D0%BE%D0%BC%D0%B5%D0%B5%D0%B2%D0%B0%208%D0%B0/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%92%D0%B0%D1%85%D1%80%D0%BE%D0%BC%D0%B5%D0%B5%D0%B2%D0%B0%208%D0%B0/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Тимаков') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%B7%D1%8B%D1%80%D0%B5%D0%B2%2010/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%B7%D1%8B%D1%80%D0%B5%D0%B2%2010/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9A%D0%BE%D0%B7%D1%8B%D1%80%D0%B5%D0%B2%2010/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Кошутин') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B2/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B2/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Соколов А.') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Соколов В.') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/4.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/5.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%208%D0%B3/6.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Гошев') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%93%D0%BE%D1%88%D0%B5%D0%B2/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%93%D0%BE%D1%88%D0%B5%D0%B2/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%93%D0%BE%D1%88%D0%B5%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Кожанов') {
        galleryHTML = `
            <div class="photo-gallery">
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2/1.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2/2.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2/3.png" alt="" style="cursor: default;">
               </div>
               <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2/4.png" alt="" style="cursor: default;">
               </div>
            </div>
        `;
    }
    if (heroName === 'Петухов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9E%D0%BB%D0%B5%D0%B9%D0%BD%D0%B8%D0%BA/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9E%D0%BB%D0%B5%D0%B9%D0%BD%D0%B8%D0%BA/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Елезов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D0%BB%D0%B5%D0%B7%D0%BE%D0%B2%D0%B0%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%95%D0%BB%D0%B5%D0%B7%D0%BE%D0%B2%D0%B0%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Барминский') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%97%D0%B0%D1%88%D0%B8%D1%85%D0%B8%D0%BD%208%D0%B3/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%97%D0%B0%D1%88%D0%B8%D1%85%D0%B8%D0%BD%208%D0%B3/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Мамедов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%93%D0%B0%D0%B4%D0%B6%D0%B8%D0%B5%D0%B2%D0%B0%208%D0%B1/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%93%D0%B0%D0%B4%D0%B6%D0%B8%D0%B5%D0%B2%D0%B0%208%D0%B1/3.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Поликарпов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%92%D0%B8%D1%81%D1%81%D0%B0%D1%80%D0%BE%D0%B2%208%D0%B3/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%92%D0%B8%D1%81%D1%81%D0%B0%D1%80%D0%BE%D0%B2%208%D0%B3/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Власов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%92%D0%BB%D0%B0%D1%81%D0%BE%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%92%D0%BB%D0%B0%D1%81%D0%BE%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Гнедин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%93%D0%BD%D0%B5%D0%B4%D0%B8%D0%BD/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%93%D0%BD%D0%B5%D0%B4%D0%B8%D0%BD/1.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Жуков К.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/5.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D1%81%D1%8F%D0%BD%D0%BE%D0%B2%208%D0%B1/6.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Жуков А.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/5.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/7.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/8.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%96%D1%83%D0%BA%D0%BE%D0%B2/9.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Баумгертнер С.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D1%83%D0%BC%D0%B3%D0%B5%D1%80%D1%82%D0%BD%D0%B5%D1%80%208%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B0%D1%83%D0%BC%D0%B3%D0%B5%D1%80%D1%82%D0%BD%D0%B5%D1%80%208%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Дресвянкин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%94%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D0%BD%D0%BA%D0%B8%D0%BD/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/2%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/%D0%94%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D0%BD%D0%BA%D0%B8%D0%BD/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Шихов') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D1%85%D0%BE%D0%B2%D0%B0%209%D0%B0/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A8%D0%B8%D1%85%D0%BE%D0%B2%D0%B0%209%D0%B0/2.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Хомутинников А. Н.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/7.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Хомутинников В. А.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%A2%D1%83%D1%80%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B1/4.png" alt="" style="cursor: default;">
                </div>
            </div>
        `;
    }
    if (heroName === 'Виноградов Л. А.') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%A1%D0%92%D0%9E/6.jpg" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%A1%D0%92%D0%9E/4.jpg" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    if (heroName === 'Бральнин') {
        galleryHTML = `
            <div class="photo-gallery">
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/1.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/2.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/3.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/4.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/5.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/6.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/7.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/8.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/9.png" alt="" style="cursor: default;">
                </div>
                <div class="photo-item">
                    <img src="https://4f267ac3-df8d-4c1e-a7b5-da5d95a9ecd1.selstorage.ru/%D0%92%D0%9E%D0%92/1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C/%D0%91%D0%B5%D0%B1%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0%208%D0%B2/10.png" alt="" style="cursor: default;">
                </div>
               
            </div>
        `;
    }
    
    return galleryHTML;
}