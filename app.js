// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

window.onload = function() {
    filterCertificates('course4');
};

function filterCertificates(course) {

    document.getElementById('course1-certificates').style.display = 'none';
    document.getElementById('course2-certificates').style.display = 'none';
    document.getElementById('course3-certificates').style.display = 'none';
    document.getElementById('course4-certificates').style.display = 'none';

    document.getElementById('course1-btn').classList.remove('active');
    document.getElementById('course2-btn').classList.remove('active');
    document.getElementById('course3-btn').classList.remove('active');
    document.getElementById('course4-btn').classList.remove('active');

    if (course === 'course1') {
        document.getElementById('course1-certificates').style.display = 'block';
        document.getElementById('course1-btn').classList.add('active');
    } else if (course === 'course2') {
        document.getElementById('course2-certificates').style.display = 'block';
        document.getElementById('course2-btn').classList.add('active');
    } else if (course === 'course3') {
        document.getElementById('course3-certificates').style.display = 'block';
        document.getElementById('course3-btn').classList.add('active');
    } else if (course === 'course4') {
        document.getElementById('course4-certificates').style.display = 'block';
        document.getElementById('course4-btn').classList.add('active');
    }
}