document.getElementById('Form').addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Masukkan nilai tinggi dan berat yang valid.');
        return;
    }
    const bmi = calculateBMI(height, weight);
    const Category = getCategory(bmi, gender);

    document.getElementById('Value').textContent = bmi.toFixed(2);
    document.getElementById('Category').textContent = 'Kategori: ' + Category;
    document.getElementById('Description').textContent = getDescription(Category);
    document.getElementById('result').classList.remove('hidden');
});

// Untuk menghitung BMI
function calculateBMI(height, weight) {
    const heightInMeter = height / 100;
    return weight / (heightInMeter * heightInMeter);
}

// kategori BMI berdasarkan jenis kelamin
function getCategory(bmi, gender) {
    if (gender === 'Laki-laki') {
        if (bmi < 18.5) return 'Kurus';
        if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
        if (bmi >= 25 && bmi < 29.9) return 'Kelebihan Berat Badan';
        if (bmi >= 30) return 'Obesitas';
    } else {
        if (bmi < 17.5) return 'Kurus';
        if (bmi >= 17.5 && bmi < 23.9) return 'Normal';
        if (bmi >= 24 && bmi < 28.9) return 'Kelebihan Berat Badan';
        if (bmi >= 29) return 'Obesitas';
    }
}
// keterangan berdasarkan BMI
function getDescription(Category) {
    switch (Category) {
        case 'Kurus':
            return 'Anda tergolong kurus berdasarkan BMI Anda. Saran kami adalah untuk berkonsultasi dengan dokter atau ahli gizi untuk mengevaluasi dan meningkatkan pola makan Anda agar mencapai berat badan yang lebih sehat.Anda memiliki nilai BMI kurang dari 18,5.';
        case 'Normal':
            return 'BMI Anda berada dalam kategori normal, yang menandakan berat badan yang sehat sesuai dengan tinggi Anda. Tetap pertahankan pola makan dan gaya hidup sehat Anda untuk menjaga kesehatan secara keseluruhan. Kategori normal memiliki nilai BMI 18,5 - 24,9.';
        case 'Kelebihan Berat Badan':
            return 'Anda berada dalam kategori kelebihan berat badan menurut BMI Anda. Penting untuk mempertimbangkan perubahan gaya hidup seperti meningkatkan aktivitas fisik dan mengatur pola makan agar mencapai berat badan yang lebih sehat.Kelebihan berat badan terjadi karena nilai BMI 25,0 - 29,9.';
        case 'Obesitas':
            return 'Anda tergolong dalam kategori obesitas berdasarkan BMI Anda. Penting untuk mencari bantuan profesional seperti dokter atau ahli gizi untuk merencanakan program pengelolaan berat badan yang tepat dan mengurangi risiko kesehatan yang berhubungan dengan obesitas. Obesitas biasanya memiliki nilai BMI 30,00 atau lebih tinggi';
        default:
            return '';
    }
}
document.getElementById('resetButton').addEventListener('click', function () {
    // Mengosongkan hasil dan form input
    document.getElementById('Value').textContent = '';
    document.getElementById('Category').textContent = '';
    document.getElementById('Description').textContent = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('Form').reset();
});