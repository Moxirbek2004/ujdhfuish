// Haftaning kunlari uchun mashg‘ulotlar jadvali
const schedule = {
    monday: ['Ko‘krak va orqa'],
    tuesday: ['Yelka va oyoqlar'],
    wednesday: ['Biseps va triseps'],
    thursday: ['Kardio'],
    friday: ['Yuqori tana'],
    saturday: ['Dam olish'],
    sunday: ['Dam olish']
};

// DOM elementlarini olish
const days = document.querySelectorAll('.day');

// Har bir kun uchun mashg‘ulotlarni ko‘rsatish
days.forEach(day => {
    const dayId = day.id;
    const daySchedule = schedule[dayId];

    const scheduleList = day.querySelector('p');
    scheduleList.textContent = daySchedule.join(', ');
});
