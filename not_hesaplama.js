

const grades = [55, 45, 60, 50, 70];


function ortalamaHesaplama(grades) {
    const toplam = grades.reduce((toplam, grade) => toplam + grade, 0);

    const ortalama = toplam / grades.length;

    let harfNot;
    if (ortalama >= 90) {
        harfNot = 'A';
    } else if (ortalama >= 80) {
        harfNot = 'B';
    } else if (ortalama >= 70) {
        harfNot = 'C';
    } else if (ortalama >= 60) {
        harfNot = 'D';
    } else {
        harfNot = 'F';
    }

    return { ortalama, harfNot };
}

const sonuc = ortalamaHesaplama(grades);

console.log(`Ortalamanız: ${sonuc.ortalama}, Harf Notunuz: ${sonuc.harfNot}`);